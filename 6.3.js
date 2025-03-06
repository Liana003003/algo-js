/* This code isn't working right, I will fix it on the weekend when I will have more time */

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
  this.topLeftXPos = topLeftXPos;
  this.topLeftYPos = topLeftYPos;
  this.width = width;
  this.length = length;
    }
    collides(otherRectangle){
        if ((this.topLeftXPos + this.width >= otherRectangle.topLeftXPos && this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width) ||
        (this.topLeftYPos + this.height >= otherRectangle.topLeftYPos && this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.height))
    {return true} else {return false}
    }
  
  }
  let Rectang1 = new Rectangle(25, 25, 10, 10);
  let Rectang2 = new Rectangle(50, 50, 10, 10);
  let Rectang3 = new Rectangle(30, 30, 25, 25);
  let Rectang4 = new Rectangle(20, 20, 25, 25);
  console.log(Rectang1.collides(Rectang2));
  console.log(Rectang1.collides(Rectang3));
  console.log(Rectang2.collides(Rectang3));
  console.log(Rectang1.collides(Rectang4));
  
  function randomRectangle(number){
    let rectangles = [];
    for (let i = 0; i < number; i++) {
        let width = Math.floor(Math.random() * 100) + 1;
        let length = Math.floor(Math.random() * 100) + 1;
        let topLeftXPos = Math.floor(Math.random() * 100) + 1;
        let topLeftYPos = Math.floor(Math.random() * 100) + 1;
        rectangles.push(new Rectangle(topLeftXPos, topLeftYPos, width, length))
    } return rectangles;
}
let colRectangles = randomRectangle(1000);
    /* Durstenfeld shuffle, an optimized version of Fisher-Yates:
    Ex: var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;*/
        for (let i = colRectangles.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Generate a random index
            let something = colRectangles[i];
             colRectangles[i] = colRectangles[j];
              colRectangles[j] = something;
              colRectangles.push(colRectangles[i], colRectangles[j])}

let solution = colRectangles;
console.log(solution.length);
console.log(solution);


console.log(rectangles);
