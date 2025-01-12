function removeDuplicates(arr) {
    const uniqueSet = new Set();
    arr.forEach(num => uniqueSet.add(num));
       return [...uniqueSet];
}
const inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];
const outputArray = removeDuplicates(inputArray);
console.log(outputArray);
