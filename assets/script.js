// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Phil Scott" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the Ginger Bread element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// selecting the Ginger Bread element with an id of minus-gb
var gpMinusBtn = document.querySelector('#minus-gb')

// selecting the Chocolate Chip element with an id of add-gb
const ccPlusBtn = document.querySelector('#add-cc')

// selecting the Chocolate Chip element with an id of minus-gb
var ccMinusBtn = document.querySelector('#minus-cc')

// selecting the Sugar Sprinkle element with an id of add-gb
const sugarPlusBtn = document.querySelector('#add-sugar')

// selecting the Sugar Sprinkle element with an id of minus-gb
var sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`
function updateTotal(){
    var totalQty = document.querySelector('#qty-total')
    total = gb + cc + sugar
    totalQty.textContent = total
}
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    var gbQty = document.querySelector('#qty-gb')
    gb++
    gbQty.textContent = gb
    updateTotal()
})

// TODO: Hook up event listeners for the rest of the buttons

gpMinusBtn.addEventListener('click', function (){
    console.log('Gingerbread - button was clicked!')
    var gbQty = document.querySelector('#qty-gb')
    gb--
    gbQty.textContent = gb
    updateTotal()
})
ccPlusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked.')
    var ccQty = document.querySelector('#qty-cc')
    cc++
    ccQty.textContent = cc
    updateTotal()
})
ccMinusBtn.addEventListener('click', function(){
    console.log('Chocolate Chip - button waws clicked')
    var ccQty = document.querySelector('#qty-cc')
    cc--
    ccQty.textContent = cc
    updateTotal()
})
sugarPlusBtn.addEventListener('click', function(){
    console.log('Sugar Sprinkle + button was clicked.')
    var sugarQty = document.querySelector('#qty-sugar')
    sugar++
    sugarQty.textContent = sugar
    updateTotal()
})
sugarMinusBtn.addEventListener('click', function(){
    console.log('Sugar Sprinkle - button was clicked')
    var sugarQty = document.querySelector('#qty-sugar')
    sugar--
    sugarQty.textContent = sugar
    updateTotal()
})
//var totalQty = document.querySelector('#qty-total')
//total = gb + cc + sugar
//otalQty.textContent = total