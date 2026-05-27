import "./Browse.css";
import SearchBar from "../../components/search-bar/SearchBar";
import Card from "../../components/card/Card";
import fishingPoleIMG from "../../assets/fishing_pole.png";
import fishingReelIMG from '../../assets/fishing_reel.png';

export default function Browse() {
  return (
    <div className="browse-main-container">
      <div className="browse-search-bar-container">
        <SearchBar></SearchBar>
      </div>

      {/* <div className="browse-recently-posted-container">
        <h1 className="recently-posted-title">Recently Posted</h1>
        <Card
          title="Abu Garcia Revo X Spinning Reel"
          image={fishingPoleIMG}
          price="70 OBO"
          className="recently-posted-card"
        />
        <Card
          title="St. Croix Triumph Casting Rod"
          image={fishingPoleIMG}
          price="140 or reel trade"
          className="recently-posted-card"
        />
      </div> */}

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
