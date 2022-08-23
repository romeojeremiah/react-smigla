# React Course Notes

## React Basics

### JSX Rules

1. JSX is very similar to HTML
2. Always return a single wrapped element / No adjacent elements
3. Follow HTMl Semantic Rules (i.e. Use sections/articles/etc. instead of all divs or React.Fragment's);
4. Uses camelCase for html attributes
5. Uses 'className' instead of 'class'
6. Close every element (i.e. <Image /> )
7. Use parathesis for formatting (i.e. return ( <div></div>))

### Nested Components and Tools

function Greeting() {
return (

<div>
<Person />
<Message />
</div>
);
}

const Person = () => <h2>john doe</h2>;
const Message = () => <p>This is my message</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));

### 22. CSS

-   Create a new CSS file named styles.css
    -   Add reset properties (margin:0, padding:0, box-sizing:border-box)
    -   Add a font-family, background color and text color
-   Import CSS file to the index.js file
-   Add a 'booklist' class to section in the Book component
    -width: 90vw; max-width:1170px;margin:5rem auto; display:grid; gap: 2rem;
    at media query (min-width: 768px) for booklist to make a 3 column layout
-   Add a 'book' class to the article in the Book component
    -background, border-radius and padding
-   Add CSS to the h2 component

### 23. JSX-CSS

-   Add inline styles to JSX (Must use javascript properies within a Javascript Object, within the JSX option template {{}})
-   Add a color of #617d98 to author header, add a font size of .75rem and add a margin-top of .25rem;
-   Note that inline CSS still takes precedence over the stylesheet declarations

### 24. JSX - Javascript

-   {} curly braces are used to add javascript to JSX
-   Cleanup
    -   Add all separate components from previous videos into 1 Book component
    -   remove all inline styles
-   Replace h2 with a variable value
-   JSX Javascript must return a value (i.e. must be an expression). It cannot be an statement

### 25. Props

-   Changing values depending on what's being passed in
-   move all variables to top of the file
-   use jsx in the img, h1 and h4 tags
-   Components are just functions, so functions can have parameters
    -   In React, the parameters are conventionally called props
    -   Props is just an object which can be accessed in the Component itself
    -   Props are passing into the component (i.e. <Book job='developer'/>)
    -   Most basic way of accessing props is to access the props object just like in Javascript (via prop name once passed in)
    -   If props are not present when trying to render, they won't show when rendered.
        -ACTION: Create a firstBook and secondBook object, passed one object into each of two components

### 26. Props - Destructuring

-   Destructuring allows the destructing of props via JavaSctipt
    const {img, title, author} = props
-   Can also destructure directly in the parameter
    const Book = ({img, title, author}) {
    ...content here
    }

### 27. Props - Children

-   children props are everthing that is rendered in between the opening and closing tag of the Component
-   children prop lives on the props object, therefore access children prop ( props.children if not destructuring) via {children} in your React Component

### 28. Simple List

-   Set up books in a array, iterate over the array, display the array
-   OBJECTS are not valid as a React child objects within an array
-   ACTIONS:
    1. remove children
    2. add books to a books array

### 29. Proper List

-   Iterate over books array within {} and display books
-   pass in the book array as a prop

### 30. Key Prop and Spread Operator

-   Every time you have a list in React, a unique key property must be used
    (i.e. <Book key={value} propName={value}>
-   When using the map method, if list items for sure aren't going to change, using the index parameter can act as the key.
-   Most likely, the id from the API will act as the key
-   Instead of using key=value to pass in props as an object, props can be passed in using the spread operator like this {...books}, which will automatically pass the key value pairs to props.

### 31. Event Basics

-   events use camelCase in JSX {onClick = {onClick}, onClick={onMouseOver}}
-   React events can be found here: https://reactjs.org/docs/events.html
-   events can be passed in as a reference or inline (i.e. onClick={()=>console.log(title)})
-   ACTION: Add a button to the Book component with a click event that alert's 'hello world'
-   **In more complex scenarios, if you must pass in values to an inline function, the pattern is to set up an arrow function that then invokes the function**
-   to get access to the event argument, add it the function parameter

### 32. Import and Export Statements

-   ACTION: In the src folder, create two new files books.js (stores data) and book.js (stores Book Component)
-   Named exports adds an 'export' keyword to variables (i.e export const books). To import into index.js, creat an inport statement with the SAME NAME as the exported data variable + the path (i.e. import {books} from ./books)
-   Default exports can export any components 'export default Book'. Can only use one item to default export per file. Default exports do not need specific names (i.e. you can rename as you want).
