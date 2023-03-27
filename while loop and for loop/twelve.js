function reverseDigits(num) {
    const numStr = num.toString();
    const numArr = numStr.split("");
    const reversedArr = numArr.reverse();
    const reversedStr = reversedArr.join("");
    const reversedNum = parseInt(reversedStr);
    return reversedNum;
  }
  
  // Example usage:
  const num = 12345;
  const reversedNum = reverseDigits(num);
  console.log(reversedNum); // Output: 54321
  
