### 52. multiple returns - basics

-   because components are functions, we can have multiple returns

### 53. multiple returns - fetching example

-   outcome: fetch a user and display if no error, show loading when loading
-   set up useStates for isLoading, isError and user
-   remember with fetch, 404/network errors do not trigger errors. So it's best to check for network errors within the login. Errors are only trigger by

### 54. short-circuit evaluation

-   we use it because in JSX, an expression must be returned
-   For OR (||) if first value is truthy, first value is returned. If first value is falsey, second value is return
-   The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.

### 55. tenary operator

-   no new information learned

### 56. show/hide component

-   set up a State value (show = false and setShow)
-   set a button with classname button and add a setShow function
-   with each click invert show's state value
-   create an Item component
-   if show is true show the Item component
-   use the cleanup function to remove the event listener from innerwidth
