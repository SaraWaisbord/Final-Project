
import data from "../../data/categries.js";
import { CategoryCard } from "../CategoryCard.js";
import '../../css/categoriesDropdown.css';
export const ChosenCategory = () => {
    const categories = data.slice(0, 4); // Get the first 6 categories from the data
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
