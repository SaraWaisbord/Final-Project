
import data from "../../data/categries.js";
import { CategoryCard } from "../CategoryCard.js";
import "../../css/categoriesCh.css";
export const ChosenCategory = () => {
    const categories = data.slice(0, 4); // Get the first 6 categories from the data
    return (
        <>    
        <h3 className="category-title-ch">קטגוריות נבחרות</h3>
        <div className="category-container"><hr></hr>
            {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div></>
    );


}
