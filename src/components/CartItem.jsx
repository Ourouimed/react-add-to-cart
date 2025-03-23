import {CartItemContext, MainContext} from '../context'
import { useContext } from "react"
import {Close } from '@mui/icons-material';
const CartItem = ()=>{
    const { prod  } = useContext(CartItemContext) 
    const { handleRemoveFromCart} = useContext(MainContext)
    return <div key= {prod.id} className='p-1 border-b-2 border-border flex items-center gap-1 justify-between'>
        <div className='flex items-center gap-1'>
            <img className='w-[50px] rounded-md aspect-square' src={prod.imageUrl} alt={prod.name}></img>
            <h3 className='font-bold'>{prod.name}</h3>
        </div>
        <div className='flex items-center gap-1'>
            <span>{prod.price}$</span>
            <button className='text-xl cursor-pointer' onClick={()=> {handleRemoveFromCart(prod)}}><Close className='bg-border rounded'/></button>
        </div>
    </div>
}

export default CartItem