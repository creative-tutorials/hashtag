export function ConvertFile(
  Base64DataURLResult: any,
  getFileNameFromFileAPI: any,
  getFileTypeFromFileAPI: any,
  getFileSizeFromFileAPI: any,
  FileObjectFromFileAPI: any
) {
  const Session: any = localStorage.getItem("session");
  /* Parsing the session data into readable format i.e a JSON Format. */
  const parsedData = JSON.parse(Session);

  const UploadFilesDataToServer = async () => {
    try {
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
            fileSize: getFileSizeFromFileAPI,
            dataURL: Base64DataURLResult,
          },
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  /* Checking if the session is valid. */
  if (Session) {
    UploadFilesDataToServer();
  }
}
