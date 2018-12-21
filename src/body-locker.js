// body-locker.js

import { addOneClass, removeClass } from './dom'

let isiPad = navigator.userAgent.match(/iPad/i) != null

export default class BodyLocker {
  constructor() {
    this._c = 'ad-inflow-body'
    this._el = 'touchmove'
    this._ep = [
      'touch',
      'touchstart',
      'touchmove',
      'touchcancel',
    ]
    this._en = [
      'touchend',
      'mousedown',
    ]

    if (isiPad) {
      this._en.unshift('touchstart')
    }

    this._lock = (e) => {
      e.preventDefault()
    }
    this._prevent = (e) => {
      e.preventDefault()
    }
    this._prevented = (e) => {
      e.preventDefault()

      if (this._p) {
        return
      }

      this._p = true
      this._next()

      this._en.forEach((e) => {
        document.body.removeEventListener(e, this._prevented, {
          capture: true,
          passive: false,
          once: true,
        })
      })
      this._ep.forEach((e) => {
        document.body.removeEventListener(e, this._prevent, {
          capture: true,
          passive: false,
          once: true,
        })
      })
    }
  }

  lock() {
    addOneClass(document.body, this._c)
    document.body.addEventListener(this._el, this._lock, {
      passive: false,
    })
  }

  unlock() {
    removeClass(document.body, this._c)
    document.body.removeEventListener(this._el, this._lock, {
      passive: false,
    })
  }

  prevent(next) {
    this._p = false
    this._next = next
    this._en.forEach((e) => {
      document.body.addEventListener(e, this._prevented, {
        capture: true,
        passive: false,
        once: true,
      })
    })
    this._ep.forEach((e) => {
      document.body.addEventListener(e, this._prevent, {
        capture: true,
        passive: false,
        once: true,
      })
    })
  }
}
