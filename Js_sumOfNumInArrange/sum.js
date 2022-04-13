function sumAll(arr) {
  var maxv, minv, sum=0;
  maxv= Math.max(...arr);
  minv =Math.min(...arr);
  for(let i=minv; i<=maxv; i++){
    sum+=i
  }
  return sum;
  
}

console.log(sumAll([5, 10]));