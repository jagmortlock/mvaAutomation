//XPath conts-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//
const usernameField = `//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField`
const passwordField = `//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeSecureTextField`
const errorMessage = '//XCUIElementTypeStaticText[@name="Invalid username or password. Please try again."]'
const greetingBar = '//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeButton[1]'
//const scrollLocator = '~scrollView'
//const scrollLocator = '~scrollContentView'
const scrollLocator = '//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView'
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
      "msisdn": 447387922912,
      "username": "DNU_MYVA_7000269442",
      "password": "testing1",
      "subTyp": "Pay monthly"
    },
    "MyVFMBB": {
      "msisdn": 447386018150,
      "username": "AUT7000336884",
      "password": "testing1",
      "subTyp": "Pay monthly"
    },
    "MyVFHBB": {
      "msisdn": null,
      "username": null,
      "password": null,
      "subTyp": "Home broadband"
    },
    "server": '~SIT2',
    "eCareUrl": '~tcc5-'
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