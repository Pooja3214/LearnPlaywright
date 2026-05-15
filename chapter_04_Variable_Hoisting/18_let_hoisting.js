console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score=100;

// Note: let is block-scoped, so score is not hoisted to the top of the global scope. 
// It is in a "temporal dead zone" until it is declared.
{
//TDZ starts here   
    //console.log // ReferenceError: Cannot access 'score' before initialization
    //score=100; 
    //typeof score; // ReferenceError: Cannot access 'score' before initialization
    // TDZ for score ends here
    let score=100; //Declaration reached, TDZ ends here
    console.log(score); // 100(safe to access now   )

}