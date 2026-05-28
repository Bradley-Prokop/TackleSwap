import "./Listings.css";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import InputFeild from "../../components/auth/InputField";

export default function Listings() {
  const { user, loading } = useAuth();
  const [newListingPopUpActive, setNewListingPopUpActive] = useState(false);
  const [newListingTitle, setNewListingTitle] = useState("");
  const [newListingDescription, setNewListingDescription] = useState("");
  const [newListingPrice, setNewListingPrice] = useState("");
  const [newListingImage, setNewListingImage] = useState("");

  //If still loading
  if (loading) {
    return (
      <div className="listings-main-container">
        <h5 className="listings-loading-msg">Loading content...</h5>
      </div>
    );
  }

  //If no user
  if (!user) {
    return (
      <div className="listings-main-container">
        <h4 className="listings-no-user-msg">
          Please sign in to view listings!
        </h4>
      </div>
    );
  }

  return (
    <div className="listings-main-container">
      <div className="listings-my-listings-container">
        <div className="my-listings-label-container">
          <h1 className="my-listings-label">My Listings</h1>
          <button
            onClick={() => setNewListingPopUpActive(true)}
            className="my-listings-new-listing-btn"
          >
            <Plus size={25} />
            New
          </button>
        </div>

        <hr className="my-listings-hr" />

        <div className="my-listings-listings-container"></div>
      </div>

      {/* New listing pop up */}
      {newListingPopUpActive && (
        <div className="my-listings-new-listing-pop-up-container">
          <form className="my-listings-new-listing-pop-up-form">
            <button
              onClick={() => setNewListingPopUpActive(false)}
              className="my-listings-new-listing-pop-up-close-btn"
            >
              <X />
            </button>

            <h2 className="my-listings-new-listing-pop-up-title">
              New Listing
            </h2>

            <InputFeild
              type="text"
              placeholder="Title"
              value={newListingTitle}
              onChange={(e) => setNewListingTitle(e.target.value)}
            ></InputFeild>

            <InputFeild
              type="text"
              placeholder="Description"
              value={newListingDescription}
              onChange={(e) => setNewListingDescription(e.target.value)}
            ></InputFeild>

            <InputFeild
              type="number"
              placeholder="$ Price"
              value={newListingPrice}
              onChange={(e) => setNewListingPrice(e.target.value)}
            ></InputFeild>

            {/* <InputFeild
            type="file"
            placeholder=""
            value={newListingImage}
            onChange={(e)=>setNewListingImage(e.target.value)}
            className="newListingImageUpLoad"
            ></InputFeild> */}

            <label className="new-listing-image-upload">
              Upload Image
              <input
                type="file"
                onChange={(e) => setNewListingImage(e.target.files[0])}
                className="hidden-file-input"
              />
            </label>


            <button className="my-listings-new-listing-pop-up-post-listing-btn">Post Listing</button>
          </form>
        </div>
      )}
    </div>
  );
}

//       my-listings-new-listing-pop-up
