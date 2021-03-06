//Leetcode 3.44 Reverse String
//Write a function that reverses a string. The input string is given as an array of characters s.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
//THIS WORKS, TOO (2ND SOLUTION)
  //91 ms runtime
  s.reverse()
//THIS WORKS, (3RD SOLUTION) 
  //87 ms runtime
  return [...s].reverse().join('');
//WHILE LOOP OPTION (1ST SOLUTION)
  //67 ms runtime
    let index1 = 0;
    let index2 = s.length - 1;
    while (index1 < index2){
        let temp = s[index1];
        s[index1] = s[index2];
        s[index2] = temp;
        index1++;
        index2--;
    }; 
    // return s;  //don't need return making runtime a bit slower with this return, at 132 ms runtime

      let l = 0;
  let r = s.length - 1;
  
  while(l < r) {
     //try this 
     [s[r--], s[l++]] = [s[l], s[r]] //runtime 184 ms
    //or this
    let tmp = s[r];    //runtime 162ms
    s[r--] = s[l];
    s[l++] = tmp;
  }
       
         
}
