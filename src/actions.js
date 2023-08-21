import state from "./state.js"
import { updateDisplay } from "./timer.js"
import * as timer from "./timer.js"
import * as audio from "./sounds.js"
import * as elements from "./elements.js"
import { html } from "./elements.js"
// import { buttonPress } from "./sounds.js"

export function toggleRunning() {
  state.isRunning = !state.isRunning
  document.documentElement.classList.toggle("running")

  audio.buttonPress.play()

  if (state.isRunning) {
    timer.countdown()
  } else {
    clearTimeout(state.idCountdown)
    return
  }
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()

  audio.buttonPress.play()
}

export function increaseTimer() {
  state.minutes = state.minutes + 5

  timer.updateDisplay()
  audio.buttonPress.play()
}

export function decreaseTimer() {
  state.minutes = state.minutes - 5
  timer.updateDisplay()
  audio.buttonPress.play()
}

// export function forestAudio() {
//   html.classList.toggle("forest-audio")
//   html.classList.remove("marketplace", "rain", "fire")
//   elements.forest.classList.toggle("active-sound")

//   if (document.documentElement.classList.contains("forest-audio")) {
//     audio.forest.play()
//   } else {
//     audio.forest.pause()
//   }
// }

export function forestAudio() {
  state.soundForestPlay = elements.forest.classList.toggle("active-sound")

  if (state.soundForestPlay) {
    audio.forest.play()

    audio.fire.pause()
    audio.rain.pause()
    audio.market.pause()
    elements.marketplace.classList.remove("active-sound")
    elements.fire.classList.remove("active-sound")
    elements.rain.classList.remove("active-sound")
    state.soundRainPlay = false
    state.soundFirePlay = false
    state.soundMarketPlay = false
  }
  if (!state.soundForestPlay) {
    audio.forest.pause()
  }
}

export function marketplaceAudio() {
  elements.marketplace.classList.toggle("active-sound")
  state.soundMarketPlay = !state.soundMarketPlay

  if (state.soundMarketPlay) {
    audio.market.play()

    audio.fire.pause()
    audio.rain.pause()
    audio.forest.pause()
    elements.forest.classList.remove("active-sound")
    elements.fire.classList.remove("active-sound")
    elements.rain.classList.remove("active-sound")
    state.soundRainPlay = false
    state.soundFirePlay = false
    state.soundRainPlay = false
  } else if (!state.soundMarketPlay) {
    audio.market.pause()
  }
}

export function rainAudio() {
  state.soundRainPlay = elements.rain.classList.toggle("active-sound")

  if (state.soundRainPlay) {
    audio.rain.play()

    audio.fire.pause()
    audio.forest.pause()
    audio.market.pause()
    elements.marketplace.classList.remove("active-sound")
    elements.fire.classList.remove("active-sound")
    elements.forest.classList.remove("active-sound")
    state.soundForestPlay = false
    state.soundFirePlay = false
    state.soundMarketPlay = false
  } else if (!state.soundRainPlay) {
    audio.rain.pause()
  }
}

export function fireAudio() {
  elements.fire.classList.toggle("active-sound")
  state.soundFirePlay = !state.soundFirePlay

  if (state.soundFirePlay) {
    audio.fire.play()

    audio.forest.pause()
    audio.rain.pause()
    audio.market.pause()
    elements.marketplace.classList.remove("active-sound")
    elements.forest.classList.remove("active-sound")
    elements.rain.classList.remove("active-sound")
    state.soundRainPlay = false
    state.soundForestPlay = false
    state.soundMarketPlay = false
    return
  } else if (!state.soundFirePlay) {
    audio.fire.pause()
    return
  }
}
