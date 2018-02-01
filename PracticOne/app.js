'use strict';

Read();

function Read() {

    var ansi = require('./ansireg')
        , cursor = ansi(process.stdout)

    // You can chain your calls forever: 
    cursor
        .white()                 // Set font color to red 
        .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
        .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
        //      to avoid Terminal glitches 
        .write('\n')           // And a final \n to wrap things up 
    console.log("\n")
    console.log("Please Choose Number : \n")
    console.log("1. Enter yourName with screen x,y position. ==> 1,Alex,500,100 \n")
    console.log("2. Enter yorname with your favorite color.  ==> 2,Alex,Red \n")
    console.log("3. Enter yourname with your backcolor.      ==> 3,Alex,Red \n")
    console.log("4. Shape: [Box-Circle-Brush-Brushcolor]     ==> 4,Box .\n")
    console.log("5. Load progress bar.                       ==> 5,ver Or 5,hor \n")
    console.log("6. Load data in table view.                 ==> 6 \n")


    var stdin = process.openStdin();
    stdin.addListener("data", function (d) {
        var q = d.toString().trim();


        var arr = q.split(',')
        console.log("You entered : " + arr[0] + "\n");

        if (arr[0] == "1") {
            var x = d.toString();
            PrintOnXY(arr[2], arr[3], arr[1]);
            Read();
        }
        else if (arr[0] == "2") {

            var ansi = require('./ansireg')
                , cursor = ansi(process.stdout);
            var color = arr[2];
            switch (color) {

                case "white":
                    cursor
                        .white()                 // Set font color to red 
                        .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                        .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                        //      to avoid Terminal glitches 
                        .write('\n')           // And a final \n to wrap things up 
                    console.log('This is blood ' + arr[1] + ', bold text')

                    cursor.fg.reset()
                    Read();
                    break;
                case "blue":
                    cursor
                        .blue()                 // Set font color to red 
                        .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                        .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                        //      to avoid Terminal glitches 
                        .write('\n')           // And a final \n to wrap things up 
                    console.log('This is blood ' + arr[1] + ', bold text')

                    cursor.fg.reset()
                    Read();
                    break;
                case "green":
                    cursor
                        .green()                 // Set font color to red 
                        .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                        .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                        //      to avoid Terminal glitches 
                        .write('\n')           // And a final \n to wrap things up 
                    console.log('This is blood ' + arr[1] + ', bold text')

                    cursor.fg.reset()
                    Read();
                    break;
                case "yellow":
                    cursor
                        .yellow()                 // Set font color to red 
                        .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                        .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                        //      to avoid Terminal glitches 
                        .write('\n')           // And a final \n to wrap things up 
                    console.log('This is blood ' + arr[1] + ', bold text')

                    cursor.fg.reset()
                    Read();
                    break;
                case "cyan":
                    cursor
                        .cyan()                 // Set font color to red 
                        .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                        .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                        //      to avoid Terminal glitches 
                        .write('\n')           // And a final \n to wrap things up 
                    console.log('This is blood ' + arr[1] + ', bold text')

                    cursor.fg.reset()
                    Read();
                    break;

            }
        }
        else if (arr[0] == "3") {
            var ansi = require('./ansireg')
                , cursor = ansi(process.stdout);

            var color = arr[2];
            switch (color) {
                case "red":
                    cursor.red().bold().underline().write("Wellcome : " + arr[1])
                    break;
                case "green":
                    cursor.green().bold().underline().write("Wellcome : " + arr[1])
                    break;
                case "yellow":
                    cursor.yellow().bold().underline().write("Wellcome : " + arr[1])
                    break;
                case "white":
                    cursor.white().bold().underline().write("Wellcome : " + arr[1])
                    break;
                case "blue":
                    cursor.blue().bold().underline().write("Wellcome : " + arr[1])
                    break;

            }

            Read();

        }

        else if (arr[0] == "4") {
            if (arr[1] == "Box") {
                Box();
            } else if (arr[1] == "Circle") {
                Circle();
            } else if (arr[1] == "Brush") {
                Brush();
            } else if (arr[1] == "Brushcolor") {
                Brushcolor();
            }
            Read();
        }

        else if (arr[0] == "5") {

            if (arr[1] == "ver") {
                ProgressBar();
            } else {
                // horizantal progress
            }

        }


        else if (arr[0] == "6") {
            PrintTable();
            Read();
        }





    });
}




