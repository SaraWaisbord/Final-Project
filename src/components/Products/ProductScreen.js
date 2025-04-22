import products from '../../data/products.json';
import { Product } from './ProductComponent';

export const LoadProducts = () => {
    const filteredProducts = products.filter((p) => p.price < 300); 
    console.log(products);
    return (

        <div className="products-list">

            {filteredProducts.map((p) => (
            <Product 
                    key={p.id}
                    path={p.img} 
                    shortDesc={p.description} 
                    price={p.price}/>
            ))}
        </div>
    );
};