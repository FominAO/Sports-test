import  viewConstructor from "./viewConstructor"
// This module creates onload info and describe actions on buttons with onChange() method
export default class Calculator {
  constructor() {
    this.json = require('../2a08e5726e3b4391be96afcdfab42.json');
    this.default = {} // Object with default values for all variables
    this.num1 = +document.getElementsByClassName("score-calc__score_num")[0].innerHTML
    this.num2 = +document.getElementsByClassName("score-calc__score_num")[1].innerHTML 
    this.arrayOfArrows = document.querySelectorAll("[class^=score-calc__change-score_]") // include all 4 arrows
  }
  setDefault() {
    // bind navigation buttons
    document.getElementsByClassName("score-calc__change-score_add")[0].onclick = () => this.onChange(1, "left")
    document.getElementsByClassName("score-calc__change-score_add")[1].onclick = () => this.onChange(1, "right")
    document.getElementsByClassName("score-calc__change-score_remove")[0].onclick = () => this.onChange(-1, "left")
    document.getElementsByClassName("score-calc__change-score_remove")[1].onclick = () => this.onChange(-1, "right")
    // form default object
    this.default.num1 = 0
    this.default.num2 = 0
    this.default.time = this.calculateDateDiff(this.json.date)
    this.default.tour = this.json.tournament
    this.default.team1 = this.json.firstTeam
    this.default.team2 = this.json.secondTeam
    // get coefficient from json
    this.default.ratio = this.json.coefficients[`${this.default.num1}:${this.default.num2}`]
    // form default http request
    this.default.url = `${this.json.url}?score=${this.default.num1}:${this.default.num2}`
    // bind submmit button
    document.getElementsByClassName("widget-box__button")[0].onclick = () => window.open(this.default.url)
    // inserting default data
    let viewConst = new viewConstructor
    viewConst.draw(this.default.num1, this.default.num2, this.default.ratio, this.default.time, this.default.tour, this.default.team1, this.default.team2)
  }
  
  onChange(type, side) {
    // change score depends on actual value and side 
      if (side == "left") {
        
        this.num1 = +document.getElementsByClassName("score-calc__score_num")[0].innerHTML + type 
        
        if ((this.num1 < 0) || (this.num1 > 8)) {
          this.num1 = +document.getElementsByClassName("score-calc__score_num")[0].innerHTML
        }
      
      } else {
        
        this.num2 = +document.getElementsByClassName("score-calc__score_num")[1].innerHTML + type
        
        if ((this.num2 < 0) || (this.num2 > 8)) {
          this.num2 = +document.getElementsByClassName("score-calc__score_num")[1].innerHTML
        }
      }
    // form changing http request
    this.url = `${this.json.url}?score=${this.num1}:${this.num2}`
    document.getElementsByClassName("widget-box__button")[0].onclick = () => window.open(this.url)

    this.ratio = this.json.coefficients[`${this.num1}:${this.num2}`]
    // inserting new data
    let viewConst = new viewConstructor
    viewConst.change(this.num1, this.num2, this.ratio)
  }  
  // formatig date fron json
  calculateDateDiff (gameTime) {
    var time = new Date(gameTime*1000)
    var months = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    var minutes = "";
    
    if (time.getMinutes() < 10) {
      minutes = "0" + time.getMinutes()
    } else {
      minutes = time.getMinutes()
    }
    return `${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}, ${time.getHours()}:${minutes}`
  }
}