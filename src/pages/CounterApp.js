import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, Reset} from '../store/CounterSlice'
import { setCounter } from '../store/CounterSlice'

export default function CounterApp() {
    const counter  = useSelector((store)=>store.CounterSlice.counter)
    const str  = useSelector((store)=>store.CounterSlice)
    console.log(counter)
    console.log(str)

    const dispatch = useDispatch()
    const incrementHandler = () => {
        
        dispatch(setCounter())
    } 
    const decrementHandler = () => {
        
        dispatch(decrement())
    } 
    const resetHandler = () => {
        
        dispatch(Reset())
    } 
  return (
    <div style={{textAlign : "center"}}><button style={{padding: "5px"}} onClick ={() => decrementHandler()}>-</button>
    <span style={{padding: "5px"}}>{counter}</span> 
    <button style={{padding: "5px"}} onClick = {incrementHandler}>+</button> 
    <button style={{padding: "5px"}} onClick = {resetHandler}>Reset</button></div>
  )
}
