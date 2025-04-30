import { useSelector } from 'react-redux';
import Product from "./Products/ProductComponent"; // Ensure to import your Product component
import ChosenProductsData from '../data/chosenProduct';
const ProductPage = () => {
    const products=ChosenProductsData;
    return (
        <div className="product-page-container-chosen">
          <h1 className="product-page-title-chosen">המוצרים נבחרים</h1>
          <div className="product-grid-chosen">
            {products.map((product) => (
              <div className="product-item-chosen" key={product.id}>
                <Product id={product.id} />
              </div>
            ))}
          </div>
        </div>
      );
};export default ProductPage;