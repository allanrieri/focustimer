import {
  cardForest,
  cardCoffeeshop,
  cardRain,
  cardFireplace
} from './elements.js'

import {
  forestVolume,
  rainVolume,
  coffeeshopVolume,
  fireplaceVolume
} from './index.js'

import {
  forestAudio,
  rainAudio,
  coffeshopAudio,
  fireplaceAudio
} from './sounds.js'

function forestCard() {
  if (cardForest.classList.contains('selected')) {
    cardForest.classList.remove('selected')
    forestAudio.pause()
  } else {
    cardForest.classList.add('selected')
    forestAudio.play()
  }

  cardRain.classList.remove('selected')
  cardCoffeeshop.classList.remove('selected')
  cardFireplace.classList.remove('selected')

  rainAudio.pause()
  coffeshopAudio.pause()
  fireplaceAudio.pause()

  forestVolume.value = 0.5
  forestAudio.volume = 0.5
  rainVolume.value = 0.5
  rainAudio.volume = 0.5
  coffeeshopVolume.value = 0.5
  coffeshopAudio.volume = 0.5
  fireplaceVolume.value = 0.5
  fireplaceAudio.volume = 0.5
}

function rainCard() {
  if (cardRain.classList.contains('selected')) {
    cardRain.classList.remove('selected')
    rainAudio.pause()
  } else {
    cardRain.classList.add('selected')
    rainAudio.play()
  }

  cardForest.classList.remove('selected')
  cardCoffeeshop.classList.remove('selected')
  cardFireplace.classList.remove('selected')

  forestAudio.pause()
  coffeshopAudio.pause()
  fireplaceAudio.pause()

  forestVolume.value = 0.5
  forestAudio.volume = 0.5
  rainVolume.value = 0.5
  rainAudio.volume = 0.5
  coffeeshopVolume.value = 0.5
  coffeshopAudio.volume = 0.5
  fireplaceVolume.value = 0.5
  fireplaceAudio.volume = 0.5
}

function coffeeshopCard() {
  if (cardCoffeeshop.classList.contains('selected')) {
    cardCoffeeshop.classList.remove('selected')
    coffeshopAudio.pause()
  } else {
    cardCoffeeshop.classList.add('selected')
    coffeshopAudio.play()
  }

  cardForest.classList.remove('selected')
  cardRain.classList.remove('selected')
  cardFireplace.classList.remove('selected')

  forestAudio.pause()
  rainAudio.pause()
  fireplaceAudio.pause()

  forestVolume.value = 0.5
  forestAudio.volume = 0.5
  rainVolume.value = 0.5
  rainAudio.volume = 0.5
  coffeeshopVolume.value = 0.5
  coffeshopAudio.volume = 0.5
  fireplaceVolume.value = 0.5
  fireplaceAudio.volume = 0.5
}

function fireplaceCard() {
  if (cardFireplace.classList.contains('selected')) {
    cardFireplace.classList.remove('selected')
    fireplaceAudio.pause()
  } else {
    cardFireplace.classList.add('selected')
    fireplaceAudio.play()
  }

  cardForest.classList.remove('selected')
  cardRain.classList.remove('selected')
  cardCoffeeshop.classList.remove('selected')

  forestAudio.pause()
  rainAudio.pause()
  coffeshopAudio.pause()

  forestVolume.value = 0.5
  forestAudio.volume = 0.5
  rainVolume.value = 0.5
  rainAudio.volume = 0.5
  coffeeshopVolume.value = 0.5
  coffeshopAudio.volume = 0.5
  fireplaceVolume.value = 0.5
  fireplaceAudio.volume = 0.5
}

export { forestCard, rainCard, coffeeshopCard, fireplaceCard }
