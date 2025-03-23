import {products} from '../products'
import Product from './Product'
import { ProductContext } from '../context'
const ProductsList = ()=>{
    return <div className="rounded-md border-2 border-border p-4">
        <h3 className='text-2xl font-bold'>Prodcuts List</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {products.map(prod => <ProductContext.Provider value={{prod}}> <Product /> </ProductContext.Provider>)}
        </div>
        
    </div>
}

export default ProductsList