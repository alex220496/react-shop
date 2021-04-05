import React from 'react'
import ReactDOM from 'react-dom'
//--------------------------------------------------

// const h1 = React.createElement("h1",{
//     id:"title"},"Hello React.js");


/// JSX 
// const h1 = <h1 id="name">Hello mister React.js</h1>

// const ul = <ul>
//     <li>Kyiv</li>
//     <li>Lviv</li>
// </ul>

// const el =<div>
//     {h1}
//     {ul}
// </div> 

//ReactDOM.render(el,document.getElementById("root"))
//---------------------------------------------------
//Створення компонента через function declaration
// function H1() {
//     return <h1>Hello World React.js</h1>
// }

const H1 = () => <h1>Hello world</h1>

const Text = () => {
    return(
        <>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corrupti excepturi odit commodi, cupiditate, doloribus
            numquam recusandae ad ipsam pariatur at molestiae ipsum,
            facere rerum voluptatem blanditiis perferendis illo inventore
            laudantium? </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corrupti excepturi odit commodi, cupiditate, doloribus
            numquam recusandae ad ipsam pariatur at molestiae ipsum,
            facere rerum voluptatem blanditiis perferendis illo inventore
            laudantium? </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corrupti excepturi odit commodi, cupiditate, doloribus
            numquam recusandae ad ipsam pariatur at molestiae ipsum,
            facere rerum voluptatem blanditiis perferendis illo inventore
            laudantium? </p>
        </>
    )
}

const Main = () => {
    return(
        <>
            <H1/>
            <Text/>
        </>
    )
}
    


ReactDOM.render(<Main/>,document.getElementById("root"))
