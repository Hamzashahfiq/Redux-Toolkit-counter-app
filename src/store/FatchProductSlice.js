const {createSlice} = require('@reduxjs/toolkit')



const FatchProductSlice = createSlice({
    name : 'product',
    initialState: {
      productData:[]
    },
    reducers : {
        setProduct(state, action){
            state.productData = action.payload
            
        }
    }
})

export const {setProduct} = FatchProductSlice.actions;

export default FatchProductSlice.reducer


// thunk working

export function FatchProducts (setLoading) {
    return async function FatchProductsThunk(dispatch, getState){
        try{
          setLoading(true)
          let res = await fetch('https://fakestoreapi.com/products')
          let productDetail = await res.json();
          console.log(productDetail)
          dispatch(setProduct(productDetail))
          setLoading(false)
        }catch (error){
          alert(error)
        }
    }
}