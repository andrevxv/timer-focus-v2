import state from "./state.js"
import * as elements from "./elements.js"
import * as action from "./actions.js"
import "./sounds.js"
import { endTimer } from "./sounds.js"

export function countdown() {
  state.idCountdown = setTimeout(() => {
    if (!state.isRunning) {
      return
    }
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--

    if (seconds < 0) {
      minutes--
      seconds = 60
    }
    if (minutes < 0) {
      action.reset()
      endTimer.play()

      return
    }

    console.log(seconds)
    countdown()
    updateDisplay(minutes, seconds)
  }, 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elements.minutes.textContent = String(minutes).padStart(2, "0")
  elements.seconds.textContent = String(seconds).padStart(2, "0")
}
