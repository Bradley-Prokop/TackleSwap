import "./Home.css";
import SearchBar from "../../components/search-bar/SearchBar";

export default function Home() {
  return (
    <div className="home-main-container">
      <div className="home-first-image-block">
        <div className="home-search-bar-container">
          <SearchBar></SearchBar>
        </div>
        <div className="home-hero">
          <h1 className="home-hero-title">Old Gear Piling Up?</h1>
          <p className="home-hero-subtitle">
            Trade, buy, and sell fishing gear with other anglers.
          </p>
        </div>
      </div>

      <div className="home-our-misson-container">
        <h1 className="our-mission-title">Our Mission</h1>
        <hr className="our-mission-hr" />
        <p className="our-mission-text">
          Built by anglers, for anglers. We know fishing gear can pile up fast.
          Our mission is to provide a platform where anglers can buy, sell, and
          trade used equipment with ease. By giving old gear a second life,
          anglers can clear out clutter while finding quality equipment at a
          great value!
        </p>
      </div>

      <div className="home-browse-by-type-contianer">
        <div className="browse-by-type-content-background">
          <h1 className="browse-by-type-title">Browse By Type</h1>
          <hr className="browse-by-type-hr" />
          <div className="home-browse-by-type-options">
            <div className="home-browse-option">
              <h4 className="home-browse-option-text">Rods</h4>
            </div>
            <div className="home-browse-option">
              <h4 className="home-browse-option-text">Reels</h4>
            </div>
            <div className="home-browse-option">
              <h4 className="home-browse-option-text">Tackle</h4>
            </div>
            <div className="home-browse-option">
              <h4 className="home-browse-option-text">Other</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
