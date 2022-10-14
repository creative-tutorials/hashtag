import { FirebaseStorageFunction } from "../../firebase/storage";
export function blobConverter(
  Base64DataURLResult: any,
  getFileNameFromFileAPI: any,
  getFileTypeFromFileAPI: any,
  getFileSizeFromFileAPI: any,
  FileObjectFromFileAPI: any
) {
  /**
   * SendDataToAPI() is a function that sends data to an API, the data is a file object, a file name, a
   * file type, a blob URL, and a base64 data URL.
   * @returns {result} - this is the result from the API - Actually a response been sent to the client[:may expect error, may expect success message - or a new blob URL]
   */
  const Session: any = localStorage.getItem("session");
  const parsedData = JSON.parse(Session);

  const SendDataToAPI = async () => {
    if (Session) {
      try {
        const isBlob = new Blob([FileObjectFromFileAPI], { type: "image/jpg" });
        const generateBlobURLFromFileObjectAPI = URL.createObjectURL(isBlob);
        const response = await fetch("http://localhost:5301/upload", {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: parsedData.email,
            files: {
              file: getFileNameFromFileAPI,
              fileType: getFileTypeFromFileAPI,
              blobFile: generateBlobURLFromFileObjectAPI,
              fileSize: getFileSizeFromFileAPI,
              dataURL: Base64DataURLResult,
            },
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          alert(result.message);
          FirebaseStorageFunction(
            FileObjectFromFileAPI,
            getFileNameFromFileAPI
          );
        }
        if (!response.ok) {
          const result = await response.json();
          console.log(result);
          alert(result.error);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert(
        "Cannot make post, your session may have expired, try logging in again"
      );
    }
  };
  SendDataToAPI();
}
