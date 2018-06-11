import ArrowsView from "./arrows-view"

export default class viewConstructor {
  constructor() {
    this.arrows = new ArrowsView
    this.num = document.getElementsByClassName("score-calc__score_num")
    this.ratio = document.getElementsByClassName("widget-box__ratio")
  }
  change(num1, num2, ratio) {
    // change values
    this.num[0].innerHTML = num1
    this.num[1].innerHTML = num2
    this.ratio[0].innerHTML = ratio
    // checking arrows buttons to disable and enable
    this.arrows.disable(num1, num2);
  }
  draw (num1, num2, ratio, time, tour, team1, team2) {
    // draw first time 
    document.getElementsByClassName("widget-box__header-title")[0].innerHTML = `${tour} ${time}`
    document.getElementsByClassName("widget-box__teams")[0].innerHTML = `${team1} – ${team2}`
    this.num[0].innerHTML = num1
    this.num[1].innerHTML = num2
    this.ratio[0].innerHTML = ratio
    // checking arrows buttons to disable and enable 
    this.arrows.disable(num1, num2);      
  }
  
}