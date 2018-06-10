import "../sass/main.sass"
import "../sass/widget-box.sass"
import "../sass/roboto.sass"
import "../sass/score-calc.sass"
import ArrowsView from "./arrows-view"
import Calculator from "./calc"
const arrows = new ArrowsView
// const calc = new Calculator

// document.getElementsByClassName("widget-box__button")[0].onclick = () => calc.turn("button")
// document.getElementsByClassName("score-calc__change-score_add")[0].onclick = () => calc.turn("add", 0)
// document.getElementsByClassName("score-calc__change-score_add")[1].onclick = () => calc.turn("add", 1)
// document.getElementsByClassName("score-calc__change-score_remove")[0].onclick = () => calc.turn("remove", 0)
// document.getElementsByClassName("score-calc__change-score_remove")[1].onclick = () => calc.turn("remove", 1)
arrows.disable();
// calculateDateDiff(1527847200000)
// function calculateDateDiff (gameTime) {
//   var time = new Date(gameTime)
//   var months = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
//   
//   alert(`${time.getDate()} ${months(time.getMonth)} ${time.getFullYear}, ${time.getHours}:${time.getMinutes}`)
// }