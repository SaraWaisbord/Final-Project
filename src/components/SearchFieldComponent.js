import categories from "../data/categries";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
//שדה חיפוש של mui

const SearchFieldComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredCategories = categories.find(category=>category.name===searchTerm)
    const handleSearchChange = (event) => {
        console.log("in on blur");
        setSearchTerm(event.target.value);
        if (filteredCategories) {
            return (<><Link to={`/products/${searchTerm}`}></Link></>)
        }
        else {
            return (<>
                <h1>לא נמצאו תוצאות</h1>
            </>)
        }
    }
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
