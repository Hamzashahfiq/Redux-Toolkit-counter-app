import React, {useEffect, useState}from 'react'
import { FatchProducts } from '../../store/FatchProductSlice'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from '../productCard/ProductCard'

export default function Products() {
    const dispatch = useDispatch()
    const product = useSelector((store) => store.product)
    const [loading, setLoading] = useState(false)
 

    useEffect(() => {
        dispatch(FatchProducts(setLoading))
    }, [])
    
  return (
    <div><ProductCard loading = {loading} /></div>
  )
}
