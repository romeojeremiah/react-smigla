### 58. forms basics

-   setting up multiple inputs with just one function
-   general overview
    -   working with forms in React is a bit different than in JS
    -   In JS, you normally access an input via a class and then git the value, in React
        you use value, and onChange
    -   In React the label 'for' property is 'htmlFor' in order to connect to an input
    -   In React there are two options for form submissions
        -   Add an **onSubmit={handler}** on the <form> element
        -   Add an **onClick={handler}** on the submit <button>
            -   handler gets **event** object
            -   just like in Javascript, form tries to submit the data by default
            -

### 59. controlled inputs

-   Access the data in the forms **Keep in mind that the input is connected to the state value so it needs a handler to access what is typed into the form**

    1. set up state values that are reference from the input , use useState
    2. add two attributes on the input

    -   value that references the state value
    -   onChange event listener that fires the callback function each time something is typed in the input. The event should be sent to the function

    const [firstName, setFirstName] = useState('')
    <input value={firstName} onChange={(e) => setFirstName(e.target.value)}> 3. Once the inputs are attached to the state values, the form has access to the state values (as opposed to needed to connect via the event object)

    ### 61. multiple inputs **(watch lecture again when needed)**

    -   Handling multiple inputs (ie. more than 5 inputs)
        -   set up an object for the state value
            const [person, setPerson] = setState({firstName:'', lastName:'', age: ''})
        -   use dynamic object properties **watch lecture again** or **research dynamic object properties**
