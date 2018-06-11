export default class ArrowsView {
  constructor() {
    this.arrayOfArrows = document.querySelectorAll("[class^=score-calc__change-score_]") // include all 4 arrows
  }
  disable(num1, num2) {
    // disable arrows with 0 or 8 values
    if ((num1 == 8) || (num2 == 8)) {
      if ((num1 == 8) && (this.arrayOfArrows[0].className.slice(-8) != "disabled")) {
        this.arrayOfArrows[0].className += "_disabled"
      } 
      if ((num2 == 8) && (this.arrayOfArrows[2].className.slice(-8) != "disabled")) {   
        this.arrayOfArrows[2].className += "_disabled"
      }
    }
    if ((num1 == 0) || (num2 == 0)) {
      if ((num1 == 0) && (this.arrayOfArrows[1].className.slice(-8) != "disabled")) {
        this.arrayOfArrows[1].className += "_disabled"
      } 
      if ((num2 == 0) && (this.arrayOfArrows[3].className.slice(-8) != "disabled")) {
        this.arrayOfArrows[3].className += "_disabled" 
      }
    }
    this.enable(num1, num2)
  }
  enable(num1, num2) {
      // enable arrows changed from 0 or 8 values
      if ((num1 != 0) && (num1 != 8)) {
        this.arrayOfArrows[0].className = this.arrayOfArrows[0].className.slice(0, 28)
        this.arrayOfArrows[1].className = this.arrayOfArrows[1].className.slice(0, 31)
      }
      if ((num2 != 0) && (num2 != 8)) {
        this.arrayOfArrows[2].className = this.arrayOfArrows[2].className.slice(0, 28)
        this.arrayOfArrows[3].className = this.arrayOfArrows[3].className.slice(0, 31)
      }
  }
}