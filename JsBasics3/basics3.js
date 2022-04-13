//FUNCTIONS
console.log("......//FUNCTIONS.....");
function mult(a,b){
  return(a*b);
}
console.log(mult(5,2));

//FUNCTIONS PART2
console.log("......//FUNCTIONS PART 2.....");
function name1(n){
  console.log("Hello",n , "Hope ur good darling");
}
name1("Mariyah");

//REVERSING ARRAYS
console.log("...//REVERSING ARRAYS...")

function rev(arr){
  let output=[];
  for(let i=arr.length -1; i>=0; i--){
output.push(arr[i]);   }
  return(output);
}
let n=(rev([1,2,3,4,5,6,7,8,9,10]));
console.log(n);

//TRANSLATING ARRAYS
console.log("...//TRANSLATING ARRAYS...");
function trans(arr1){
  let output1=[];
  for(let h=0; h<arr1.length; h++){
    if((arr1[h]) == 1){
      output1.push("One");
    }
    if((arr1[h]) == 2){
      output1.push("Two");
    }
    if((arr1[h]) == 3){
      output1.push("Three");
    }
    if((arr1[h]) == 4){
      output1.push("Four");
    }
    if((arr1[h]) == 5){
      output1.push("Five");
    } 
}
  return(output1);
}
let m =trans([1,2,3,4,5,2,1,3,5]);
console.log(m);

//Translating Arrays
console.log("...//TRANSLATING & REVERSING ARRAYS Part2...")
let Arr1=[];
for(let i=1; i<5; i++){
  Arr1.push(i);
}
console.log(Arr1);

function translates(Arr){
  let output2=[];
  for(let i=Arr.length -1; i>=0; i--){  
    if(Arr[i]==1){
  output2.push("One");
    }
    if(Arr[i]==2){
  output2.push("Two");
    }
    if(Arr[i]==3){
  output2.push("Three");
    }
    if(Arr[i]==4){
  output2.push("Four");
    }
  }
  return output2;
}
let b=translates([1,2,1,2]);
console.log(b);







