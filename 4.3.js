function rand10() {
  return Math.floor((Math.random() * 10) + 1);
}
function multiRand(n) { 
for (let i = 0; i < n; i++){
console.log(rand10());
}
}
multiRand(prompt("Enter a number between 1 and 10 "));

/* 
