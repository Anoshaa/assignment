// q1 Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.
function reverseArray(arr) {
    return arr.slice().reverse();
}
// Test with an array of 5 numbers
const smallArray = [1, 2, 3, 4, 5];
const reversedSmallArray = reverseArray(smallArray);
console.log("Original array:", smallArray);
console.log("Reversed array:", reversedSmallArray);
// Test with a larger array
const largerArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reversedLargerArray = reverseArray(largerArray);
console.log("Original larger array:", largerArray);
console.log("Reversed larger array:", reversedLargerArray);


// q2 Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

function filterOutNegatives(arr) {
    return arr.filter(num => num >= 0);
  }
  const numbers = [1, -2, 3, -4, 5];
const positiveNumbers = filterOutNegatives(numbers);
console.log(positiveNumbers);

// q3 Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. 
function countVowels(str) {
    // Define a set of vowels
    const vowels = 'aeiouAEIOU';
    // Initialize the vowel count to 0
    let count = 0;
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++; // Increment count if it is a vowel
        }
    }
    // Return the total count of vowels
    return count;
}
// Example usage:
const exampleString = "Hello, World!";
console.log(countVowels(exampleString));

// q4 Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range.
function isInRange(num1, num2) {
    // Check if either number is within the range 50 to 99 (inclusive)
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}
// Example usage:
console.log(isInRange(45, 75)); 
console.log(isInRange(30, 40)); 
console.log(isInRange(50, 100)); 
console.log(isInRange(99, 101)); 

// q5 Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly
function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare characters from start and end moving towards the center
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Not a palindrome if characters don't match
        }
        left++;
        right--;
    }
    return true; // String is a palindrome if all characters matched
}
// Test the function
console.log(isPalindrome('kayak')); 
console.log(isPalindrome('mom')); 
console.log(isPalindrome('radar')); 
console.log(isPalindrome('refer')); 
console.log(isPalindrome('hello')); 
console.log(isPalindrome('A man, a plan, a canal, Panama')); 
console.log(isPalindrome('Was it a car or a cat I saw?'));





