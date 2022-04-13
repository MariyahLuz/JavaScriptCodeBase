//ARRAY SPLITTING
console.log("//ARRAY SPLITTING 2..");
function chunkArrayInGroups(arr, size) {
let newArr = [];
  let i = 0;

  while (i < arr.length) {
    (newArr.push(arr.slice(i, i + size)));
    console.log(newArr)
    i += size;
  }
  return newArr;
}
let z=chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(z);

let y=chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
console.log(y);

