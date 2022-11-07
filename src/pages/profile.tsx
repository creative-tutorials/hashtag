import React, { lazy, Suspense } from "react";
import "../styles/profile.css";
import { EditUserProfile } from "../auth/EditUserProfile";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import { IncrementCountOnPageLoad } from "../function/IncrementCount";
const TrendsHeader = lazy(() => import("../components/trends/TrendsHeader"));
const ProfileImage = lazy(
  () => import("../components/profile-component/ProfileImage")
);
const BannerProfile = lazy(
  () => import("../components/profile-component/bannerProfile")
);
export default function ProfilePage() {
  let loadCounter = useRef(0);
  const [isLoaded, setisLoaded] = useState(false);
  const [loadNameGeneratorComponent, setloadNameGeneratorComponent] =
    useState(false);
  const [imageSrc, setImageSrc] = useState();
  const [username, setusernameValue] = useState()
  function ShowProfileChangerComponent() {
    setloadNameGeneratorComponent(true);
  }
  useEffect(() => {
    loadCounter.current++;
    if (loadCounter.current > 1) {
      FetchProfileDataFromAPI();
    }
  }, [loadCounter]);
  const FetchProfileDataFromAPI = async () => {
    const Session: any = localStorage.getItem("session");
    const parsedData = JSON.parse(Session);
    const userPublicID = parsedData.publicID;
    try {
      const response = await fetch(
        `http://localhost:5301/profile/${userPublicID}`,
        {
          method: "GET",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setisLoaded(true);
        setusernameValue(result.username)
        setImageSrc(result.profile_image);
      }
      if (!response.ok) {
        const result = await response.json();
        setisLoaded(false);
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="profile_wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <TrendsHeader />
        <BannerProfile />
      </Suspense>
      <div className="main-profile">
        <div className="profile-image">
          <Suspense fallback={<div>Loading...</div>}>
            <ProfileImage   imageSrc={imageSrc}  />
          </Suspense>

          <div id="features">
            <button
              id="edit-profile"
              data-target="edit profile"
              onClick={ShowProfileChangerComponent}
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
            {isLoaded ? (
              <h2>{username}</h2>
            ) : (
              <h3 style={{ color: "#CF0A0A" }}>
                {
                  "Failed to load profile data, this error may be caused by the client side or server side"
                }
                <p> </p>
              </h3>
            )}
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
      />
    </div>
  );
}
