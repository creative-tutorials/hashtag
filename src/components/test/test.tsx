import useObjectURL from "use-object-url";

export const DownloadFileLink = ({ file }: any) => {
  const fileURL = useObjectURL(file);
  console.log(fileURL);

  return <></>;
};
