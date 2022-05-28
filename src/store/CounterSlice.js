import { ResetTv } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name : "counter",
    initialState: {
        counter: 0,
    },
    reducers: {
        increment (state, action) {
              state.counter +=  1 
           
        },
        decrement(state, action){
            state.counter -= 1
        },
        Reset(state, action) {
            state.counter = 0
        }
    }
})

export const { increment, decrement, Reset } =  CounterSlice.actions
export default CounterSlice.reducer

// thunk logic

export const setCounter = () => {
   return async function setCounterThunk (dispatch, getState) {
       try{
        //    their we can call any thired party api
        // and then we can call reducer action
        dispatch(increment())

       }catch (error){
         console.log(error)
       }
   }
}