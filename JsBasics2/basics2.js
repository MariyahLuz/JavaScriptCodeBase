//LEVEL 3
//ARRAYS CON'T
let arr =[];
for(let i=3; i<12; i++){
  arr.push(i);
}
console.log(arr);
console.log(".....//ARRAYS 2.....");
//ARRAYS 2

let arr1 =[];
for(let i=1; i<=15; i++){
  arr1.push(i);
}
for(let i=0; i<arr1.length; i++){
  if(i>=2 && i<=6){
    continue  
  }
  console.log(arr1[i]);
}
//Subtrings
console.log(".....//SUBSTRING.....");
var val="Microverse";
console.log(val.substring(0,5));
console.log(val.substring(5));

//Includes
console.log(".....//INCLUDES.....");
let arr2=[1,2,3,4,5,6,7,8,9,10,13];
if(arr2.includes(13)===true){
  console.log("Found it");
}else{
  console.log("Not found");
}

//Filtering
console.log(".....//FILTERING.....");
let arr3 =[1,2,3,4,5,6,7,8,9,10];
let newArr =[];
for(let i=0; i<arr3.length; i++){
  if(arr3[i]>=4){ 
   if(arr3[i] ==10){
     continue
   } newArr.push(arr3[i])
    }
}
console.log(newArr);

//SUBARRAYS
console.log(".....//SUB ARRAYS.....");
let bigArr=[[1,2,3],[4,5,6],[7,8,9]];
for(let i=0; i<bigArr.length; i++){
console.log(bigArr[i]);
  for(let j=0; j<bigArr.length; j++){
    console.log(bigArr[i][j]);
  }
}

//SUBARRAYS 2
console.log(".....//SUB ARRAYS PART 2.....");
let bigArr2=[[1,2,3],[4,5,6],[7,8,9]];
for(let i=bigArr2.length-1; i>=0; i--){
  console.log(bigArr2[i]);
  for(let j=bigArr2.length-1; j>=0; j--){
  console.log(bigArr2[i][j]);
  }
}

//SUBARRAYS PART3
console.log(".....//SUB ARRAYS PART 3.....");
let arr4=[];
let count=1;
for(let i=0; i<3; i++){
  
let smallArr=[];
  
for(let j=0; j<3; j++){
smallArr.push(count);
    count++;
  }     arr4.push(smallArr);
}
console.log(arr4);

//SUBARRAYS PART3
console.log(".....//SUB ARRAYS PART 4.....");
let arr5=[];
let count1=9;
for(let a=0; a<3; a++){
  
let smallArr2=[];
  
for(let b=0; b<3; b++){
smallArr2.push(count1);
    count1--;
  }     arr5.push(smallArr2);
}
console.log(arr5);





