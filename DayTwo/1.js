function addNumbers(arr) {
  if (!Array.isArray(arr)) {
    return 'Input must be an array! 😡';
  }

  for (let value of arr) {
    if (typeof value !== 'number') {
      return 'Only numbers! 😡';
    }
  }

  return arr.reduce((sum, num) => sum + num, 0);
}

// Examples:
console.log(addNumbers([1, 2, 3]));        
console.log(addNumbers([1, 2, 3, 4, 5]));  
console.log(addNumbers([1, "2", 3]));     