function PrintOnXY(x,y,text) {
    var ansi = require('./ansireg')
    , cursor = ansi(process.stdout)

// You can chain your calls forever: 
    cursor
        .green()                 // Set font color to red 
        .bg.white()             // Set background color to grey // Write 'Hello World!' to stdout 
                            // Reset the bgcolor before writing the trailing \n, 
    //      to avoid Terminal glitches 
    .write('\n')           // And a final \n to wrap things up 

    cursor.goto(x, y).write('Wellcome : ' + text)
}


function SetFontColor(x) {
    

    switch (x) {
        case "white":
            var ansi = require('./ansireg')
                , cursor = ansi(process.stdout)

            cursor
                .white()                 // Set font color to red 
                .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                //      to avoid Terminal glitches 
                .write('\n')           // And a final \n to wrap things up 
            console.log('This is blood ' + x + ', bold text')

            cursor.fg.reset()
            Read();
            break;
        case "blue":
            cursor
                .blue()                 // Set font color to red 
                .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                //      to avoid Terminal glitches 
                .write('\n')           // And a final \n to wrap things up 
            console.log('This is blood ' + x + ', bold text')

            cursor.fg.reset()
            Read();
            break;
        case "green":
            cursor
                .green()                 // Set font color to red 
                .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                //      to avoid Terminal glitches 
                .write('\n')           // And a final \n to wrap things up 
            console.log('This is blood ' + x + ', bold text')

            cursor.fg.reset()
            Read();
            break;
        case "yellow":
            cursor
                .yellow()                 // Set font color to red 
                .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                //      to avoid Terminal glitches 
                .write('\n')           // And a final \n to wrap things up 
            console.log('This is blood ' + x + ', bold text')

            cursor.fg.reset()
            Read();
            break;
        case "cyan":
            cursor
                .cyan()                 // Set font color to red 
                .bg.grey()             // Set background color to grey // Write 'Hello World!' to stdout 
                .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
                //      to avoid Terminal glitches 
                .write('\n')           // And a final \n to wrap things up 
            console.log('This is blood ' + x + ', bold text')

            cursor.fg.reset()
            Read();
            break;
 
    }
    // You can chain your calls forever: 
 
}



function Box() {

    // Uses AXEL's node module
    var ctx = require('./Axel');

    // Clear the terminal
    ctx.clear();

    // Red box
    ctx.bg(255, 0, 0);
    ctx.box(2, 2, 8, 4);

    // Yellow box
    ctx.bg(255, 255, 0);
    ctx.box(12, 2, 8, 4);

    // Green box
    ctx.bg(0, 255, 0);
    ctx.box(2, 7, 8, 4);

    // Blue box
    ctx.bg(0, 0, 255);
    ctx.box(12, 7, 8, 4);

    ctx.cursor.restore();
}


function Circle()
{

    // Uses AXEL's node module
    var ctx = require('./Axel');

    // Clear the terminal
    ctx.clear();

    // Sets the pixel BG color to orange
    ctx.bg(255, 128, 0);


    // Get the center of the console
    var midX = ctx.cols / 2
        , midY = ctx.rows / 2
        ;

    // Draws a circle in the middle
    ctx.circ(midX, midY, 20);

    // Note: circles are draw squashed becuase 
    // the terminals characters are usually 
    // 1.6 times high as they are wide


    // Position the cursor at the end of the console
    // so as not to draw over the bottom of the circle
    ctx.cursor.restore();



}


function Brush() {

    // Uses AXEL's node module
    var ctx = require('./Axel');

    // Clear the terminal/screen/console
    ctx.clear();

    // "Brush" refers to a "character-brush"
    // Every time a pixel is drawn in a line for example,
    // the foreground color and the brush can be used to 
    // add texture/detail to the pixel.

    var brushes = " ????";


    function nextBrush(n) {
        return brushes[parseInt(n % brushes.length)];
    }


    // Draw some lines which step through the brush characters
    for (var y = 1; y < ctx.rows; y += 1) {

        ctx.brush = nextBrush(y);

        // Each line is now draw with the specified 
        // character in each pixel
        ctx.line(1, y, ctx.cols, y);
    }


    // Draw some circles which step through some brush characters

    var circSize = Math.sqrt(ctx.rows + ctx.cols) * 2
        , centerX = ctx.cols / 2
        , centerY = ctx.rows / 2
        ;

    for (var m = 1; m < circSize; m += 1) {

        ctx.brush = nextBrush(m);

        ctx.circ(centerX, centerY, m);
    }


    ctx.cursor.restore();



}


