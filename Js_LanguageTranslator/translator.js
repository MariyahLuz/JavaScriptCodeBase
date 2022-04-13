function translatePigLatin(str) {
  var vowels=["a", "e", "i", "o", "u"];
  var consonant=["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
  
  let first_letter = str.substr(0,1);
  let minusFirst=str.substr(1,str.length-1);
if(vowels.includes(first_letter)){
     return str + "way"
  }
  else{
    return minusFirst + first_letter + "ay" 
  }
}

console.log(translatePigLatin("glove"));

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

  
console.log(translatePigLatin("consonant"));