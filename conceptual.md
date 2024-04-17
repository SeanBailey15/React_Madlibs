### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?  

    React is a JavaScript library that focuses on building the front-end of a web app. It is used to create applications that can change data without reloading the page in the browser. You would use it when the application has high user interaction, or rapidly changing data being displayed automatically. React components allow developers to create more modular, reusable code. A given component may be re-purposed across the app in several places. This makes for a more organized and structured codebase.

- What is Babel?

    Babel is a JavaScript transpiler. It is used to convert source code into another source code, allowing code to run in any browser.

- What is JSX?

    JSX is a syntax extension to JavaScript. It allows developers to write HTML elements in JavaScript more easily, without using DOM methods.

- How is a Component created in React?

    A component is created like any JavaScript function, but it must return HTML. This is done utilizing JSX, which allows the developer to write HTML elements within the JavaScript code.

- What are some difference between state and props?

    State can be changed while props are immutable. State is controlled by React components, props are passed to a child component by the parent component. 

- What does "downward data flow" refer to in React?

    This refers to the way components are typically structured in React. Data is usually passed from a parent component to a child component. This ensures that changes to a component do not affect components that are higher in the hierarchy, allowing updates to individual components without affecting the entire application.

- What is a controlled component?

    A controlled component is controlled by React, meaning React tracks all the component changes with the built-in state, and re-renders the component whenever there is ever a change.

- What is an uncontrolled component?

    Uncontrolled components' state are not tracked by React. The component will not be updated in real-time without some DOM manipulation by the developer.

- What is the purpose of the `key` prop when rendering a list of components?

    The key prop is a unique identifier that React uses to manage and update elements within a list. The key prop helps React differentiate between the items and perform updates more efficiently.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    An index would not be stable since the array can mutate and indices can shift around.

- Describe useEffect.  What use cases is it used for in React components?

    The useEffect hook allows you to perform side effects in your components. It helps you handle things like API calls, asynchronous events, and timers.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    The useRef hook allows you to persist values between renders. It can be used to access DOM elements directly. If the value changes, it does NOT cause a re-render of the component.

- When would you use a ref? When wouldn't you use one?

    You would use a ref to directly access a DOM element, store mutable data across renders, reference interval or timeout IDs, or track previous state or props. You wouldn't use a ref when storing a value that should trigger re-render if changed, or for storing immutable values.

- What is a custom hook in React? When would you want to write one?

    React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. You would use a custom hook when the funcitionality would be repeated many times throughout an application. This keeps the codebase modular and more organized.
