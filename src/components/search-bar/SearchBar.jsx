import "./SearchBar.css";
import SearchBarImg from "../../assets/icons/search.svg";
import { use, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form className="search-bar-main-container">
      <img
        className="search-bar-icon"
        src={SearchBarImg}
        alt="Search bar icon"
      />
      <input
        className="search-bar-input"
        type="text"
        placeholder="What are you looking for?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit} className="search-bar-submit-btn">Search</button>
    </form>
  );
}
