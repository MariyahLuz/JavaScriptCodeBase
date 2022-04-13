//STRING TRANCATING PART2
console.log("//STRING TRANCATING 2")
function truncateString(str, num) {
  let str2="";
  if(str.length <= num){
   console.log(str, +"...") 
  }
  else{
    str2=str.slice(0, num);
console.log(str2 + "...");

}
}
let s= truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(s);

//STRING TRANCATING PART3
console.log("//STRING TRANCATING 3")
function truncateString(str, num) {
  if(str.length > num){
   return str.slice(0, num) +"...";
  }
  else{
    return str +"...";
}
}
let n= truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(n);

//STRING TRANCATING PART4
console.log("//STRING TRANCATING 4")
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
let a= truncateString("This is Mariyah , and iam a programmer", 16);
console.log(a);