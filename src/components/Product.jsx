import { useContext } from "react"
import { ProductContext , MainContext } from "../context"
const Product = ()=>{
    let {prod } = useContext(ProductContext)
    let {handlAddToCart} = useContext(MainContext);
    return (
        <div
            className='shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'
            key={prod.id}
        >
           <div className="overflow-hidden"> <img
            src={prod.imageUrl}
            alt={prod.name}
            className='w-full h-48 object-cover object-center hover:scale-110 transition-transform duration-300'
        /></div>
            <div className='p-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-bold text-xl'>{prod.name}</h3>
                    <span className='font-bold text-2xl'>{prod.price}$</span>
                </div>
                <p className='text-gray-600 mt-2'>{prod.description}</p>
                <button className='bg-primary cursor-pointer py-2 px-4 rounded text-white mt-4' onClick={() => { handlAddToCart(prod) }}>Add to cart</button>
            </div>
        </div>
    );
}

export default Product