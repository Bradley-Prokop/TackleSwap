import "./Home.css";
import { UserPlus, Search, ArrowLeftRight, PackageOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="home-main-container">
      {/* Hero section */}
      <div className="home-first-image-block">
        <div className="home-hero">
          <h1 className="home-hero-title">Welcome to Tackle Swap!</h1>
          <p className="home-hero-subtitle">
            Trade, buy, and sell fishing gear with other anglers.
          </p>
        </div>
      </div>

      {/* Mission section */}
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

      {/* How it works */}
      <div className="home-how-it-works-container">
        <div className="home-how-it-works-inner-container">
          <h1 className="home-how-it-works-title">How it works</h1>

          <div className="home-how-it-works-list-container">
            <div className="home-how-it-works-list-item">
              <UserPlus className="home-how-it-works-icon" />

              <h3>Create an Account</h3>

              <p>Join a community of anglers swapping gear.</p>
            </div>

            <div className="home-how-it-works-list-item">
              <Search className="home-how-it-works-icon" />

              <h3>Browse Fishing Gear</h3>

              <p>Explore rods, reels, tackle, and more.</p>
            </div>

            <div className="home-how-it-works-list-item">
              <ArrowLeftRight className="home-how-it-works-icon" />

              <h3>Trade or Sell</h3>

              <p>Swap gear or list items for sale.</p>
            </div>

            <div className="home-how-it-works-list-item">
              <PackageOpen className="home-how-it-works-icon" />

              <h3>Free Up Space</h3>

              <p>Clear out unused gear from your tackle box.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
