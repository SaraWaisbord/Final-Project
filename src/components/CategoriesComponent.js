import categories from "../data/categries"
import { Link } from "react-router-dom";
 const CategoriesComponent = () => {
    return (
    
        <div className="categories">
            {categories.map((category) => (
                <Link to={`/products/${category.name}`}>
                <div key={category.id} className="category-card">
                    <img src={category.image} alt={category.name} />
                    <h3>{category.name}</h3>                  
                </div>
                </Link>
            ))}
        </div>
    );
};
export default CategoriesComponent;