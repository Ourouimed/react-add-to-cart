import { MainContext } from "../context"
import {CartItemContext} from '../context'
import { useContext } from "react"
import CartItem from "./CartItem"
const Cart = ()=>{
    const {cart , handleClearCart} = useContext(MainContext)
    return <div className="rounded-md border-2 border-border p-4 sticky top-0 max-content">
        <h3 className='text-2xl font-bold'>Cart</h3>
        <ul>
            {cart.map(prod => <CartItemContext.Provider value={{prod}}><CartItem /></CartItemContext.Provider>)}
        </ul>
        <h1 className="flex items-center justify-between mt-2">
            <span className="font-bold text-xl">Total : </span>
            <span className="font-bold text-2xl">{cart.reduce((acc , curr) => acc + curr.price , 0)}$</span>
        </h1>
        {cart.length > 0 && <button className="bg-primary cursor-pointer py-2 px-4 rounded text-white mt-1 w-full rounded-md" onClick={handleClearCart}>Clear Cart</button>}
        
    </div>
}

export default Cart