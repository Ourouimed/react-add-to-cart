import Cart from "./components/Cart"
import ProductsList from "./components/ProductsList"
import { useState} from "react"
import {MainContext} from './context'

const App = ()=>{
  const [cart , setCart] = useState([])
  const handlAddToCart = (e)=>{
      cart.includes(e) ? console.log('already added') : setCart([...cart , e])
  }
  const handleRemoveFromCart = (e)=>{
    setCart(cart.filter(prod => prod.id !== e.id))
  }
  const handleClearCart = ()=>{
    setCart([])
  }
  return <div className='p-4 w-[1200px] max-w-full mx-auto bg-gray-100 rounded-lg'>
      <div className="grid grid-cols-[7fr_3fr] gap-2">
      <MainContext.Provider value={{handlAddToCart}}>
            <ProductsList />
        </MainContext.Provider>
      <MainContext.Provider value={{cart , handleRemoveFromCart , handleClearCart}}>
            <Cart />
      </MainContext.Provider>

      </div>
  </div>
}

export default App