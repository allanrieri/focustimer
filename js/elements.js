const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')
const buttonSetMode = document.querySelector('.setMode')
const Mode = document.querySelector('.light-mode')

const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffeeshop = document.querySelector('.coffeeshop')
const cardFireplace = document.querySelector('.fireplace')

const forestVolume = document.querySelector('.forest-volume')
const rainVolume = document.querySelector('.rain-volume')
const coffeeshopVolume = document.querySelector('.coffeeshop-volume')
const fireplaceVolume = document.querySelector('.fireplace-volume')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonLight,
  buttonDark,
  buttonSetMode,
  Mode,
  minutesDisplay,
  secondsDisplay,
  cardForest,
  cardCoffeeshop,
  cardRain,
  cardFireplace,
  forestVolume,
  rainVolume,
  coffeeshopVolume,
  fireplaceVolume
}
