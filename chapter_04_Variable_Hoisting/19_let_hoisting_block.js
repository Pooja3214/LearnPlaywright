let x='global';

if(true){
    //TDZ for block scoped, starts here
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x='block'; //TDZ ends here, declaration reached
    console.log(x);
}

console.log(x); // 'global' (the global x is unaffected by the block-scoped x)

// Note: The block-scoped variable x is hoisted to the top of the block, but it is in a temporal dead zone until it is declared. 
// The global variable x is unaffected by the block-scoped x.