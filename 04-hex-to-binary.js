// Create a function toBinary that will take a Hex number and returns the binary
// equivalent (as a string).
// Examples:
// toBinary (OxFF) + "11111111"
// toBinary(0xAA) + "10101010"
// toBinary (OxFA) - "11111010'

const toBinary = (hex) => {
    return hex.toString(2)

}

console.log(toBinary(0xFF));
console.log(toBinary(0xA5));
console.log(toBinary(0xF0));