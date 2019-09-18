//XPath conts-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//
const usernameField = `//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField`
const passwordField = `//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeSecureTextField`
const errorMessage = '//XCUIElementTypeStaticText[@name="Invalid username or password. Please try again."]'
const greetingBar = '//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeButton[1]'
const scrollLocator = '//UIScrollview'
const warningBox = '//XCUIElementTypeStaticText[@name="*"]'

/*let e2eMsisdn
  switch (backendEnv) {
    case 'SUP02':
      e2eMsisdn = testData.SUP02.MyVFPAYM.msisdn
      break;
    case 'e7':
      e2eMsisdn = testData.e7.MyVFPAYM.msisdn
      break;
    case 'e4':
      e2eMsisdn = testData.e4.MyVFPAYM.msisdn
      break;
  }*/
let testData = {
    "MyVFPAYM": {
      "msisdn": 447389841586,
      "username": "SANCHIT02",
      "password": "testing1"
    },
    "MyVFMBB": {
      "msisdn": 447386018150,
      "username": "AUT7000336884",
      "password": "testing1"
    },
    "MyVFHBB": {
      "msisdn": null,
      "username": null,
      "password": null
    },
    "server": '~DX-INT',
    "eCareUrl": '~tcc3-'
  }
  
let e2eMsisdn = testData.MyVFPAYM.msisdn

let genPw = 'testing1'

  const waitTimeout = 60
  const actualNum = testData.MyVFPAYM.msisdn.toString().replace('44', '0')

  module.exports = {
      usernameField,
      passwordField,
      errorMessage,
      greetingBar,
      scrollLocator,
      actualNum,
      e2eMsisdn,
      testData,
      waitTimeout,
      warningBox,
      genPw
  }