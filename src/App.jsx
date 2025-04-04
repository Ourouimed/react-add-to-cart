import Cart from "./components/Cart"
import ProductsList from "./components/ProductsList"
import { useState , useEffect} from "react"
import {MainContext} from './context'

const App = ()=>{
  const [cart , setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  useEffect(()=>{
    localStorage.setItem('cart' , JSON.stringify(cart))
  } , [cart])
  const handlAddToCart = (e) => {
    const isProductInCart = cart.some(item => item.id === e.id);
    if (!isProductInCart) {
        setCart([...cart, e]);
    } else {
        console.log('already added');
    }
  }
  const handleRemoveFromCart = (e)=>{
    setCart(cart.filter(prod => prod.id !== e.id))
  }
  const handleClearCart = ()=>{
    setCart([])
  }
  return <div className='p-4  max-w-full mx-auto bg-gray-100 rounded-lg'>
      <div className="grid md:grid-cols-[7fr_3fr] grid-cols-1 gap-4">
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