import { useContext } from "react"
import { ProductContext , MainContext } from "../context"
const Product = ()=>{
    let {prod } = useContext(ProductContext)
    let {handlAddToCart} = useContext(MainContext)
    return  <div className='shadow-md' key={prod.id}>
    <img src={prod.imageUrl} alt={prod.name} className='w-full rounded'></img>
    <div className='p-2'>
        <div className='flex items-center justify-between'>
            <h3 className='font-bold text-xl'>{prod.name}</h3>
            <span className="font-bold text-2xl">{prod.price}$</span>
        </div>
        <p>{prod.description}</p>
        <button className='bg-primary cursor-pointer py-2 px-4 rounded text-white mt-1' onClick={()=> {handlAddToCart(prod)}}>Add to cart</button>
    </div>
    
    
</div>
}

export default Product