import { blobConverter } from "../blobConverter/blobConvert";
// import { DownloadFileLink } from "../test/test";
export async function ReadFileFromSystem(event: any) {
  const FileObjectFromFileAPI = event.target.files[0];
  const getFileNameFromFileAPI = event.target.files[0].name;
  const getFileTypeFromFileAPI = event.target.files[0].type;
  const getFileSizeFromFileAPI = event.target.files[0].size;
  var reader = new FileReader();
  reader.onload = async function () {
    const Base64DataURLResult = reader.result;

    blobConverter(Base64DataURLResult, getFileNameFromFileAPI, getFileTypeFromFileAPI, getFileSizeFromFileAPI, FileObjectFromFileAPI);
    // DownloadFileLink(file);
  };
  reader.readAsDataURL(FileObjectFromFileAPI);
}
