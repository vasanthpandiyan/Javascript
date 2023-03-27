function isArmstrongNumber(num) {
    const numStr = num.toString();
    const numLen = numStr.length;
    let sum = 0;
    
    for (let i = 0; i < numLen; i++) {
      const digit = parseInt(numStr[i]);
      sum += digit ** numLen;
    }
    
    return sum === num;
  }
  
  // Example usage:
  const num = 153;
  const isArmstrong = isArmstrongNumber(num);
  console.log(isArmstrong); // Output: true
  
  