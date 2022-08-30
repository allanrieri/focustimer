import {
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

import { buttonPressAudio, timeEnd } from './sounds.js'

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function reset() {
  seconds = 0
  updateDisplay(minutes, seconds)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    if (isFinished) {
      timeEnd()
      reset()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function play() {
  countdown()
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonPressAudio.play()
}

function pause() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
  buttonPressAudio.play()
}

function stop() {
  reset()
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonPressAudio.play()
}

function increaseMinutes() {
  minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)
  seconds = Number(secondsDisplay.textContent)

  updateDisplay(minutes, seconds)
  buttonPressAudio.play()
}

function decreaseMinutes() {
  minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0)
  seconds = Number(secondsDisplay.textContent)

  updateDisplay(minutes, seconds)
  buttonPressAudio.play()
}

export {
  timerTimeOut,
  updateDisplay,
  reset,
  countdown,
  play,
  pause,
  stop,
  increaseMinutes,
  decreaseMinutes
}
