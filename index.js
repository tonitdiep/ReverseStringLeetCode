//Leetcode 3.44 Reverse String
//Write a function that reverses a string. The input string is given as an array of characters s.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

//WHILE LOOP OPTION
    let index1 = 0;
    let index2 = s.length - 1;
    while (index1 < index2){
        let temp = s[index1];
        s[index1] = s[index2];
        s[index2] = temp;
        index1++;
        index2--;

    }; 
    // return s;  //don't need return making runtime a bit slower with this return
         
}
