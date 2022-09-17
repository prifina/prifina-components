/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const fitbitPkg = require("./packages/fitbit/package.json")
const ouraPkg = require("./packages/oura/package.json")
const googleTimelinePkg = require("./packages/google-timeline/package.json")
const sensorPkg = require("./packages/sensor-bno055/package.json")
const garminPkg = require("./packages/garmin/package.json")
const twentyThreeAndMePkg = require("./packages/23andme/package.json")
const ancestryPkg = require("./packages/ancestry/package.json")
const foursquarePkg = require("./packages/foursquare/package.json")
const homekitPkg = require("./packages/homekit/package.json")
const huaweiPkg = require("./packages/huawei/package.json")
const iosHealthPkg = require("./packages/ios-health/package.json")
const lyftPkg = require("./packages/lyft/package.json")
const movesensePkg = require("./packages/movesense/package.json")
const pelotonPkg = require("./packages/peloton/package.json")
const polarPkg = require("./packages/polar/package.json")
const runkeeperPkg = require("./packages/runkeeper/package.json")
const stravaPkg = require("./packages/strava/package.json")
const twitchPkg = require("./packages/twitch/package.json")
const uberPkg = require("./packages/uber/package.json")
const whoopPkg = require("./packages/whoop/package.json")
const withingsPkg = require("./packages/withings/package.json")







const base = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,
  
    // Stop running tests after `n` failures
    // bail: 0,
  
    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "/private/var/folders/fw/9n6q8vln3h71gwnk3yg9lqr00000gn/T/jest_dx",
  
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,
  
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
    //collectCoverageFrom: ["beta/user/user-s3/getS3Object/handler.js"],
    //collectCoverageFrom: [
    //  "beta/user/**/*.{js,jsx,ts,tsx}",
    //  "!beta/user/**/aws.js",
    //],
    //"src/**/*.{js,jsx,ts,tsx}"
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
  
    // An array of regexp pattern strings used to skip coverage collection
    // coveragePathIgnorePatterns: [
    //   "/node_modules/"
    // ],
    //**/__tests__/**/*.[jt]s?(x)",
    coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/"],
    // Indicates which provider should be used to instrument code for coverage
    //coverageProvider: "v8",  // istanbul ignore not working..
    coverageProvider: "babel",
    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],
  
    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,
  
    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,
  
    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,
  
    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],
  
    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,
  
    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,
  
    // A set of global variables that need to be available in all test environments
    // globals: {},
  
    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",
  
    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],
    moduleDirectories: ["node_modules"],
  
    moduleFileExtensions: ["js", "mjs"],
    // An array of file extensions your modules use
    // moduleFileExtensions: [
    //   "js",
    //   "jsx",
    //   "ts",
    //   "tsx",
    //   "json",
    //   "node"
    // ],
  
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // moduleNameMapper: {},
    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    // modulePathIgnorePatterns: [],
  
    // Activates notifications for test results
    // notify: false,
  
    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",
  
    // A preset that is used as a base for Jest's configuration
    // preset: undefined,
  
    // Run tests from one or more projects
    // projects: undefined,
  
    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,
  
    // Automatically reset mock state between every test
    // resetMocks: false,
  
    // Reset the module registry before running each individual test
    // resetModules: false,
  
    // A path to a custom resolver
    // resolver: undefined,
  
    // Automatically restore mock state between every test
    // restoreMocks: false,
  
    // The root directory that Jest should scan for tests and modules within
    //rootDir: "__tests__",
  
    // A list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],
  
    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",
  
    // The paths to modules that run some code to configure or set up the testing environment before each test
    // setupFiles: [],
  
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    // setupFilesAfterEnv: [],
  
    // The number of seconds after which a test is considered as slow and reported as such in the results.
    // slowTestThreshold: 5,
  
    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],
  
    // The test environment that will be used for testing
    // testEnvironment: "jest-environment-node",
  
    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},
  
    // Adds a location field to test results
    // testLocationInResults: false,
  
    // The glob patterns Jest uses to detect test files
    testMatch: [
      "**/__tests__/*.test.js",
      "**/__tests__/*.test.mjs",
      //"**/__tests__/**/*.[jt]s?(x)",
      //   "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
  
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ["/node_modules/"],
  
    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],
  
    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,
  
    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",
  
    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    // testURL: "http://localhost",
  
    // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // timers: "real",
  
    // A map from regular expressions to paths to transformers
    // transform: undefined,
  
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.mjs$": "babel-jest",
    },
  
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "/node_modules/",
    //   "\\.pnp\\.[^\\/]+$"
    // ],
  
    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,
  
    // Indicates whether each individual test should be reported during the run
    // verbose: undefined,
  
    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],
  
    // Whether to use watchman for file crawling
    // watchman: true,
  };
  

