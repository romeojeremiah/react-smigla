### 47. useEffect - Basics

-   useEffect is second most useful hook
-   allows **side effects**/ **work outside a component** (i.e. data fetching, listening for events, signing up for subscriptions, etc.)
    -   by default, runs after every re-render
    -   import as a named import as {useEffect} or by React.useEffect();
    -   It receives a callback function that runs after every render
-   reminder: every time useState is used, it preserves the initial value and rerenders the component automatically with the new value, so by default useEffect will run after every reRender. Therefore, the functionality within the useEffect will run on every reRender.

### 48. useEffect - Conditional

-   reminder: Cannot place hooks inside a conditional
-   set up conditionals **within** the useEffect callback function

### 49. useEffect - Dependency List

-   can pass an array as a second parameter to the useEffect function
    -   it's an array of dependencies that, if blank, only allows useEffect to run on the intial render
    -   if you want useEffect to run only once (on the initial render), pass in an empty array as the second parameter (i.e. useEffect(callback, []));
    -   within the dependency array, if you want useEffect to run more than once, the dependency array should include an argument that changes.
-   you can have as many useEffect functions as desired

### 50. useEffect - Cleanup Function

-   check size of window by checking event listener on window.innerWidth
-   add the resize event on the window (checkSize reference function)
    -   make the function invoke setSize to get current window width
-   in the example in this section, we add an event listener to the window object by using the useEffect function. The useEffect function adds an event listener that invokes the useState function. But, everytime the useState function runs (setSize), it rerenders the useEffect function. This means the useEffect function renders a new event listener everytime, which can lead to memory leaks.
-   in useEffect, we have an option to create a return function that is invoked. It can be used to create a cleanup function that removes eventListeners.
-   it is a good idea to add a cleanup function every time we add a useEffect function

### 51. useEffect - Fetch Data

-   set up a state value with a default array of users [users, setUsers]
-   setup useEffect to perform a fetch request of users
    -   useEffect function can not receive a callback function that's asynchronous, so an asynchronous function must be setup either outside the useEffect function or within the useEffect callback function
-   set up a seperate async getUsers function that get users
-   remember, useEffect runs after EVERY render so any function that useEffect calls will automatically get called if there are no cleanup functions or empty array dependencies to stop the calls. So in this video's example, everytime the users are set, setUsers will be rendered, which will render useEffect, which will render setUsers, and so on... Therefore we will set up an infinite loop.
-   create an unorderlist of users with className = users
-   Remember that each list item requires a unique id
-   wrap login name and link in their own div
-   TAKE AWAY: If you have a function within useEffect that creates a rerender, **be sure** to add the empty dependency array
