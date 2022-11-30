import { getModuleName, getInfo, getFields, queryProducts, queryProductDetails, queryPriceEstimates, queryTimeEstimates, queryUserInfo, querySavedPlaces, queryRideDetails, queryRideMapDetails, queryRideReceiptDetails, queryPaymentMethods } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryProducts: queryProducts,
  queryProductDetails: queryProductDetails,
  queryPriceEstimates: queryPriceEstimates,
  queryTimeEstimates: queryTimeEstimates,
  queryUserInfo: queryUserInfo,
  querySavedPlaces: querySavedPlaces,
  queryRideDetails: queryRideDetails,
  queryRideMapDetails: queryRideMapDetails,
  queryRideReceiptDetails: queryRideReceiptDetails,
  queryPaymentMethods: queryPaymentMethods
};

export { Data as default };
