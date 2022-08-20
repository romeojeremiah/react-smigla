### 34. Intro

-   if use is in the name (i.e. useState), it is a React hook
-   hooks are used to make Components dynamic
-   useState and useEffect are most important hooks

### 36. Install Start

-   install dependencies: npm install
-   spinup dev server on local host 3000: npm start

### 37. Starter Overview

-   App.js is the component that renders all of the application
-   index.js imports and renders App.js
-   CSS is imported into index.js
-   All setup files contain a component boilerplate with an export default of the component
-   The boilerplate component has to be imported into the setup file we're working on

### 38. useState - Simple Use Case

-   import ErrorExample as 'Setup' into App.js (because it's a default export)
-   place Setup into the container
-   component has to be rerendered and we have to preserve the value somehow
-   useState will allow us to rerender and preserve values

### 39. useState - Basics

-   End goal is to build a component that has a title and a button. Pressing the button changes the title.
-   import Setup (UseState Basic Example) into App
-   import useState function from React (useState is a named export)
-   useState is just a React function
-   useState returns an array with a value and a function that controls the value [ value, function]
-   value needs to be passed into useState i.e. (useState(value)). Value is the **initial value**
-   value can be string, boolean, array or whatever
-   since useState returns an array, the value and function can be accessed using normal array property calls (i.e. const value = useState(1)[0] and const function = useState(1)[1])
-   Remember, the function is what controls the value
-   using array destructuring, the value and function can directly destructure the properties from the useState array
-   In the destructuring, a common convention is to name the function 'set' + name of variable (i.e. setText);
-   a call to setText (i.e the function that comes from useState) takes a value that is the value to be changed (i.e. changing 'text' to 'changedText' using setText('changedText')) or **final value**
-   ACTION: set up an initial title, set up an initial button with a handler, when clicking on the button, continuously change the title using if-then statements

### 40. General Rules of Hooks

-   hooks will start with the word 'use'
-   components where hooks are used must begin with an uppercase name
-   hooks need to be in the component body (not outside the function/component)
-   cannot conditionally call the hook

### 41. useState - Array Example

-   import use-state-array example
-   useState can also be imported using React.useState()
-   One can use <></> to wrap their JSX instead of using <React.Fragment></React.Fragment>
-   ACTION: destructure useState and take out data. Call it people. Call function setPeople.
    -   return a h4 with the value of the name of the person in the object in the array. use class name of item
    -   create a clear people function that clears the entire people array
    -   set up the function to not immediate invoke the setPeople method. (i.e. uses an arrow function)
    -   create a button on each item and when clicked it removes the item
    -   filter out items that don't have the matching id

### 42. useState - Object Example

-   import setup from useState object
-   use the useState hook on an object with name, age, and a message property
-   set up h3's for each property in the object
-   create a button with an onClick property (changeMessage) that changes one of the properties
-   solution to get (copy) all values from an object is to use the **spread operator (...)** and then change the property in the object that need to be changed

### 43. useState - Multiple State Values

-   multiple useState hooks can be used to individually change state of items
-   Example: const [name, setName] = useState(name), const [age, setAge] = useState(age)...

### 44. Simple Counter

-   import counter component
-   return a counter with a section with inline margin of 4rem and 0
    -   add a h2 named regular counter
    -   add an h1 with a value paramater
    -   add 3 buttons (increase, reset, decrease)

### 45. Function Update Form

-   copy the entire fragment
-   keep one increase button (increase later)
-   once click, set up a 2 second delay
-   setup function complexIncrease
-   because setValue is asynchronous, it doesn't use the current value in the state
-   must pass a function into setValue that gets the old state value
-   common convention is to call the paramater (prevState)
-   Functional approach can be used all the time, or only when needed. Approach depends on preference but there are some cases where the function approach must be used.
