function removeDuplicates(arr) {
    // Create a set to store unique values
    const uniqueSet = new Set();
    
    // Iterate over the array and add each element to the set
    arr.forEach(num => uniqueSet.add(num));
    
    // Convert the set back to an array and return it
    return [...uniqueSet];
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];
const outputArray = removeDuplicates(inputArray);
console.log(outputArray);
