import { blobConverter } from "../blobConverter/blobConvert";
export function ReadFileFromSystem(event:any) {
  console.log(event.target.files[0]);
  const file = event.target.files[0];
  const fileName = event.target.files[0].name;
  const fileType = event.target.files[0].type;
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = async function (e:any) {
    const dataURLResult = e.target.result;
    // console.log(a);

    blobConverter(dataURLResult, fileType, fileName);
  };
}
