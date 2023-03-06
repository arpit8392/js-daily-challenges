// Given an array of boxes, create a function totalVolume that returns the total volume of
// all those boxes combined together.
// A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume( [2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266
// since (2 x 3 x 2) + (6 × 6 × 7) + (1 x 2 × 1) = 12 + 252 + 2 = 266.

const totalVolume = (...boxes) => {
	return boxes.reduce((total, [l, w, h]) => total + l * w * h, 0)
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 11]))
console.log(totalVolume([2, 2, 2], [2, 1, 1]))
console.log(totalVolume([11, 1, 1]))
