import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import CartPage from '../pages/CartPage'
import Home from '../pages/Home'
import HeadernavBar from '../componets/headernavBar/HeadernavBar'

export default function Routing() {
    return (
        <>
            <BrowserRouter>
            <HeadernavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
