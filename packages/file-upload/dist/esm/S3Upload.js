"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S3UploadSimple = exports.getModuleName = exports.getInfo = void 0;

var _shortUuid = _interopRequireDefault(require("short-uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getInfo = function getInfo() {
  return ["S3UploadSimple"];
};

exports.getInfo = getInfo;

var getModuleName = function getModuleName() {
  return "S3FileUpload";
};

exports.getModuleName = getModuleName;

var S3UploadSimple = function S3UploadSimple(stage, appID, name, S3FileUpload, fileHandler, progress, options) {
  console.log("S3 STAGE", stage);
  console.log("S3 APP", appID);
  console.log("S3 MODULE", name); //console.log("S3 FILE NAME", fileName);

  console.log("S3 FILE HANDLER", fileHandler);
  console.log("S3 CALLBACK", _typeof(progress));
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

  var file = fileHandler.files[0];
  var metaData = {
    "alt-name": file.name
  };
  metaData.type = file.type || "";
  metaData.created = new Date().toISOString();
  metaData.lastModified = file.lastModified ? new Date(file.lastModified).toISOString() : "";
  var ext = file.name.split(".").pop();

  var keyName = _shortUuid["default"].generate(); //const keyName = "TESTING";


  if (stage === "dev") {
    var total = 3;
    return new Promise(function (resolve, reject) {
      var secs = 0;
      var timer = setInterval(function () {
        console.log("OK ", secs);

        if (typeof progress === "function") {
          //const currentProgress=100*(progress.loaded/progress.total);
          progress({
            loaded: secs,
            total: total
          });
        }

        secs++; //resolve({ data: "OK" });
        //clearInterval(timer);

        if (secs > total) {
          clearInterval(timer);
          resolve({
            data: "OK"
          });
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
      file: file,
      fileName: keyName + "." + ext,
      meta: metaData,
      progress: progress,
      options: options
    });
  }
};

exports.S3UploadSimple = S3UploadSimple;