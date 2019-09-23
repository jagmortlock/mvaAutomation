const homedir = require('os').homedir();
const path = require('path')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: path.resolve(homedir, '/Users/jamesmortlock/Sites/mva/mvaAutomation/mva10/VFUK-iOS.app.zip'),
      platform: 'iOS',
      desiredCapabilities: {
        platformName: 'ios',
        appPackage: 'com.VIS.myvodafoneUK',
        deviceName: 'iPhone Xs Max',
        platformVersion: '12.4',
    }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/**/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'mva10'
  }