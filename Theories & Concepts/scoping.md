# Scoping

Scoping is a term in javascript which suggests that there are 2 scopes a variable can have, block/lexical and global.

## Global Scope

Global Scope are variables that are available globally and by extension inside the block scope. A global variable's value takes precedence.

## Block/Lexical Scope

A block scope is something that is inside the braces. i.e. the variables declared inside the braces should only stay inside it and not interfere with the same variables in global scope

### example 1

`let a = 400`
function scopeTest () {
`let a = 99`
}
`console.log(a)` // _400_

The value of `a` in both the scopes are same, however the global scope takes precedence unless the function or the brace has been explicitly called to give the value of `a` inside.

### example 2

if (true) {
`const username = "adi"`
if (username === "adi") {
`const website = "youtube"` _this is a also called as a closure_
`console.log(username)`
}
console.log(website)
}

The order of operations is cascading. It'll check the first if condition, which is true and then it enters inside the statment which has username declared. It then checks the second if statment which is true in this case. Then another variable has been declared, and beneath it is a console log of the username. This would work because the first tier if statement is the global scope for the second tier if statement. However upon exiting the second tier if statement, there is a console log of website which only has the scope of second tier. Hence it will give the "website undefined error"
