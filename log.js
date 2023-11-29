const fs = require('fs')
const assert = require('assert')

// logger
function logMessage(filename, message, level) {
let timestamp = new Date().toISOString()
let log = `[${timestamp}] [${level}] ${message}\n`

fs.appendFileSync(filename, log)
}

logMessage('test.log', 'User logged in', 'INFO')
logMessage('test.log', 'Failed login attempt', 'WARNING')
assert(fs.existsSync('test.log'))

let contents = fs.readFileSync('test.log', 'utf8')
assert(contents.includes('[INFO] User logged in'))
assert(contents.includes('[WARNING] Failed login attempt'))

// inventory 
function sortProducts(products, sortKey, ascending) {
return products.sort((a, b) => {
if (ascending) {
return a[sortKey] - b[sortKey]
} else {
return b[sortKey] - a[sortKey]
}
})
}

let products = [
{"name": "Product A", "price": 100, "stock": 5},
{"name": "Product B", "price": 200, "stock": 3},
{"name": "Product C", "price": 50, "stock": 10}
]

console.log(sortProducts(products, 'price', false))