import { play, pause, stop, increaseMinutes, decreaseMinutes } from './timer.js'

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonLight,
  buttonDark,
  buttonSetMode,
  Mode,
  cardForest,
  cardCoffeeshop,
  cardRain,
  cardFireplace,
  forestVolume,
  rainVolume,
  coffeeshopVolume,
  fireplaceVolume
} from './elements.js'

import { forestCard, rainCard, coffeeshopCard, fireplaceCard } from './cards.js'
import {
  forestAudio,
  rainAudio,
  coffeshopAudio,
  fireplaceAudio
} from './sounds.js'

buttonSetMode.addEventListener('click', function () {
  if (Mode.classList.contains('light-mode')) {
    Mode.classList.remove('light-mode')
    Mode.classList.add('dark-mode')
  } else {
    Mode.classList.remove('dark-mode')
    Mode.classList.add('light-mode')
  }

  if (buttonDark.classList.contains('hide')) {
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')
  } else {
    buttonLight.classList.remove('hide')
    buttonDark.classList.add('hide')
  }
})

buttonPlay.addEventListener('click', function () {
  play()
})

buttonPause.addEventListener('click', function () {
  pause()
})

buttonStop.addEventListener('click', function () {
  stop()
})

buttonIncrease.addEventListener('click', function () {
  increaseMinutes()
})

buttonDecrease.addEventListener('click', function () {
  decreaseMinutes()
})

cardForest.addEventListener('click', function () {
  forestCard()
})

cardRain.addEventListener('click', function () {
  rainCard()
})

cardCoffeeshop.addEventListener('click', function () {
  coffeeshopCard()
})

cardFireplace.addEventListener('click', function () {
  fireplaceCard()
})

forestVolume.addEventListener('change', function () {
  forestAudio.volume = this.value
})

rainVolume.addEventListener('change', function () {
  rainAudio.volume = this.value
})

coffeeshopVolume.addEventListener('change', function () {
  coffeshopAudio.volume = this.value
})

fireplaceVolume.addEventListener('change', function () {
  fireplaceAudio.volume = this.value
})

export { forestVolume, rainVolume, coffeeshopVolume, fireplaceVolume }
