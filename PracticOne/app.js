'use strict';

console.log('Hello world');


var area = require('./index');


module.exports = function (width, height) {
    return width * height;
};


//var area = require('./index.js');
var Table = require('./table')


var data = [
    { id: 123123, desc: 'Something awesome', price: 1000.00 },
    { id: 245452, desc: 'Very interesting book', price: 11.45 },
    { id: 232323, desc: 'Yet another product', price: 555.55 }
]

var t = new Table

data.forEach(function (product) {
    t.cell('Product Id', product.id)
    t.cell('Description', product.desc)
    t.cell('Price, USD', product.price, Table.number(2))
    t.newRow()
})

console.log(t.toString())








console.log(area(5,6))


var ansi = require('./ansireg')
    , cursor = ansi(process.stdout)

// You can chain your calls forever: 
cursor
    .red()                 // Set font color to red 
    .bg.grey()             // Set background color to grey 
    .write('Hello World!') // Write 'Hello World!' to stdout 
    .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
    //      to avoid Terminal glitches 
    .write('\n')           // And a final \n to wrap things up 

// Rendering modes are persistent: 
//cursor.hex('#660000').bold().underline()
var qs = '#660000';
//JSetBgColor(qs);

// You can use the regular logging functions, text will be green: 
console.log('This is blood red, bold text')

// To reset just the foreground color: 
cursor.fg.reset()

console.log('This will still be bold')

// to go to a location (x,y) on the console 
// note: 1-indexed, not 0-indexed: 
cursor.goto(10, 50).write('Five down, ten over')

// to clear the current line: 
cursor.horizontalAbsolute(0).eraseLine().write('Starting again')

// to go to a different column on the current line: 
cursor.horizontalAbsolute(5).write('column five')

// Clean up after yourself! 
cursor.reset()


