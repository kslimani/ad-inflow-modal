// body-locker.js

import { addOneClass, removeClass } from './dom'

export default class BodyLocker {
  constructor() {
    this._e = 'touchmove'
    this._c = 'ad-inflow-body'
    this._prevent = (e) => {
      e.preventDefault()
    }
  }

  lock() {
    addOneClass(document.body, this._c)
    document.body.addEventListener(this._e, this._prevent, {
      passive: false,
    })
  }

  unlock() {
    removeClass(document.body, this._c)
    document.body.removeEventListener(this._e, this._prevent, {
      passive: false,
    })
  }
}
