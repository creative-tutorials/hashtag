import { CheckUserID } from "../auth/CheckUserID";
import { TrendsHeader } from "../components/trends/TrendsHeader";
import "../styles/profile.css";
import { EditUserProfile } from "../auth/EditUserProfile";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
export default function ProfilePage() {
  const id_checker_input: any = useRef(false);
  // let loadNameGeneratorComponent = false;
  const [loadNameGeneratorComponent, setloadNameGeneratorComponent] =
    useState(false);
  const [hideIDComponent, sethideIDComponent] = useState(false);
  useEffect(() => {
    // ();

    return () => {};
  }, []);

  function EditUserProfileName() {
    setloadNameGeneratorComponent(true);
  }
  return (
    <div className="profile_wrapper">
      <TrendsHeader />
      <div className="banner-profile">
        <img src="banner.jpg" alt="banner image" loading="lazy" />
      </div>
      <div className="main-profile">
        <div className="profile-image">
          <img src="ab1.jpg" alt="profile image" loading="lazy" />

          <div id="features">
            <button
              id="edit-profile"
              data-target="edit profile"
              onClick={EditUserProfileName}
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
          <div id="lists">
            <span id="members-list">0 members</span>
            <span id="profile-view">0 views</span>
            <span id="post-count">0 posts</span>
          </div>
        </div>
      </div>
      <div className="profile-timelines">
        <div id="menu">
          <Link to={""}>Post</Link>
          <Link to={""}>Friends</Link>
        </div>
      </div>
      <EditUserProfile
        loadNameGeneratorComponent={loadNameGeneratorComponent}
        setloadNameGeneratorComponent={setloadNameGeneratorComponent}
        sethideIDComponent={sethideIDComponent}
      />
      <CheckUserID
        id_checker_input={id_checker_input}
        hideIDComponent={hideIDComponent}
      />
    </div>
  );
}
