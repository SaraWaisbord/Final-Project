import categories from "../data/categries";
import { Link } from "react-router-dom"; // תיקון, נכון להשתמש ב-react-router-dom
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import "../css/searchFiled.css";
const SearchFieldComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // חיפוש קטגוריה לפי שם
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-field">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          placeholder="...חיפוש"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="search-results">
        {searchTerm && filteredCategories.length > 0 ? (
          <div>
            {filteredCategories.map((category) => (
              <Link key={category.id} to={`/products/${category.name}`}>
                <h2>{category.name}</h2>
              </Link>
            ))}
          </div>
        ) : (
          searchTerm && <h8>לא נמצאו תוצאות</h8>
        )}
      </div>
    </div>
  );
};

export default SearchFieldComponent;
