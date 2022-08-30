const forestAudio = new Audio('./sounds/Forest.mp3')
const rainAudio = new Audio('./sounds/Rain.mp3')
const coffeshopAudio = new Audio('./sounds/Coffeeshop.mp3')
const fireplaceAudio = new Audio('./sounds/Fireplace.mp3')
const buttonPressAudio = new Audio('./sounds/ButtonPress.mp3')
const kitchenTimerAudio = new Audio('./sounds/KitchenTimer.mp3')

forestAudio.loop = true
rainAudio.loop = true
coffeshopAudio.loop = true
fireplaceAudio.loop = true

function timeEnd() {
  kitchenTimerAudio.play()
}

export {
  forestAudio,
  rainAudio,
  coffeshopAudio,
  fireplaceAudio,
  buttonPressAudio,
  kitchenTimerAudio,
  timeEnd
}
