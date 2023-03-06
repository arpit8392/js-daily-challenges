// Write the function brickFit that takes three dimensions of a brick: height (a), width (b) and depth (c) and returns true if this brick can fit into a hole with the width (w) and height (h).
// Notes:
// • You can turn the brick with any side towards the hole. • We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size
// should be less than or equal to the size of the hole, not strictly less).
// • You can't put a brick in at a non-orthogonal angle.

const brickFit = (a, b, c, w, h) => {
    return [a * b, b * c, c * a].some(el => el <= w * h)
}

console.log(brickFit(1, 1, 1, 1, 1))
console.log(brickFit(1, 2, 1, 1, 1))
console.log(brickFit(1, 2, 2, 1, 1));