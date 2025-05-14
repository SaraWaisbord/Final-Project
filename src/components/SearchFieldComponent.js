import categories from "../data/categries";
import { Link } from "react-router";
import TextField from "@mui/material/TextField";
import {useState } from "react";
const SearchFieldComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        console.log("in on blur");
       setSearchTerm(event.target.value);
        const filteredCategories = categories.find(category =>
            category.name===searchTerm)
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

      <input
        id="outlined-basic"
        variant="outlined"
        fullWidth
        placeholder="...חיפוש"
/>
        <button className="search-button" onClick={handleSearch}>
          חיפוש
        </button>
      </div>
    </div>
  );
};
export default SearchFieldComponent;