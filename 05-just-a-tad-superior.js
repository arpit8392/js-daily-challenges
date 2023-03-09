// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value >
//     the other value will return true ). Create a function isSuperior that returns whether the first array is slightly superior to
//     that of the second array.

const isSuperior = (firstArray, secondArray) => {
    // return firstArray.some( (item, index) => item > secondArray[index] )
    return firstArray > secondArray
}

console.log(isSuperior ([1, 2, 4], [1, 2, 3]));
console.log(isSuperior(["a", "d", "c"], ["a", "b", "c"]));
console.log(isSuperior( ["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]));
console.log(isSuperior ([1, 2, 3, 4], [1, 2, 4, 4]));
console.log(isSuperior([true, 10, "zebra"], [true, 10, "zebra"]));
console.log('-------');
console.log(isSuperior ([1, 2, 3, 4], [1, 2, 3, 3]))
console.log(isSuperior(['a', 'b', 'c'], ['a','d', 'c']))
console.log(isSuperior ([true, 10, 'zebra'], [true, 10, 'zebra']))
console.log(isSuperior( [true, 10, 'zebra'], [true, 10, 'ant']))
console.log(isSuperior([true, true, false, true], [true, true, true, true]))
console.log(isSuperior ([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]))
console.log(isSuperior (['llama', 'alligator'], ['llama', 'buffalo']))
console.log(isSuperior([1, 2, 3, 4], [1, 2, 4, 4]))