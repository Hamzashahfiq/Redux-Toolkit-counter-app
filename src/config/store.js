import { configureStore } from '@reduxjs/toolkit'
import FatchProductSlice from '../store/FatchProductSlice'
import CounterSlice from '../store/CounterSlice'

const store = configureStore({
  reducer: {
     product:FatchProductSlice,
     CounterSlice
  },
})


export default store