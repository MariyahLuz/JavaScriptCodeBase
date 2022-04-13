 //REVERSING A STRING
console.log("..//REVERSING A STRING..")
function reverseString(str) {
  let str1="";
  for(let i=str.length -1; i>=0; i--){
    
    str1+=str[i];
  }
  return str1;
}

let a = reverseString("hello");
console.log(a);

//FACTORIAL of a number
console.log("FACTORIAL OF A NUMBER")
function factorialize(num) {
  let product=1;
  
  for (let i = 2; i <= num; i++) {
    product *= i;   
  console.log(product)
  }
  return product;
}

console.log(factorialize(5));

//STRING TRANCATING
console.log("//..STRING TRANCATING..")
function truncateString(str, num) {
  if(str.length <= num){
    console.log(str, + "...");
  }
  else{
console.log(str.substring(0, num) + "...");
}
}
let s= truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(s);
