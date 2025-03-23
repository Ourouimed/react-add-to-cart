import { MainContext } from "../context"
import {CartItemContext} from '../context'
import { useContext , useState , useEffect } from "react"
import CartItem from "./CartItem"
const Cart = ()=>{
    const {cart , handleClearCart} = useContext(MainContext)
    const [Total , setTotal] = useState(0)
    const [discountedTotal , setDiscountedTotal] = useState(0)
    const [couponVal , setCouponVal] = useState('')
    const [isCouponApplied , setIsCouponApplied] = useState(false)
    const [couponError, setCouponError] = useState(null)

    useEffect(()=>{
        const cartTotal = cart.reduce((acc , prod)=> acc + prod.price , 0)
        setTotal(cartTotal)
        setDiscountedTotal(cartTotal)
    } , [cart])
    const  handleCoupon = ()=>{
        const couponCode = couponVal.toLowerCase()
        let discountAmount = 0;
        switch (couponCode){
            case 'red30':
                discountAmount = Total * 0.3
                break;
            case 'summer20' :
                discountAmount = Total * 0.2
                break;
            case 'blackfriday' : 
                discountAmount = Total * 0.7
                break;
            case '2025' : 
                discountAmount = Total * 0.25
                break;
            default:
                setCouponError("Invalid coupon code")
                setIsCouponApplied(false)
                setDiscountedTotal(Total)
                return
        }
        const newTotal = Total - discountAmount;
        setDiscountedTotal(newTotal)
        setIsCouponApplied(true)
        setCouponError(null)
        setCouponVal("")
        }

    return <div className="rounded-md border-2 border-border p-4 sticky top-0 max-w-md">
        <h3 className='text-2xl font-bold'>Cart</h3>
        {cart.length > 0 ? (
            <ul>
                {cart.map(prod => <CartItemContext.Provider value={{prod}}><CartItem /></CartItemContext.Provider>)}
            </ul>
            ) : (
                <p className="text-center mt-4">Your cart is empty</p>
            )}
        <h1 className="flex items-center justify-between mt-4">
            <span className="font-bold text-xl">Total : {isCouponApplied && <del className="text-gray-500 font-normal ml-1">{Total.toFixed(2)}$</del>}</span>
            <span className="font-bold text-2xl">
                {discountedTotal.toFixed(2)}$
            </span>
        </h1>
        <div className="mt-4">
            <h3 className="mb-2" title="availible coupon codes on readme.md file">Do you have a coupon code?</h3>
            <div className="flex items-center gap-1">
                <input className='border-2 border-border p-2 rounded-md w-full outline-none' placeholder="your coupon here" value={couponVal} onChange={(e)=> setCouponVal(e.target.value)} type="text"></input>
                <button className="bg-primary text-white py-2 px-4 rounded-md w-full cursor-pointer" onClick={handleCoupon}>Apply</button>
            </div>
           
            {couponError!= null && <p className="text-red-500">{couponError}</p>}
            {cart.length > 0 && <button className="bg-gray-400 cursor-pointer py-2 px-4 rounded text-white mt-4 w-full rounded-md" onClick={handleClearCart}>Clear Cart</button>}
        </div>
        
    </div>
}

export default Cart