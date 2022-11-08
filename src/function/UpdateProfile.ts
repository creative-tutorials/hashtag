export const UpdateProfile = async (
  usernameFromInputField: string,
  setbioInput: string,
  getProfileImage: string,
  getBannerImage: string,
  parsedData: any,
  setloadNameGeneratorComponent: any
) => {
  try {
    const response = await fetch("http://localhost:5301/edit_profile", {
      method: "PUT",
      headers: {
        apikey: import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: parsedData.email,
        password: parsedData.password,
        username: usernameFromInputField,
        bio: setbioInput,
        profile_image: getProfileImage,
        banner_image: getBannerImage,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      setloadNameGeneratorComponent(false);
      alert(result.message);
    }
    if (!response.ok) {
      const result = await response.json();
      alert(result.error);
    }
  } catch (err) {
    console.error(err);
  }
};
