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
*/

  if (stage === "dev") {
    return new Promise(function (resolve, reject) {
      let secs = 0;
      const timer = setInterval(() => {
        console.log("OK ", secs);
        if (typeof progress === "function") {
          //const currentProgress=100*(progress.loaded/progress.total);
          progress({ loaded: secs, total: 3 });
        }
        secs++;
        //resolve({ data: "OK" });
        //clearInterval(timer);
        if (secs > 3) {
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
    return S3FileUpload({ fileHandler, progress, options });
  }
};
/*
const subscriptionTimer = setInterval(() => {
  const rInt = Math.floor(Math.random() * Math.floor(10));
  //console.log("RANDOM ", rInt);
  if (!(rInt % 3)) {
    console.log("RANDOM ", rInt);
    //console.log("MOCKUPS ", mockups.current[appID]);
    //console.log("MOCKUP KEYS ", Object.keys(mockups.current[appID]));
    if (
      mockups.current[appID] &&
      Object.keys(mockups.current[appID]).length > 0
    ) {
      Object.keys(mockups.current[appID]).map((mockup) => {
        const data = mockups.current[appID][mockup];
        if (Array.isArray(data)) {
          const r = Math.floor(Math.random() * Math.floor(data.length));
          callbacks.current[appID](data[r]);
        } else {
          callbacks.current[appID](data);
        }
      });
    } else {
      if (Object.keys(mockups.current).length === 0) {
        clearInterval(subscriptionTimer);
      }
    }
  }
}, interval);
*/
