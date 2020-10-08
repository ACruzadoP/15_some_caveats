//Bob Ziroll is providing some of his personal choices in regards to:
//1. not using semicolon at the end of statements 
//2. using arrow functions, instead of the standalone funtions we have used so far, on certain cases

//Example of an arrow function:
/*
const App = () => <h1>Hello world!</h1>
*/

import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return (
       <h1>Hello world!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))