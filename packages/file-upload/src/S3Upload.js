import Short from "short-uuid";

export const getInfo = () => {
  return ["S3UploadSimple"];
};

export const getModuleName = () => {
  return "S3FileUpload";
};

export const S3UploadSimple = (
  stage,
  appID,
  name,
  S3FileUpload,

  fileHandler,
  progress,
  options
) => {
  console.log("S3 STAGE", stage);
  console.log("S3 APP", appID);

  console.log("S3 MODULE", name);
  //console.log("S3 FILE NAME", fileName);
  console.log("S3 FILE HANDLER", fileHandler);
  console.log("S3 CALLBACK", typeof progress);
  console.log("S3 FILE OPTIONS", options);
  /*
  const keyName=Short.generate();
  let metaData={ "alt-name": file.name };
  metaData['id']=keyName;
  if (typeof file.lastModified!=='undefined') {
    metaData['lastModified']=file.lastModified.toString();
  }
  const ext=file.name.split('.').pop();
  console.log('META',metaData);
const s3Status = await S3Storage.put(
          s3Key,
          JSON.stringify(state.schemaJson),
          {
            level: "public",
            contentType: "application/json",
            cacheControl: "",
            expires: parseInt(Date.now() / 1000),
            metadata: { created: new Date().toISOString() },
          }
        );
        console.log(s3Stat
*/

  const file = fileHandler.files[0];
  let metaData = { "alt-name": file.name };
  metaData.type = file.type || "";
  metaData.created = new Date().toISOString();
  metaData.lastModified = file.lastModified
    ? new Date(file.lastModified).toISOString()
    : "";

  const ext = file.name.split(".").pop();
  const keyName = Short.generate();
  //const keyName = "TESTING";

  if (stage === "dev") {
    const total = 3;
    return new Promise(function (resolve, reject) {
      let secs = 0;
      const timer = setInterval(() => {
        console.log("OK ", secs);
        if (typeof progress === "function") {
          //const currentProgress=100*(progress.loaded/progress.total);
          progress({ loaded: secs, total: total });
        }
        secs++;
        //resolve({ data: "OK" });
        //clearInterval(timer);
        if (secs > total) {
          clearInterval(timer);
          resolve({ data: "OK" });
        }
      }, 1000);
      /* 
    return Promise.resolve({
      data: "OK",
    });
    */
    });
  } else {
    return S3FileUpload({
      file,
      fileName: keyName + "." + ext,
      appID: appID,
      meta: metaData,
      progress,
      options,
    });
  }
};
