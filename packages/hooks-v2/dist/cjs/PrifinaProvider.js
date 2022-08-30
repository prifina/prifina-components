'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');

var React = require('react');

var utils = require('./utils.js');

var gql = require('graphql-tag');

var queryBuilder = require('./queryBuilder.js');

function _interopDefaultLegacy(e) {
  return e && _typeof(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var gql__default = /*#__PURE__*/_interopDefaultLegacy(gql);

var _excluded = ["activeApp", "activeUser", "Context", "stage", "children"],
    _excluded2 = ["appHandler"];
/*
export const AccountContext = createContext(null);

export function useAccountContext() {
  return useContext(AccountContext);
}

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
    
      }}
    >
      <ThemeProvider>
        <React.Fragment>
          <GlobalStyle />
          {!isAuthenticating && <Routes />}
          {isAuthenticating && <div>Loading...</div>}
        </React.Fragment>
      </ThemeProvider>
    </AppContext.Provider>
  );

*/

var PrifinaContext = /*#__PURE__*/React.createContext({});

var PrifinaContextProvider = function PrifinaContextProvider(_ref) {
  var activeApp = _ref.activeApp,
      activeUser = _ref.activeUser,
      Context = _ref.Context,
      _ref$stage = _ref.stage,
      stage = _ref$stage === void 0 ? "dev" : _ref$stage,
      children = _ref.children,
      props = _rollupPluginBabelHelpers.objectWithoutProperties(_ref, _excluded);

  var providerContext = React.useRef(_rollupPluginBabelHelpers.objectSpread2({
    stage: stage
  }, props));
  var callbacks = React.useRef({});
  var appSubscriptions = React.useRef({});
  var CLIENT = React.useRef({});
  var API = React.useRef({});

  var _useState = React.useState(activeUser || {
    name: "Test",
    uuid: "Testing-uuid",
    endpoint: "https://endpoint.xxx",
    region: "us-east-1"
  }),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      currentUser = _useState2[0];

  _useState2[1];
  var check = React.useCallback(function () {
    console.log("Prifina current", providerContext.current); //console.log("Prifina subscriptions", appSubscriptions.current);
    //console.log("Prifina API", API.current);
    //console.log("Prifina CLIENT", CLIENT.current);
    //timerTest();

    return {
      init: providerContext.current.init,
      callbacks: getCallbacks(),
      API: getAPI()
    };
  }, []); //S3FileUpload,
  //res.data.createMessage.messageId,

  /*
  await API[appID].Messaging.mutationUpdateMessageStatus({
    variables: { messageId: m.id, status: 1 },
  });
  */

  var createSubscription = function createSubscription(opts) {
    var _callbacks$current, _callbacks$current2;

    console.log("SUBSCRIPTION OPTS ", opts);

    if ((_callbacks$current = callbacks.current) !== null && _callbacks$current !== void 0 && _callbacks$current.sandbox) {
      var connectorFunction = Object.assign({}, opts);
      callbacks.current["sandbox"][0](_rollupPluginBabelHelpers.defineProperty({}, connectorFunction.name, connectorFunction));
    }

    if ((_callbacks$current2 = callbacks.current) !== null && _callbacks$current2 !== void 0 && _callbacks$current2.sandbox) {
      callbacks.current["sandbox"][0]({
        mutationRequest: {
          appID: opts.appId,
          variables: opts.variables
        }
      });
    }

    return new Promise(function (resolve, reject) {
      var _appSubscriptions$cur;

      var _opts$variables = opts.variables,
          appHandler = _opts$variables.appHandler,
          variables = _rollupPluginBabelHelpers.objectWithoutProperties(_opts$variables, _excluded2);

      var subHandler = CLIENT.current.user.subscribe({
        query: gql__default["default"](opts.mutation),
        variables: _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, variables), {}, {
          dataconnector: opts.name,
          userId: currentUser.uuid,
          appId: opts.appId,
          execId: utils.shortId(),
          stage: providerContext.current.init.stage
        })
      }).subscribe({
        next: function next(res) {
          console.log("NOTIFICATION SUBS RESULTS3 ", res, appHandler); //appSubscriptions.current[opts.appId][appHandler]=subHandler;

          var appIndex = providerContext.current.init.apps[opts.appId];
          console.log("APP INDEX ARRAY ", appIndex);
          /*
          NOTIFICATION SUBS RESULTS3  { data: 'Subsription Testing...' } s8af6yaxis
          console.log
          APP INDEX  [ 's8af6yaxis' ]
          console.log
          SUBS HANDLER  181ujb3avr
                 console.log
          SUBS  { 'APP-ID': { s8af6yaxis: '181ujb3avr' } }
          */

          var callBackIndex = 0;

          if (appIndex.length > 1) {
            callBackIndex = appIndex.findIndex(function (id) {
              return id === appHandler;
            });
          }

          callbacks.current[opts.appId][callBackIndex](res.data);
        },
        error: function error(_error) {
          console.warn(_error); //const appIndex = providerContext.current.init.apps[opts.appId];

          var callBackIndex = 0;
          callbacks.current[opts.appId][callBackIndex]({
            error: _error
          });
        }
      });
      console.log("SUBS HANDLER ", subHandler);

      if ((_appSubscriptions$cur = appSubscriptions.current) !== null && _appSubscriptions$cur !== void 0 && _appSubscriptions$cur[opts.appId]) {
        // not array so we can support multiple subscriptions for same app/widget... 
        appSubscriptions.current[opts.appId][appHandler] = subHandler; //appSubscriptions.current[opts.appId].push(subHandler);
      } else {
        appSubscriptions.current[opts.appId] = _rollupPluginBabelHelpers.defineProperty({}, appHandler, subHandler);
      }

      resolve(true);
    });
  };

  var createMutation = function createMutation(opts) {
    var _callbacks$current3, _callbacks$current4;

    console.log("MUTATION OPTS ", opts);

    if ((_callbacks$current3 = callbacks.current) !== null && _callbacks$current3 !== void 0 && _callbacks$current3.sandbox) {
      var connectorFunction = Object.assign({}, opts);
      callbacks.current["sandbox"][0](_rollupPluginBabelHelpers.defineProperty({}, connectorFunction.name, connectorFunction));
    }

    if ((_callbacks$current4 = callbacks.current) !== null && _callbacks$current4 !== void 0 && _callbacks$current4.sandbox) {
      callbacks.current["sandbox"][0]({
        mutationRequest: {
          appID: opts.appId,
          variables: opts.variables
        }
      });
    }

    return new Promise(function (resolve, reject) {
      opts.name.split("/");
      CLIENT.current.user.mutate({
        mutation: gql__default["default"](opts.mutation),
        variables: {
          input: _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, opts.variables), {}, {
            dataconnector: opts.name,
            userId: currentUser.uuid,
            appId: opts.appId,
            execId: utils.shortId(),
            stage: providerContext.current.init.stage
          })
        }
      }).then(function (res) {
        var _res$data$key, _res$data$key$result, _callbacks$current5;

        console.log("MUTATION RES ", res);
        /*
        type MsgObjectData @aws_iam {
        	receiver: String
        	messageId: String
        	chatId: String
        	createdAt: AWSTimestamp
        	result: AWSJSON
        }
             MUTATION RES  { data: { mutationCreateMessage: { result: [Object] } } 
        */

        var dataObject = undefined; //let key=moduleParts[1];

        var key = Object.keys(res.data)[0];
        console.log("KEY ", key); // messaging mutations... 

        if ((_res$data$key = res.data[key]) !== null && _res$data$key !== void 0 && _res$data$key.result && (_res$data$key$result = res.data[key].result) !== null && _res$data$key$result !== void 0 && _res$data$key$result.result) {
          //console.log("KEY2 ",res.data[key])
          dataObject = JSON.parse(res.data[key].result.result);
        } else {
          dataObject = res.data[key];
        }

        if ((_callbacks$current5 = callbacks.current) !== null && _callbacks$current5 !== void 0 && _callbacks$current5.sandbox) {
          callbacks.current["sandbox"][0]({
            mutationResult: {
              data: _rollupPluginBabelHelpers.defineProperty({}, key, dataObject)
            }
          });
        }

        resolve({
          data: _rollupPluginBabelHelpers.defineProperty({}, key, dataObject)
        });
      })["catch"](function (error) {
        console.log("MUTATION ERROR ", error);
        reject(error);
      });
    });
  };

  var createQuery = function createQuery(opts) {
    var _callbacks$current6, _callbacks$current8;

    console.log("OPTS ", opts);

    if ((_callbacks$current6 = callbacks.current) !== null && _callbacks$current6 !== void 0 && _callbacks$current6.sandbox) {
      //"{\"s3::date\":{\"=\":\"2022-08-01\"}}"
      //const filter = stringify(opts.filter);
      var filter = opts !== null && opts !== void 0 && opts.filter ? utils.stringify(opts.filter) : "";
      var connectorFunction = Object.assign({}, opts);
      connectorFunction.filter = filter;
      callbacks.current["sandbox"][0](_rollupPluginBabelHelpers.defineProperty({}, connectorFunction.name, connectorFunction));
    }

    opts.name.split("/");
    var queryFields = [];

    if (opts.fields && opts.fieldsList) {
      queryFields = opts.fields.split(",");
      console.log(queryFields, opts.fieldsList);
      var invField = "";

      if (queryFields.some(function (k) {
        invField = k;
        return opts.fieldsList.indexOf(k) === -1;
      })) {
        var _callbacks$current7;

        if ((_callbacks$current7 = callbacks.current) !== null && _callbacks$current7 !== void 0 && _callbacks$current7[sandbox]) {
          callbacks.current["sandbox"][0]({
            fieldsError: {
              fieldsList: fieldsList,
              invalidField: invField
            }
          });
        } //throw new Error("INVALID_FIELD (" + invField + ")");


        return Promise.reject("INVALID_FIELD (" + invField + ")");
      }
    }

    if ((_callbacks$current8 = callbacks.current) !== null && _callbacks$current8 !== void 0 && _callbacks$current8.sandbox) {
      callbacks.current["sandbox"][0]({
        queryRequest: {
          appID: opts.appId,
          fields: queryFields,
          filter: opts !== null && opts !== void 0 && opts.filter ? queryBuilder.buildProviderFilter(opts.filter) : "",
          next: opts.next
        }
      });
    }

    return new Promise(function (resolve, reject) {
      CLIENT.current.user.query({
        query: gql__default["default"](opts.query),
        variables: {
          input: {
            //bucket: S3Bucket,
            //key: S3Key,
            dataconnector: opts.name,
            userId: currentUser.uuid,
            fields: queryFields,
            filter: opts !== null && opts !== void 0 && opts.filter ? queryBuilder.buildProviderFilter(opts.filter) : "",
            next: opts.next,
            appId: opts.appId,
            execId: utils.shortId(),
            stage: providerContext.current.init.stage
          }
        }
      }).then(function (res) {
        var _res$data;

        console.log("RES ", res);

        if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.getDataObject) {
          var _callbacks$current9;

          var s3Object = JSON.parse(res.data.getDataObject.result);

          if ((_callbacks$current9 = callbacks.current) !== null && _callbacks$current9 !== void 0 && _callbacks$current9.sandbox) {
            callbacks.current["sandbox"][0]({
              queryResult: {
                data: {
                  getDataObject: s3Object
                }
              }
            });
          }

          resolve({
            data: {
              getDataObject: s3Object
            }
          });
        } else {
          var _callbacks$current10;

          console.log("NOT S3 DATA OBJECT");
          var key = Object.keys(res.data)[0];
          var dataObject = JSON.parse(res.data[key].result);

          if ((_callbacks$current10 = callbacks.current) !== null && _callbacks$current10 !== void 0 && _callbacks$current10.sandbox) {
            callbacks.current["sandbox"][0]({
              queryResult: {
                data: _rollupPluginBabelHelpers.defineProperty({}, key, dataObject)
              }
            });
          }

          resolve({
            data: _rollupPluginBabelHelpers.defineProperty({}, key, dataObject)
          });
        }
      })["catch"](function (error) {
        var _callbacks$current11;

        if ((_callbacks$current11 = callbacks.current) !== null && _callbacks$current11 !== void 0 && _callbacks$current11.sandbox) {
          callbacks.current["sandbox"][0]({
            queryError: JSON.stringify(error)
          });
        }

        console.log("QUERY ERROR ", error);
        reject(error);
      });
    });
  };

  var registerDataConnector = React.useCallback(function (appID, modules) {
    if (modules.length > 0) {
      API.current[appID] = {};
      modules.forEach(function (module, mi) {
        var _callbacks$current12;

        var moduleName = module.getModuleName();
        var functionList = module.getInfo();

        if ((_callbacks$current12 = callbacks.current) !== null && _callbacks$current12 !== void 0 && _callbacks$current12.sandbox) {
          callbacks.current["sandbox"][0]({
            registerConnector: moduleName
          }); //callbacks.current[appID][callBackIndex]({ error: err });
        }

        var fn = {}; //const subscriptionList = module.getSubscriptions() || [];

        console.log("LIST ", _rollupPluginBabelHelpers["typeof"](functionList), functionList);
        functionList.forEach(function (q) {
          console.log("REGISTER new ", q);

          if (q.startsWith("query")) {
            fn[q] = function (_ref2) {
              var _callbacks$current13;

              var fields = _ref2.fields,
                  filter = _ref2.filter,
                  next = _ref2.next;
              console.log("INIT ", providerContext.current.init);
              var stage = providerContext.current.init.stage;
              var fieldsList = [];

              if (typeof module.getFields !== "undefined") {
                fieldsList = module.getFields(q);
              } //const executionID = short.generate();


              if ((_callbacks$current13 = callbacks.current) !== null && _callbacks$current13 !== void 0 && _callbacks$current13.sandbox) {
                callbacks.current["sandbox"][0]({
                  connector: moduleName + "/" + q
                });
              }

              return module[q]({
                stage: stage,
                appID: appID,
                name: moduleName + "/" + q,
                createQuery: createQuery,
                fields: fields,
                filter: filter,
                next: next,
                fieldsList: fieldsList,
                uuid: currentUser.uuid
              });
            };
          } else if (q.startsWith("subscribe")) {
            fn[q] = function (_ref3) {
              var _callbacks$current14;

              var variables = _ref3.variables;
              console.log("INIT MUTATION", providerContext.current.init);
              var stage = providerContext.current.init.stage; //const executionID = short.generate();

              if ((_callbacks$current14 = callbacks.current) !== null && _callbacks$current14 !== void 0 && _callbacks$current14.sandbox) {
                callbacks.current["sandbox"][0]({
                  connector: moduleName + "/" + q
                });
              }

              return module[q]({
                stage: stage,
                appID: appID,
                name: moduleName + "/" + q,
                createSubscription: createSubscription,
                uuid: currentUser.uuid,
                variables: variables
              });
            };
          } else if (q.startsWith("mutation")) {
            fn[q] = function (_ref4) {
              var _callbacks$current15;

              var variables = _ref4.variables;
              console.log("INIT MUTATION", providerContext.current.init);
              var stage = providerContext.current.init.stage; //const executionID = short.generate();

              if ((_callbacks$current15 = callbacks.current) !== null && _callbacks$current15 !== void 0 && _callbacks$current15.sandbox) {
                callbacks.current["sandbox"][0]({
                  connector: moduleName + "/" + q
                });
              }

              return module[q]({
                stage: stage,
                appID: appID,
                name: moduleName + "/" + q,
                createMutation: createMutation,
                uuid: currentUser.uuid,
                callbacks: getCallbacks,
                variables: variables
              });
            };
          } else {
            throw new Error('Oh no!');
          }
        }); //console.log(subscriptionList);
        //console.log(providerContext.current.init);

        API.current[appID][moduleName] = fn;
      }); //console.log("HOOKS", appSubscriptions);
    }
  }, []);
  var registerClient = React.useCallback(function (client) {
    CLIENT.current["user"] = client[0];
    CLIENT.current["prifina"] = client[1];
    CLIENT.current["s3"] = client[2];
  }, []);
  var onUpdate = React.useCallback(function (appID, fn) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "WIDGET";
    console.log("UPDATE SET ", appID, callbacks);

    if (typeof appID !== "string") {
      throw new Error("onUpdate, appID is not string");
    }

    var updateID = utils.shortId();

    if (callbacks.current) {
      var _providerContext$curr, _providerContext$curr2, _callbacks$current16; // multiple apps/widgets active...


      if ((_providerContext$curr = providerContext.current.init.apps) !== null && _providerContext$curr !== void 0 && _providerContext$curr[appID]) {
        providerContext.current.init.apps[appID].push(updateID);
      } else {
        providerContext.current.init.apps[appID] = [updateID];
      }

      if ((_providerContext$curr2 = providerContext.current.init.users) !== null && _providerContext$curr2 !== void 0 && _providerContext$curr2[currentUser.uuid]) {
        providerContext.current.init.users[currentUser.uuid] = "";
      }

      providerContext.current.init.users[currentUser.uuid] = activeApp;
      if (Object.keys(callbacks.current).length === 0) callbacks.current = {};

      if ((_callbacks$current16 = callbacks.current) !== null && _callbacks$current16 !== void 0 && _callbacks$current16[appID]) {
        callbacks.current[appID].push(fn);
      } else if (type === "WIDGET") {
        var _callbacks$current17;

        if (!((_callbacks$current17 = callbacks.current) !== null && _callbacks$current17 !== void 0 && _callbacks$current17[appID])) callbacks.current[appID] = [];
        callbacks.current[appID].push(fn);
      } else {
        callbacks.current[appID] = fn;
      }

      console.log("UPDATE SET ", callbacks.current);
      return updateID;
    }
  }, []);
  var getAppSubscriptions = React.useCallback(function () {
    //console.log("GET CALLBACk ", data);
    return appSubscriptions.current;
  }, []);
  var getCallbacks = React.useCallback(function () {
    //console.log("GET CALLBACk ", data);
    return callbacks.current;
  }, []);
  var removeCallbacks = React.useCallback(function () {
    callbacks.current = {};
    return true;
  }, []);
  var deleteCallback = React.useCallback(function (appID, index) {
    var currentCount = callbacks.current[appID].length;

    if (currentCount > 1) {
      callbacks.current[appID].splice(index, 1);
    } else {
      delete callbacks.current[appID];
    }

    return true;
  }, []);
  var getAPI = React.useCallback(function () {
    return API.current;
  }, []);
  var getLocalization = React.useCallback(function () {
    var appLocalization = JSON.parse(localStorage.getItem("PrifinaAppLocalization"));

    if (appLocalization === null) {
      appLocalization = {
        calendar: "gregory",
        country: "FI",
        day: "2-digit",
        desktop: true,
        language: "en-US,en;q=0.9",
        locale: "en-GB",
        mobile: false,
        month: "2-digit",
        numberingSystem: "latn",
        smarttv: false,
        tablet: false,
        timeZone: "Europe/Helsinki",
        timeZoneOffset: -120,
        year: "numeric"
      };
    }

    return appLocalization;
  }, []);
  providerContext.current = {
    stage: stage,
    check: check,
    onUpdate: onUpdate,
    getAppSubscriptions: getAppSubscriptions,
    getCallbacks: getCallbacks,
    removeCallbacks: removeCallbacks,
    deleteCallback: deleteCallback,
    currentUser: currentUser,
    getLocalization: getLocalization,
    registerClient: registerClient,
    registerDataConnector: registerDataConnector,
    API: API.current
  };
  /*
    providerContext.current = {
      
      activeRole,
      setSettings,
      getSettings,
      
      subscriptionTest,
      unSubscribe,
      Prifina,
      registerRemoteClient,
      API: API.current,
     
    };
  */

  if (typeof providerContext.current.init === "undefined") {
    providerContext.current.init = {
      stage: stage,
      apps: {},
      users: {}
    };
  } //console.log("Prifina ", providerContext);


  if (!children) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement(Context.Provider, {
    value: providerContext
  }, children);
};
/* Hook */
// ==============================


var usePrifina = function usePrifina() {
  // console.log("CONTEXT ",PrifinaContext);
  var prifinaContext = React.useContext(PrifinaContext); // console.log("CONTEXT2 ",prifinaContext);

  var prifina = React.useMemo(function () {
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};
/* @component */
//export default PrifinaContextProvider;


exports.PrifinaContext = PrifinaContext;
exports.PrifinaContextProvider = PrifinaContextProvider;
exports.usePrifina = usePrifina;
