import { Typography } from '@mui/material'
import React from 'react'
import Products from '../componets/products/Products'
import CounterApp from './CounterApp'


export default function Home() {
  return (
    <div className='homeMainDiv'>
        {/* <Typography variant="h4" >This is our store</Typography>
        <Typography variant="h6" sx={{my:1}}> Products</Typography>
        <Products /> */}
        <CounterApp />

    </div>
  )
}
