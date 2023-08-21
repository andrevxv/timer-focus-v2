import * as elements from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
  elements.controls.addEventListener("click", (e) => {
    const action = e.target.dataset.actioncontrols
    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}
registerControls()

export function registerControlsAudio() {
  elements.selectAudio.addEventListener("click", (event) => {
    const actionAudio = event.target.dataset.selectaudio
    if (typeof actions[actionAudio] != "function") {
      return
    }
    actions[actionAudio]()
  })
}
registerControlsAudio()
