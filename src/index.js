import { make, el, addOneClass, removeClass } from './dom'
import { svg } from './dummy'
import BodyLocker from './body-locker'
import detectMobile from './detect-mobile'
import canAutoPlay from './can-autoplay'
import ImaAdPlayer from 'ima-ad-player'
import './styles.css'
import closeIcon from './close.svg'
import playIcon from './play.svg'

let isMobile = detectMobile()

export default class AdInflowModal {
  constructor(options) {
    this._e = {}
    this._t = {}
    this._body = new BodyLocker()
    this._configure(options)

    this._onClose = () => {
      this.close()
    }

    this._onPlayIntent = (e) => {
      this._hidePlayOverlay()
      this._showCloseButton(this._o.closeButtonDelay)
      this._adPlayer.play()
    }
  }

  _configure(o) {
    o.closeButtonDelay || (o.closeButtonDelay = 5000)
    o.skipAdIfNoAutoplay || (o.skipAdIfNoAutoplay = false)
    o.canAutoplayTimeout || (o.canAutoplayTimeout = 1000)
    o.logAdPlayerErrors || (o.logAdPlayerErrors = true)
    o.destroyTimeout || (o.destroyTimeout = 10000)

    if (! o.imaAdPlayer) {
      throw new Error('AdInflowModal error: ima ad player configuration is missing')
    }

    this._o = o
  }

  open() {
    this._makeModal()
    this._appendModal()
    this._makeAdPlayer()
  }

  close() {
    if (this._adPlayer) {
      this._adPlayer.stop()
    } else {
      this._close()
    }
  }

  resize(width, height) {
    if (this._e.content) {
      this._e.content.setAttribute('style', 'width:' + width + 'px;height:' + height + 'px;')
      this._adPlayer && this._adPlayer.resize(width, height)
    }
  }

  _makeModal() {
    if (this._e.modal) {
      this._clearAllTimeout(() => {
        this._removeModal()
        this._destroyAdPlayer()
      })
    }

    this._e.modal = make('div', {
      class: 'ad-inflow-modal',
    })

    this._e.content = make('div', {
      class: 'ad-inflow-modal-content',
    })

    this._e.close = make('span', {
      class: 'ad-inflow-modal-close',
      html: closeIcon,
    })

    this._e.modal.appendChild(this._e.content)

    this._e.ad = make('div', {
      class: 'ad-inflow',
    })

    this._e.adContainerVideo = make('div', {
      class: 'ad-inflow-container-video',
    })

    this._e.adVideo = make('video', {
      class: 'ad-inflow-video',
      attr: {
        playsinline: null,
        poster: svg.source,
      },
    })

    this._e.adContainer = make('div', {
      class: 'ad-inflow-container',
    })

    this._e.adOverlay = make('div', {
      class: 'ad-inflow-overlay',
    })

    this._e.adOverlayIcon = make('div', {
      class: 'ad-inflow-overlay-icon',
      html: playIcon,
    })

    this._e.adOverlay.appendChild(this._e.adOverlayIcon)
    this._e.adContainerVideo.appendChild(this._e.adVideo)
    this._e.ad.appendChild(this._e.adContainerVideo)
    this._e.ad.appendChild(this._e.adContainer)
    this._e.ad.appendChild(this._e.adOverlay)
    this._e.content.appendChild(this._e.ad)
    this._e.content.appendChild(this._e.close)
  }

  _appendModal() {
    if (document.body && this._e.modal) {
      document.body.appendChild(this._e.modal)
      this._e.close.addEventListener('click', this._onClose)
    }
  }

  _removeModal() {
    if (document.body && this._e.modal) {
      this._e.close.removeEventListener('click', this._onClose)
      this._e.modal = document.body.removeChild(this._e.modal)
    }
    this._e = {}
  }

  _handlePlayerError(o) {
    let e = o

    if (e.data) {
      e = e.data
    }

    if (e.getError) {
      e = e.getError()
    }

    if (e.toString) {
      e = e.toString()
    }

    console.log('ad-inflow-modal:', e)
  }

  _makeAdPlayer() {
    // Assumes "this._o.imaAdPlayer" is configuration object
    this._o.imaAdPlayer.video = this._e.adVideo
    this._o.imaAdPlayer.displayContainer = this._e.adContainer

    ImaAdPlayer(this._o.imaAdPlayer, (player, error) => {
      if (error) {
        // Ad player creation failed
        this._o.logAdPlayerErrors && this._handlePlayerError(error)
        return this._destroy()
      }

      this._adPlayer = player
      this._handleAutoplay(this._o.canAutoplayTimeout)
    })
  }

  _destroyAdPlayer() {
    if (this._adPlayer) {
      delete this._adPlayer
    }
  }

  _handleAutoplay(timeout) {
    if (isMobile) {
      this._open(false)
    } else {
      canAutoPlay((result, error) => {
        this._open(result)
      }, timeout)
    }
  }

  _show() {
    this._e.modal && addOneClass(this._e.modal, 'ad-inflow-modal-show')
  }

  _hide() {
    this._e.modal && removeClass(this._e.modal, 'ad-inflow-modal-show')
  }

  _open(autoplay) {
    if (! autoplay && this._o.skipAdIfNoAutoplay) {
      return this._destroy()
    }

    if (this._o.logAdPlayerErrors) {
      this._adPlayer.on('error', (o) => {
        this._handlePlayerError(o)
      })

      this._adPlayer.on('ad_error', (o) => {
        this._handlePlayerError(o)
      })
    }

    this._adPlayer.on('ad_end', (o) => {
      this._close()
    })

    if (autoplay) {
      // Modal will show up on "ad play" ad player event
      this._adPlayer.on('ad_play', (o) => {
        this._show()
        this._body.lock()
      })

      this._showCloseButton(this._o.closeButtonDelay)
      this._adPlayer.play()
    } else {
      // Play must be done via a user action on mobile devices
      this._show()
      this._body.lock()
      this._showPlayOverlay()
    }
  }

  _showCloseButton(delay) {
    this._t.close = setTimeout(() => {
      this._e.close && addOneClass(this._e.close, 'ad-inflow-modal-close-show')
    }, delay)
  }

  _hideCloseButton() {
    this._e.close && removeClass(this._e.close, 'ad-inflow-modal-close-show')
  }

  _showPlayOverlay() {
    if (this._e.adOverlay) {
      this._e.adOverlay.addEventListener('click', this._onPlayIntent)
      addOneClass(this._e.adOverlay, 'ad-inflow-overlay-show')
    }
  }

  _hidePlayOverlay() {
    if (this._e.adOverlay) {
      this._e.adOverlay.removeEventListener('click', this._onPlayIntent)
      removeClass(this._e.adOverlay, 'ad-inflow-overlay-show')
    }
  }

  _close() {
    this._hideCloseButton()
    this._hide()
    this._body.unlock()
    this._destroy(this._o.destroyTimeout)
  }

  _clearAllTimeout(next) {
    for (const t in this._t) {
      if (typeof this._t[t] === 'number') {
        clearTimeout(this._t[t])
      }
    }
    this._t = {}
    next()
  }

  _destroy(delay = 0) {
    this._clearAllTimeout(() => {
      if (delay > -1) {
        this._t.destroy = setTimeout(() => {
          this._removeModal()
          this._destroyAdPlayer()
        }, delay)
      }
    })
  }
}
