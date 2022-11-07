import React from "react";
export default function ProfileImage({ imageSrc }:any) {
  return <img src={imageSrc} alt="profile image" loading="lazy" />;
}
