// Question 5 — Login Lockout After Failed Attempts
// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

// Sample Input/Output:
// Input: attempts = 2
// Output: 1 attempt left before lockout
// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support
// Input: attempts = 0
// Output: Login successful

let attempt=3;

switch(attempt){
    case 0:
        console.log("Login successful");
        break;
    case 1:
        console.log("2 attempts left before lockout");
        break;
    case 2:
        console.log("1 attempt left before lockout");
        break;
    case 3:
        console.log("Account Locked — Contact support");
        break;
    default:
        console.log("Invalid number of attempts");
}