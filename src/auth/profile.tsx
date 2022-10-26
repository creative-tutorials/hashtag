import { TrendsHeader } from "../components/trends/TrendsHeader";
import "../styles/profile.css";
import { UsernamePicker } from "./usernamePicker";
import { useState, useEffect } from "react";
export default function ProfilePage() {
  const [loadNameGeneratorComponent, setloadNameGeneratorComponent] =
    useState(false);
  useEffect(() => {
    FindUserByIDandChageUserName();

    return () => {};
  }, []);

  function Check() {
    setloadNameGeneratorComponent(true);
  }
  function FindUserByIDandChageUserName() {
    loadNameGeneratorComponent ? console.log('returned true') : console.log('returned false');
  }
  return (
    <div className="profile_wrapper">
      <TrendsHeader />
      <div className="banner-profile">
        <img src="" alt="banner image" loading="lazy" />
      </div>
      <div className="main-profile">
        <div className="profile-image">
          <img src="ab1.jpg" alt="profile image" loading="lazy" />

          <div id="features">
            <button
              id="edit-profile"
              data-target="edit profile"
              onClick={Check}
            >
              Edit Profile
            </button>
            <button id="add-story" data-target="add-story">
              Add Story
            </button>
            <button id="delete-account" data-target="delete account">
              Delete Account
            </button>
          </div>
        </div>
        <div className="profile-details">
          <div className="username">
            <h2>John Doe</h2>
          </div>
          <div id="followers-and-following-count">
            <span id="followers">0 followers</span>
            <span id="following">0 following</span>
          </div>
        </div>
      </div>
      <UsernamePicker loadNameGeneratorComponent={loadNameGeneratorComponent} />
    </div>
  );
}
