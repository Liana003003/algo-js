//Duplicate option 1
const clothes = ["t-shirt", "shoes", "tie", "suit"];
const clothes2 = clothes;
console.log(clothes2);

//Duplicate option 2
const clothes = ["t-shirt", "shoes", "tie", "suit"];
const costume = [...clothes];
costume.push();
console.log(costume);  //It works but not sure if this is the one that we were meant to do

//Duplicate option 3
const clothes = ["t-shirt", "shoes", "tie", "suit"];
const costume = clothes.slice();
console.log(costume);
