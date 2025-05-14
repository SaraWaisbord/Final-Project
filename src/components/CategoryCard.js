import { ImgComponent } from "./ImgComponent";

export const CategoryCard = ({ category }) => {
    return (    
        <div className="category-card">
            <ImgComponent path={category.image} />
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
        </div>
       
    );
};