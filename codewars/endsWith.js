//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  // TODO: complete
    return str.endsWith(ending);
  
}
console.log(solution('abc', 'bc'))// returns true
console.log(solution('abc', 'd')) // returns false


//The endsWith method is a built-in method for strings in JavaScript that returns true if the string ends with the specified suffix, and false otherwise. 
//The endsWith method is case-sensitive, meaning it considers the case of the characters in the string.