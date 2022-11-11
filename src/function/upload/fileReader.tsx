import { ConvertFile } from "./convertFile";
export async function ReadFileFromSystem(event: any) {
  const FileObjectFromFileAPI = event.target.files[0];
  const getFileNameFromFileAPI = event.target.files[0].name;
  const getFileTypeFromFileAPI = event.target.files[0].type;
  const getFileSizeFromFileAPI = event.target.files[0].size;
  const reader = new FileReader();
  reader.onload = async function () {
    const Base64DataURLResult = reader.result;

    /* A function that is converting the file to base64 and then sending it to the server. */
    ConvertFile(
      Base64DataURLResult,
      getFileNameFromFileAPI,
      getFileTypeFromFileAPI,
      getFileSizeFromFileAPI,
      FileObjectFromFileAPI
    );
  };
  reader.readAsDataURL(FileObjectFromFileAPI);
}
