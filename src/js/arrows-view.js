export default class ArrowsView {
  constructor() {
    this.firstNum = +document.getElementsByClassName("score-calc__score_num")[0].innerHTML
    this.secondNum = +document.getElementsByClassName("score-calc__score_num")[1].innerHTML
    this.arrayOfArrows = [
      document.getElementsByClassName("score-calc__change-score_add")[0],
      document.getElementsByClassName("score-calc__change-score_add")[1],
      document.getElementsByClassName("score-calc__change-score_remove")[0],
      document.getElementsByClassName("score-calc__change-score_remove")[1]
    ]
  }
  disable() {
    if ((this.firstNum == 8) || (this.secondNum == 8)) {
      if (this.firstNum == 8) {
        this.arrayOfArrows[0].className += "_disabled"
      } 
      if (this.secondNum == 8) {   
        this.arrayOfArrows[1].className += "_disabled"
      }
    }
    if ((this.firstNum == 0) || (this.secondNum == 0)) {
      if (this.firstNum == 0) {
        this.arrayOfArrows[2].className += "_disabled"
      } 
      if (this.secondNum == 0) {
        this.arrayOfArrows[3].className += "_disabled" 
      }
    }
    this.enable()
  }
  enable() {
      console.log("enable") 
      if ((this.firstNum != 0) && (this.firstNum != 8)) {
        this.arrayOfArrows[0].className = this.arrayOfArrows[0].className.slice(0, 28)
        this.arrayOfArrows[2].className = this.arrayOfArrows[2].className.slice(0, 28)
      }
      if ((this.secondNum != 0) && (this.secondNum != 8)) {
        this.arrayOfArrows[1].className = this.arrayOfArrows[1].className.slice(0, 31)
        this.arrayOfArrows[3].className = this.arrayOfArrows[3].className.slice(0, 31)
      }
  }
}