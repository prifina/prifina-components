'use strict';

var Data$1 = require('./Data.js');

var Data = {
  getModuleName: Data$1.getModuleName,
  getInfo: Data$1.getInfo,
  getFields: Data$1.getFields,
  queryHMAccessory: Data$1.queryHMAccessory,
  queryHMActionSet: Data$1.queryHMActionSet,
  queryHMCharacteristic: Data$1.queryHMCharacteristic,
  queryHMEventTrigger: Data$1.queryHMEventTrigger,
  queryHMHomeManager: Data$1.queryHMHomeManager,
  queryHMMatterHome: Data$1.queryHMMatterHome,
  queryHMMatterRoom: Data$1.queryHMMatterRoom,
  queryHMMatterTopology: Data$1.queryHMMatterTopology,
  queryHMService: Data$1.queryHMService,
  queryHMTimerTrigger: Data$1.queryHMTimerTrigger
};

module.exports = Data;