module.exports = {
    ...base,
    projects: [{
        ...base,
  
        displayName: ouraPkg.name,
  
        testMatch: [
          "<rootDir>/packages/oura/**/__tests__/*.test.js",
          "<rootDir>/packages/oura/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: fitbitPkg.name,
  
        testMatch: [
          "<rootDir>/packages/fitbit/**/__tests__/*.test.js",
          "<rootDir>/packages/fitbit/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: garminPkg.name,
  
        testMatch: [
          "<rootDir>/packages/garmin/**/__tests__/*.test.js",
          "<rootDir>/packages/garmin/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: googleTimelinePkg.name,
  
        testMatch: [
          "<rootDir>/packages/google-timeline/**/__tests__/*.test.js",
          "<rootDir>/packages/google-timeline/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: sensorPkg.name,
  
        testMatch: [
          "<rootDir>/packages/sensor-bno055/**/__tests__/*.test.js",
          "<rootDir>/packages/sensor-bno055/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: twentyThreeAndMePkg.name,
  
        testMatch: [
          "<rootDir>/packages/23andme/**/__tests__/*.test.js",
          "<rootDir>/packages/23andme/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: ancestryPkg.name,
  
        testMatch: [
          "<rootDir>/packages/ancestry/**/__tests__/*.test.js",
          "<rootDir>/packages/ancestry/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: foursquarePkg.name,
  
        testMatch: [
          "<rootDir>/packages/foursquare/**/__tests__/*.test.js",
          "<rootDir>/packages/foursquare/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: huaweiPkg.name,
  
        testMatch: [
          "<rootDir>/packages/huawei/**/__tests__/*.test.js",
          "<rootDir>/packages/huawei/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: homekitPkg.name,
  
        testMatch: [
          "<rootDir>/packages/homekit/**/__tests__/*.test.js",
          "<rootDir>/packages/homekit/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: iosHealthPkg.name,
  
        testMatch: [
          "<rootDir>/packages/ios-health/**/__tests__/*.test.js",
          "<rootDir>/packages/ios-health/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: lyftPkg.name,
  
        testMatch: [
          "<rootDir>/packages/lyft/**/__tests__/*.test.js",
          "<rootDir>/packages/lyft/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: movesensePkg.name,
  
        testMatch: [
          "<rootDir>/packages/movesense/**/__tests__/*.test.js",
          "<rootDir>/packages/movesense/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: pelotonPkg.name,
  
        testMatch: [
          "<rootDir>/packages/peloton/**/__tests__/*.test.js",
          "<rootDir>/packages/peloton/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: polarPkg.name,
  
        testMatch: [
          "<rootDir>/packages/polar/**/__tests__/*.test.js",
          "<rootDir>/packages/polar/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: runkeeperPkg.name,
  
        testMatch: [
          "<rootDir>/packages/runkeeper/**/__tests__/*.test.js",
          "<rootDir>/packages/runkeeper/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: stravaPkg.name,
  
        testMatch: [
          "<rootDir>/packages/strava/**/__tests__/*.test.js",
          "<rootDir>/packages/strava/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: twitchPkg.name,
  
        testMatch: [
          "<rootDir>/packages/twitch/**/__tests__/*.test.js",
          "<rootDir>/packages/twitch/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: uberPkg.name,
  
        testMatch: [
          "<rootDir>/packages/uber/**/__tests__/*.test.js",
          "<rootDir>/packages/uber/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: whoopPkg.name,
  
        testMatch: [
          "<rootDir>/packages/whoop/**/__tests__/*.test.js",
          "<rootDir>/packages/whoop/**/__tests__/*.test.mjs",
        ],
  
      }, {
        ...base,
  
        displayName: withingsPkg.name,
  
        testMatch: [
          "<rootDir>/packages/withings/**/__tests__/*.test.js",
          "<rootDir>/packages/withings/**/__tests__/*.test.mjs",
        ],
  
      }]
}