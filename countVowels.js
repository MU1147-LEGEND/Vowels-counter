//how many vowels are there in the string
let count = 0;

const countVowels = (str)=>{
  const vowels =["a","e","i","o","u","A","E","I","O","U"];
  for(const char of str){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}

let string = "Tania Mohammad"; //string or sentance for checking vowels.

console.log(`The string "${string}" contains ${countVowels(string)} vowels`);
