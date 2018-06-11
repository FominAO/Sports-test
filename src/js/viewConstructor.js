import ArrowsView from "./arrows-view"

export default class viewConstructor {
  constructor() {
    this.arrows = new ArrowsView 
  }
  change(num1, num2, ratio) {
    document.getElementsByClassName("score-calc__score_num")[0].innerHTML = num1
    document.getElementsByClassName("score-calc__score_num")[1].innerHTML = num2
    document.getElementsByClassName("widget-box__ratio")[0].innerHTML = ratio
    this.arrows.disable(num1, num2);
  }
  draw (num1, num2, ratio, time, tour, team1, team2) {
    document.getElementsByClassName("widget-box__header-title")[0].innerHTML = `${tour} ${time}`
    document.getElementsByClassName("widget-box__teams")[0].innerHTML = `${team1} – ${team2}`
    document.getElementsByClassName("score-calc__score_num")[0].innerHTML = num1
    document.getElementsByClassName("score-calc__score_num")[1].innerHTML = num2
    document.getElementsByClassName("widget-box__ratio")[0].innerHTML = ratio 
    this.arrows.disable(num1, num2);      
  }
  
}