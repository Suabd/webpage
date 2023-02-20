console.log('Hello World!')

// Three ways to creat variables
let color = 'blue'
var size = 'medium' // not recommended
const language = 'JavaScript' // Can chnage this value.
// language = 'C# in an error

let quantity = 5 
let distances = 4.5

let text = 'Hello World'
let message = 'Hi Programmers'

console.log('There are ' + quantity + ' programmers ')

let todayTemp = 75

// Can you use this varible to console.log
// the message " Today's temperature is 75F"

console.log("Today's temperature is "  + todayTemp + ' F')

let tempC = (todayTemp - 32) * 5/9
console.log("Today's temperature is " + tempC.toFixed(2) + ' C')
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp} F`)


let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is  ${department} ${classCode} ${className}`)