//returning index of num in sorted array.
function getIndexToIns(arr, num){
  arr.push(num)
  
  arr.sort(function(a, b){
    return a-b
  });
  console.log(arr)
 return arr.indexOf(num);
  
}

let a = getIndexToIns([2, 20, 10], 19);
console.log(a);