import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] =  useState(5)
  // let counter = 5
 const addValue=()=>{
  if(counter<20){
  counter = counter+1
  setCounter(counter)
  }
 }
 const decValue=()=>{
  if(counter>0){
  counter = counter-1
  setCounter(counter)
  }
 }
  return (
    <>
      <h1>Welcome to react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br/>
      <button
      onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
