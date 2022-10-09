export function blobConverter(
  dataURLResult: any,
  fileType: any,
  fileName: any
) {
  let spliceContent = dataURLResult.split("png;base64,");

  /**
   * Splits the dataURLResult into two parts, the first being the MIME type and the second being the data itself.
   * @param {string} fileType - the MIME type of the file.
   * @param {string} dataURLResult - the dataURLResult to split.
   * @returns {string[]} - an array containing the MIME type and the data itself.
   */
  if (fileType === "image/svg+xml") {
    spliceContent = dataURLResult.split("/svg+xml;base64,");
  }

  if (fileType === "video/mp4") {
    spliceContent = dataURLResult.split("/mp4;base64,");
  }
  if (fileType === "image/jpeg") {
    spliceContent = dataURLResult.split("/jpeg;base64,");
  }
  if (fileType === "image/jfif") {
    spliceContent = dataURLResult.split("/jfif;base64,");
  }

  /**
   * Takes in the data returned from the spliceContent function and returns the data that is needed.
   * @param {string[]} spliceContent - the data returned from the spliceContent function.
   * @returns {string} - the data that is needed.
   */
  const returnedData = spliceContent[1];

  const b64toBlob = (b64Data: any, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      /**
       * Converts a string of characters to an array of bytes.
       * @param {string} str - the string to convert
       * @returns {number[]} - the array of bytes
       */
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {
      type: contentType,
    });
    return blob;
  };

  const contentType = "image/png";
  const b64Data = returnedData;
  const blob = b64toBlob(b64Data, contentType);
  const blobUrl = URL.createObjectURL(blob);

  /**
   * Sends the data to the API.
   * @returns None
   */
  const SendDataToAPI = async () => {
    try {
      const response = await fetch("http://localhost:5301/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          email: "info@mail.com",
          files: {
            filename: fileName,
            dataURL: blobUrl,
          },
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
      if (!response.ok) {
        const result = await response.json();
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  SendDataToAPI();
}
