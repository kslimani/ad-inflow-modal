// can-autoplay.js

import { make } from './dom'
import { video } from './dummy'

// Create once the video element to avoid to set source each time can-autoplay function is called
// This fix an issue where play() is called when source is not fully loaded
// Note: a possible alternative *could* be to call load() after set source
const element = make('video', {
  attr: {
    playsinline: null,
    src: video.source,
  }
})

export default function (cb, timeout = 500) {
  let canAutoplay = (result, error = null) => {
    clearTimeout(timeoutId)
    cb(result, error)
  }

  let timeoutId = setTimeout(() => {
    canAutoplay(false, new Error('Timeout ' + timeout + ' ms has been reached'))
  }, timeout)

  let promise = element.play()

  if (promise !== undefined) {
    promise
      .then(() => canAutoplay(true))
      .catch(err => canAutoplay(false, err))
  } else {
    canAutoplay(true)
  }
}
