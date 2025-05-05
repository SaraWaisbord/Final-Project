
import data from "../../data/categries.js";
import { CategoryCard } from "../CategoryCard.js";
import '../../css/categories.css';
export const ChosenCategory = () => {
    const categories = data;
    return (
        <>    
        <h2 className="category-title">קטגוריות נבחרות</h2>
        <div className="category-container">

            {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div></>
    );


}
