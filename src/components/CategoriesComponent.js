import React from 'react';
import categories from '../data/categries';
import { Link } from 'react-router-dom';
import "../css/categoriesDropdown.css";
//הצגת המוצרים לפי קטגוריות
const CategoriesDropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-menu">
        {categories.map((category) => (
          <Link key={category.id} to={`/products/${category.name}`} className="category-card-container">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDropdown;
