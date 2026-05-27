import "./Browse.css";
import SearchBar from "../../components/search-bar/SearchBar";
import Card from "../../components/card/Card";
import fishingPoleIMG from "../../assets/fishing_pole.png";
import fishingReelIMG from "../../assets/fishing_reel.png";
import { useState } from "react";

export default function Browse() {
  const [searchBarText, setSearchBarText] = useState("");

  const handleSearch = (text) => {
    setSearchBarText(text);
  };

  return (
    <div className="browse-main-container">
      <div className="browse-search-bar-container">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>

      {searchBarText != "" && (
        <div className="browse-search-result-container">
          <h2 className="browse-search-result-label">
            Showing results for "{searchBarText}"
          </h2>

          <hr className="browse-search-result-hr" />

          <div className="browse-search-results">
            {/* dynamically render results here */}
          </div>
        </div>
      )}

      <div className="browse-recently-posted-container">
        <h1 className="recently-posted-title">Recently Posted</h1>

        <div className="recently-posted-cards-grid">
          <Card
            title="Abu Garcia Revo X Spinning Reel"
            image={fishingPoleIMG}
            price="70 OBO"
            className="recently-posted-card"
          />

          <Card
            title="St. Croix Triumph Casting Rod"
            image={fishingReelIMG}
            price="140"
            className="recently-posted-card"
          />

          <Card
            title="Shimano SLX Casting Combo"
            image={fishingPoleIMG}
            price="110"
            className="recently-posted-card"
          />
        </div>
        <button className="recently-posted-view-more">View More</button>
      </div>
    </div>
  );
}
