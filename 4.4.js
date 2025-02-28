function rand10() {
  return Math.floor((Math.random() * 10) + 1);
}
function pickLearner(inputAr, n) {
if (n > 0 && n < inputAr.length) {
return inputAr[n]; 
} else { console.log("You are wrong");
}
let listNames = ["Antoine.C", "Ars_d", "Hugo P", "Kamal", "Liana", "M.Jordan", "Manu-cj", "Martin S", "Stephan M.", "Valentin Herman"];
let lucky = rand10();
let answer = pickLearner(listNames, lucky);
Console.log(answer);

//I need to review this code later
