import { ImgComponent } from "./ImgComponent";
import { Link } from "react-router-dom";
import "../css/categoryCard.css";
export const CategoryCard = ({ category }) => {
    return (
        <Link key={category.id} to={`/products/${category.name}`} >
        <div className="category-card">
            <ImgComponent path={category.image} />
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
        </div>
        </Link>
       
    );
};