function Brushcolor() {

    // Uses AXEL's node module
    var ctx = require('./Axel');

    // Clear the terminal/screen/console
    ctx.clear();



    // "Brush" refers to a "character-brush"
    // Every time a pixel is drawn in a line for example,
    // the foreground color and the brush can be used to 
    // add texture/detail to the pixel.

    var brushRamp = " ????";

    var h = 0;

    y = 1;

    for (var y = 1; y < ctx.rows; y += 1) {

        h += .03;

        if (h > 1) {
            h = 0
        }

        col = hslToRgb(h, 1, .5);
        ctx.fg(col[0], col[1], col[2]);

        ctx.brush = brushRamp[parseInt(y % brushRamp.length)];

        ctx.line(1, y, ctx.cols, y);

    }


    ctx.cursor.restore();



    // Source: http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
    function hslToRgb(h, s, l) {
        var r, g, b;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
}



function ProgressBar() {


    var assert = require('assert')
        , ansi = require('./ansireg')

    function Progress(stream, width) {
        this.cursor = ansi(stream)
        this.delta = this.cursor.newlines
        this.width = width | 0 || 10
        this.open = '['
        this.close = ']'
        this.complete = '?'
        this.incomplete = '_'

        // initial render
        this.progress = 0
    }

    Object.defineProperty(Progress.prototype, 'progress', {
        get: get
        , set: set
        , configurable: true
        , enumerable: true
    })

    function get() {
        return this._progress
    }

    function set(v) {
        this._progress = Math.max(0, Math.min(v, 100))

        var w = this.width - this.complete.length - this.incomplete.length
            , n = w * (this._progress / 100) | 0
            , i = w - n
            , com = c(this.complete, n)
            , inc = c(this.incomplete, i)
            , delta = this.cursor.newlines - this.delta

        assert.equal(com.length + inc.length, w)

        if (delta > 0) {
            this.cursor.up(delta)
            this.delta = this.cursor.newlines
        }

        this.cursor
            .horizontalAbsolute(5)
            .eraseLine(2)
            .fg.white()
            .write(this.open)
            .fg.grey()
            .bold()
            .write(com)
            .resetBold()
            .write(inc)
            .fg.white()
            .write(this.close)
            .fg.reset()
            .write('\n')
    }

    function c(char, length) {
        return Array.apply(null, Array(length)).map(function () {
            return char
        }).join('')
    }


    // Usage
    var width = parseInt(process.argv[2], 10) || process.stdout.getWindowSize()[0] / 2
        , p = new Progress(process.stdout, width)

        ; (function tick() {
            p.progress += Math.random() * 5
            p.cursor
                .eraseLine(2)
                .write('Progress: ')
                .bold().write(p.progress.toFixed(2))
                .write('%')
                .resetBold()
                .write('\n')
            if (p.progress < 100)
                setTimeout(tick, 100)
        })()


}



function PrintTable() {
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
}






















//var area = require('./index');


//module.exports = function (width, height) {
//    return width * height;
//};


////var area = require('./index.js');
//var Table = require('./table')


//var data = [
//    { id: 123123, desc: 'Something awesome', price: 1000.00 },
//    { id: 245452, desc: 'Very interesting book', price: 11.45 },
//    { id: 232323, desc: 'Yet another product', price: 555.55 }
//]

//var t = new Table

//data.forEach(function (product) {
//    t.cell('Product Id', product.id)
//    t.cell('Description', product.desc)
//    t.cell('Price, USD', product.price, Table.number(2))
//    t.newRow()
//})

//console.log(t.toString())








//console.log(area(5,6))


//var ansi = require('./ansireg')
//    , cursor = ansi(process.stdout)

//// You can chain your calls forever: 
//cursor
//    .red()                 // Set font color to red 
//    .bg.grey()             // Set background color to grey 
//    .write('Hello World!') // Write 'Hello World!' to stdout 
//    .bg.reset()            // Reset the bgcolor before writing the trailing \n, 
//    //      to avoid Terminal glitches 
//    .write('\n')           // And a final \n to wrap things up 

//// Rendering modes are persistent: 
////cursor.hex('#660000').bold().underline()
//var qs = '#660000';
////JSetBgColor(qs);

//// You can use the regular logging functions, text will be green: 
//console.log('This is blood red, bold text')

//// To reset just the foreground color: 
//cursor.fg.reset()

//console.log('This will still be bold')

//// to go to a location (x,y) on the console 
//// note: 1-indexed, not 0-indexed: 
//cursor.goto(10, 50).write('Five down, ten over')

//// to clear the current line: 
//cursor.horizontalAbsolute(0).eraseLine().write('Starting again')

//// to go to a different column on the current line: 
//cursor.horizontalAbsolute(5).write('column five')

//// Clean up after yourself! 
//cursor.reset()
