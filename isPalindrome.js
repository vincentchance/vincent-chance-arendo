**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
    if (x < 0) { // if x is negative, it cannot be a palindrome
        return false;
    }
    let reversed = 0;//make variable
    let original = x; // store original value of x
    while (x !== 0) { // comparison expression set if x is not zero return true
        reversed = reversed * 10 + x % 10; //set reversed equal with reversed *10 + x % 10
        x = Math.floor(x / 10); //x divide by 10
    }
    return original === reversed; // compare original value with reversed
}

console.log(isPalindrome(121)); // answer should be true
console.log(isPalindrome(123)); //answer should be false
