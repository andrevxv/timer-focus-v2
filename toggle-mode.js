import { buttonToggleMode } from "./src/elements.js"

let darkmode = true

buttonToggleMode.addEventListener("click", (e) => {
  document.documentElement.classList.toggle("light")

  let mode = darkmode ? "light" : "dark"

  e.currentTarget.querySelector("span").textContent = `${mode} mode ativado`

  darkmode = !darkmode
})
