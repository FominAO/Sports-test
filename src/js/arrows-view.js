export default class ArrowsView {
  constructor() {
    this.arrayOfArrows = document.querySelectorAll("[class^=score-calc__change-score_]") // include all 4 arrows
    this.disabledAdd = "score-calc__change-score_add_disabled"
    this.disabledRemove = "score-calc__change-score_remove_disabled"    
    this.enabledAdd = "score-calc__change-score_add"
    this.enabledRemove = "score-calc__change-score_remove"
    
  }
  disable(num1, num2) {
    // disable arrows with 0 or 8 values
    if ((num1 == 8) || (num2 == 8)) {
      if ((num1 == 8) && !(this.arrayOfArrows[0].classList.contains(this.disabledAdd))) {
        this.arrayOfArrows[0].className = this.disabledAdd
      } 
      if ((num2 == 8) && !(this.arrayOfArrows[2].classList.contains(this.disabledAdd))) {   
        this.arrayOfArrows[2].className = this.disabledAdd
      }
    }
    if ((num1 == 0) || (num2 == 0)) {
      if ((num1 == 0) && !(this.arrayOfArrows[1].classList.contains(this.disabledRemove))) {
        this.arrayOfArrows[1].className = this.disabledRemove
      } 
      if ((num2 == 0) && !(this.arrayOfArrows[3].classList.contains(this.disabledRemove))) {
        this.arrayOfArrows[3].className = this.disabledRemove 
      }
    }
    this.enable(num1, num2)
  }
  enable(num1, num2) {
      // enable arrows changed from 0 or 8 values
      if ((num1 != 0) && (num1 != 8)) {
        this.arrayOfArrows[0].className = this.enabledAdd
        this.arrayOfArrows[1].className = this.enabledRemove
      }
      if ((num2 != 0) && (num2 != 8)) {
        this.arrayOfArrows[2].className = this.enabledAdd
        this.arrayOfArrows[3].className = this.enabledRemove
      }
  }
}