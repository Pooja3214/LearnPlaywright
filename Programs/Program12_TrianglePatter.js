//   *

//  ***

// ***** 

let x = 5;
for ( let i = 1; i <= x; i++ ) {
    let row = " ";
    for ( let j = 0; j <= x - 1 - i; j++ ) {
        row += " ";
    }
    for ( let k = 0; k < i; k++ ) {
        row += "* ";
    }
    console.log( row );
}
