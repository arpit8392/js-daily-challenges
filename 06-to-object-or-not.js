// Create a function isObject to check whether the given parameter is an Object or not.

const isObject = (obj) => typeof obj === 'object'

console.log(
	isObject(function add(x, y) {
		return x + y
	})
)
console.log(isObject(new RegExp('^ [a-zA-Z0-9]+$', 'g')))
console.log(isObject(null))
console.log(isObject(''))
console.log(isObject(new Date()))
console.log(isObject('12/12/2011'))
console.log(isObject(null))
console.log(isObject([1, 2, 3]))
console.log(isObject({}))
