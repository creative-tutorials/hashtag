export const FetchProfileDataFromAPI = async (
  setisLoaded: any,
  setusernameValue: any,
  setImageSrc: any,
  setbannerImgSrc:any,
  seterrorComponent: any
) => {
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
      setusernameValue(result.username);
      setImageSrc(result.profile_image);
      setbannerImgSrc(result.banner_image) 
    }
    if (!response.ok) {
      const result = await response.json();
      setisLoaded(false);
      seterrorComponent(result.error);
    }
  } catch (err) {
    console.error(err);
  }
};
