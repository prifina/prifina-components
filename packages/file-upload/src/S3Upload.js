export const getInfo = () => {
  return ["S3UploadSimple"];
};

export const getModuleName = () => {
  return "S3FileUpload";
};

export const S3UploadSimple = (
  stage,
  appID,
  S3FileUpload,
  fileName,
  fileHandler,
  progress,
  options
) => {
  console.log("S3 STAGE", stage);
  console.log("S3 APP", appID);
  console.log("S3 FILE NAME", fileName);
  console.log("S3 FILE HANDLER", fileHandler);
  console.log("S3 CALLBACK", typeof progress);
  console.log("S3 FILE OPTIONS", options);
  if (stage === "dev") {
    return Promise.resolve({
      data: "OK",
    });
  } else {
    return S3FileUpload({ fileName, fileHandler, progress, options });
  }
};
