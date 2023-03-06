// Create a function sortArray that takes an array of numbers arr, a string str and
// return an array of numbers as per the following rules:
// • "Asc" returns a sorted array in ascending order.
// • "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

const sortArray = (arr, str) => {
    return str === 'Asc' ? arr.sort((a, b) => a - b)
    : str === 'Des' ? arr.sort((a, b) => b - a)
    : arr
}

console.log(sortArray ([4, 3, 2, 11], "Asc" ))
console.log(sortArray ( [7, 8, 11, 66], "Des"))
console.log(sortArray ([11, 2, 3, 4], "None"))