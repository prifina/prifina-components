import { products } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/products.js';
import { productDetails } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/productDetails.js';
import { priceEstimates } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/priceEstimates.js';
import { timeEstimates } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/timeEstimates.js';
import { userInfo } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/userInfo.js';
import { paymentMethods } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/paymentMethods.js';
import { savedPlaces } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/savedPlaces.js';
import { rideDetails } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/rideDetails.js';
import { rideMapDetails } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/rideMapDetails.js';
import { rideReceiptDetails } from '../../../node_modules/@dynamic-data/uber-data/dist/esm/mockups/rideReceiptDetails.js';

/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/
var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
/*
const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;
*/

var getInfo = function getInfo() {
  //return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
  return ["queryProducts", "queryProductDetails", "queryPriceEstimates", "queryTimeEstimates", "queryUserInfo", "querySavedPlaces", "queryRideDetails", "queryRideMapDetails", "queryRideReceiptDetails", "queryPaymentMethods"];
};
var getModuleName = function getModuleName() {
  return "Uber";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryProducts":
      fields = Object.keys(products);
      break;

    case "queryProductDetails":
      fields = Object.keys(productDetails);
      break;

    case "queryPriceEstimates":
      fields = Object.keys(priceEstimates);
      break;

    case "queryTimeEstimates":
      fields = Object.keys(timeEstimates);
      break;

    case "queryUserInfo":
      fields = Object.keys(userInfo);
      break;

    case "querySavedPlaces":
      fields = Object.keys(savedPlaces);
      break;

    case "queryRideDetails":
      fields = Object.keys(rideDetails);
      break;

    case "queryRideMapDetails":
      fields = Object.keys(rideMapDetails);
      break;

    case "queryRideReceiptDetails":
      fields = Object.keys(rideReceiptDetails);
      break;

    case "queryPaymentMethods":
      fields = Object.keys(paymentMethods);
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryProducts = function queryProducts(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: products
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryProductDetails = function queryProductDetails(_ref2) {
  var stage = _ref2.stage,
      appID = _ref2.appID,
      name = _ref2.name,
      createQuery = _ref2.createQuery,
      fields = _ref2.fields,
      filter = _ref2.filter,
      next = _ref2.next,
      fieldsList = _ref2.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: productDetails
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryPriceEstimates = function queryPriceEstimates(_ref3) {
  var stage = _ref3.stage,
      appID = _ref3.appID,
      name = _ref3.name,
      createQuery = _ref3.createQuery,
      fields = _ref3.fields,
      filter = _ref3.filter,
      next = _ref3.next,
      fieldsList = _ref3.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: priceEstimates
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryTimeEstimates = function queryTimeEstimates(_ref4) {
  var stage = _ref4.stage,
      appID = _ref4.appID,
      name = _ref4.name,
      createQuery = _ref4.createQuery,
      fields = _ref4.fields,
      filter = _ref4.filter,
      next = _ref4.next,
      fieldsList = _ref4.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: timeEstimates
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUserInfo = function queryUserInfo(_ref5) {
  var stage = _ref5.stage,
      appID = _ref5.appID,
      name = _ref5.name,
      createQuery = _ref5.createQuery,
      fields = _ref5.fields,
      filter = _ref5.filter,
      next = _ref5.next,
      fieldsList = _ref5.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: userInfo
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySavedPlaces = function querySavedPlaces(_ref6) {
  var stage = _ref6.stage,
      appID = _ref6.appID,
      name = _ref6.name,
      createQuery = _ref6.createQuery,
      fields = _ref6.fields,
      filter = _ref6.filter,
      next = _ref6.next,
      fieldsList = _ref6.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: savedPlaces
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryRideDetails = function queryRideDetails(_ref7) {
  var stage = _ref7.stage,
      appID = _ref7.appID,
      name = _ref7.name,
      createQuery = _ref7.createQuery,
      fields = _ref7.fields,
      filter = _ref7.filter,
      next = _ref7.next,
      fieldsList = _ref7.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: rideDetails
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryRideMapDetails = function queryRideMapDetails(_ref8) {
  var stage = _ref8.stage,
      appID = _ref8.appID,
      name = _ref8.name,
      createQuery = _ref8.createQuery,
      fields = _ref8.fields,
      filter = _ref8.filter,
      next = _ref8.next,
      fieldsList = _ref8.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: rideMapDetails
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryRideReceiptDetails = function queryRideReceiptDetails(_ref9) {
  var stage = _ref9.stage,
      appID = _ref9.appID,
      name = _ref9.name,
      createQuery = _ref9.createQuery,
      fields = _ref9.fields,
      filter = _ref9.filter,
      next = _ref9.next,
      fieldsList = _ref9.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: rideReceiptDetails
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryPaymentMethods = function queryPaymentMethods(_ref10) {
  var stage = _ref10.stage,
      appID = _ref10.appID,
      name = _ref10.name,
      createQuery = _ref10.createQuery,
      fields = _ref10.fields,
      filter = _ref10.filter,
      next = _ref10.next,
      fieldsList = _ref10.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: paymentMethods
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

export { getFields, getInfo, getModuleName, queryPaymentMethods, queryPriceEstimates, queryProductDetails, queryProducts, queryRideDetails, queryRideMapDetails, queryRideReceiptDetails, querySavedPlaces, queryTimeEstimates, queryUserInfo };
