// body-locker.js

import { addOneClass, removeClass } from './dom'

let isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

export default class BodyLocker {
  constructor() {
    this._class = 'ad-inflow-body'
    this._lockEvents = 'touchmove'
    this._preventEvents = [
      'touch',
      'touchstart',
      'touchmove',
      'touchcancel',
    ]
    this._preventedEvents = [
      'touchend',
      'mousedown',
    ]

    if (isiOS) {
      // "touchend" event is not a user interaction on iOS
      this._preventedEvents.unshift('touchstart')
    }

    this._lock = (e) => {
      e.preventDefault()
    }
    this._prevent = (e) => {
      e.preventDefault()
    }
    this._prevented = (e) => {
      e.preventDefault()

      if (this._isPrevented) {
        return
      }

      this._isPrevented = true
      this._next()

      this._preventedEvents.forEach((e) => {
        document.body.removeEventListener(e, this._prevented, {
          capture: true,
          passive: false,
          once: true,
        })
      })
      this._preventEvents.forEach((e) => {
        document.body.removeEventListener(e, this._prevent, {
          capture: true,
          passive: false,
          once: true,
        })
      })
    }
  }

  lock() {
    addOneClass(document.body, this._class)
    document.body.addEventListener(this._lockEvents, this._lock, {
      passive: false,
    })
  }

  unlock() {
    removeClass(document.body, this._class)
    document.body.removeEventListener(this._lockEvents, this._lock, {
      passive: false,
    })
  }

  prevent(next) {
    this._isPrevented = false
    this._next = next
    this._preventedEvents.forEach((e) => {
      document.body.addEventListener(e, this._prevented, {
        capture: true,
        passive: false,
        once: true,
      })
    })
    this._preventEvents.forEach((e) => {
      document.body.addEventListener(e, this._prevent, {
        capture: true,
        passive: false,
        once: true,
      })
    })
  }
}
