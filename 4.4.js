//The rand10() function will give me a random number from 1 to 11 which is the total number of learners
function rand10() {
    return Math.floor((Math.random() * 11) + 1);
  }
let learners_array = [];
function pickLearner(inputAr, n) { 
  for (let i = 0; i < n; i++){ 
learners_array.push(inputAr[i]);
}
  if (n > 0 && n < inputAr.length) { return inputAr[n]};
}
  let listNames = ["Antoine", "Arsenia", "Hugo", "Kamal", "Liana", "Jordan", "Manu", "Martin", "Stephan", "Valentin ", "Inna"];
  let lucky = rand10();
pickLearner(listNames, lucky);
console.log(learners_array);
