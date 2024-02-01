// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

/*
const App = () => {
  const now = new Date()
  const a = 10
  const b =20
  console.log(now, a+b)
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
      <p>
        {a} mas {b} es {a+b}
      </p>
    </div>
  )
} 
*/

//uso de props
/*
const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, tu tienes {props.age} anios.</p>
      </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={25+10}/>
      <Hello name= {name} age={age}/>

    </div>
  )
}
*/

const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, tu tienes {props.age} anios.</p>
      </div>
  )
}

//error al renderizar objetos. Se debe renderizar datos primitivos
const App = () => {
  const friends =[
    {name: 'Daiana', age: 24},
    {name: 'Gaston', age: 25}
  ]
  const friendsDos = ['Daiana', 'Gaston']
  
  return(
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friendsDos}</p>
    </div>
  )
}

export default App


