//XPath conts-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//
const usernameField = `//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField`
const passwordField = `//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeSecureTextField`
const errorMessage = '//XCUIElementTypeStaticText[@name="Invalid username or password. Please try again."]'
const greetingBar = '//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeButton[1]'
const scrollLocator = 'UIScrollview'
//const warningBox = '//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]'
const warningBox = '//XCUIElementTypeStaticText[@name="*"]'
//-~-~-~-~-~-~-~-~Locator debugging...-~-~-~-~-~-~-~-~
// const locator = {id : '~Disable surveys'}
// const locator = {ios : '~Disable surveys'}
// const locator = '#com.VIS.myvodafoneUK:10145/-ios class chain:**/XCUIElementTypeStaticText[@name="Disable surveys"]'
// const locator = 'com.VIS.myvodafoneUK:10145/-ios class chain:**/XCUIElementTypeStaticText[@name="Disable surveys"]'
// const locator = '//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther'
// const locator = locate('//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView/XCUIElementTypeOther')
// const locator = {ios: '//XCUIElementTypeApplication[@name="My Vodafone"]'}
// const locator = '//XCUIElementTypeApplication[@name="My Vodafone"]'
//-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//

const testData = {
  FLN:{
    msisdn: null
  },
  PAYMMPSCTR13:{
    msisdn: 447742024562
  },
  PAYGBVB:{
    msisdn: null
  },
  PAYG1VoV:{
    msisdn: null
  },
  PAYG1XData:{
    msisdn: null
  },
  PAYG1VoV:{
    msisdn: null
  },
    server: "~DX-INT",
    eCareUrl: "~tcc5-"
  
  }

  const waitTimeout = 60
  const actualNum = testData.PAYMMPSCTR13.msisdn.toString().replace('44', '0')

  module.exports = {
      usernameField,
      passwordField,
      errorMessage,
      greetingBar,
      scrollLocator,
      actualNum,
      testData,
      waitTimeout,
      warningBox
  }