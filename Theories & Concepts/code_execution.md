# Code Execution

In javascript, execution of code is done by global execution context, which is the global object. The global object is a special object that is available in all scopes. It is the window object in browsers and the global object in Node.js.

When a script is executed, the code is first parsed into an abstract syntax tree (AST). The AST is then compiled into bytecode, which is a series of instructions that can be executed by the JavaScript engine. The bytecode is then executed by the JavaScript engine, which interprets the instructions and executes the code.

The JavaScript engine uses a call stack to keep track of the execution context. When a function is called, a new execution context is created and pushed onto the call stack. When the function returns, the execution context is popped from the call stack.

The JavaScript engine uses a scope chain to keep track of the scope of variables. When a variable is accessed, the JavaScript engine looks up the variable in the current scope, and if it is not found, it looks up the variable in the parent scope, and so on, until it finds the variable or reaches the global scope.
