import { getModuleName, getInfo, getFields, queryRawSync, queryRawAsync } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryRawSync: queryRawSync,
  queryRawAsync: queryRawAsync
};

export { Data as default };
