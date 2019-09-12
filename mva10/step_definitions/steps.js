const { waitTimeout,usernameField, passwordField, errorMessage, greetingBar, scrollLocator, testData, actualNum, warningBox } = require('/Users/jamesmortlock/Sites/mva/mva10/helperFiles/generic.helper.js')
const { I } = inject();
// Add in your custom step files

Given('I open the app for the first time', () => {
  I.waitForElement('~ic_warning', waitTimeout)
});

When('I complete the developer options', () => {
  I.waitForElement('~Go to My Vodafone', waitTimeout)          
  I.tap('~Developer Settings')
  I.waitForElement('~MSISDN') 
  I.tap('~MSISDN')
  I.tap('~MSISDN')
  I.fillField('XCUIElementTypeTextField', testData.PAYMMPSCTR13.msisdn)
  I.tap('~Done')
  I.waitForElement('~Server')
  I.tap('~Server')
  I.waitForElement(testData.server, waitTimeout)
  I.tap(testData.server)
  I.tap('~eCare URL')
  I.tap(testData.eCareUrl)
  I.tap('~Use test token')
  I.tap('~Use hardCode MSISDN')
  I.tap('~Save & Restart')
  // -~-~-~-~-~-~Error Catch (Still in Dev)-~-~-~-~-~-~
  // if(I.waitForElement('You can try again in')){
  //   let devSettingWait = I.grabValueFrom(warningBox)
  //   console.log(devSettingWait)
  //   I.wait(devSettingWait)
  //   I.dontSee('You can try again in')
  // }
});

When('I progress through the Welcome Page', () => {
  //Read welcome page and confirm continuing to app
  I.waitForElement('~Welcome_to_My_Vodafone_Title', waitTimeout)
  I.waitForElement('~Welcome_YourAccount')
  I.waitForElement('~Get started', waitTimeout)
  I.waitForElement('~Welcome_Discimilar')
  I.tap('~Get started')
  //Verify Opt In Page
  I.waitForElement('//XCUIElementTypeStaticText[@name="Enhance your Vodafone experience"]', waitTimeout)
  I.waitForElement('~Before you get started, please grant us the permissions below in order to get the best possible app experience.', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Contact Book"]', waitTimeout)
  I.waitForElement('//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeTextView', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Notifications"]', waitTimeout)
  I.waitForElement('//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeTextView', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Location"]', waitTimeout)
  I.waitForElement('~Privacy')
  I.tap('~Privacy')
  I.tap('~Privacy')
  I.tap('~Continue')
  //Accept access to device setting
  I.waitForElement(`~OK`, waitTimeout)
  I.tap('~OK')
  I.waitForElement(`~Allow`, waitTimeout)
  I.tap('~Allow')
  I.waitForElement(`~Only While Using the App`, waitTimeout)
  I.tap('~Only While Using the App')
  I.waitForElement('~Login_InfoView_LoginBenifits_Label')
  //Log in confirm
  I.waitForElement('//XCUIElementTypeStaticText[@name="Enhance your Vodafone experience"]', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Improve your Vodafone experience by logging in to your account."]', waitTimeout)
  I.waitForElement('~Login_InfoView_LoginBenifits_Label', waitTimeout)
  I.waitForElement('~Log in', waitTimeout)
  I.waitForElement('~No thanks', waitTimeout)
  I.waitForElement('~Welcome_Discimilar', waitTimeout)
  I.seeInField('~Welcome_Discimilar', "You can also register if you haven't", "been set up with an account yet.")
  I.tap('~No thanks')
  I.waitForElement('~vodafoneLogo red', waitTimeout)
});

Then('I should see the landing page', () => {
  I.waitForElement(greetingBar, waitTimeout)
  I.waitForElement('~Pull down to refresh', waitTimeout)
  I.waitForElement('~swipe-down', waitTimeout)
  I.waitForElement('~payM-payG', waitTimeout)
  I.waitForElement('~Pay monthly phone', waitTimeout)
  I.waitForElement(`~${actualNum}`, waitTimeout)
  I.waitForElement('~data-icon', waitTimeout)
  I.waitForElement('~Data', waitTimeout)
  I.waitForElement('~18.0', waitTimeout)
  I.waitForElement('~GB', waitTimeout)
  I.waitForElement('~left of 18.0GB bundle', waitTimeout)
  I.waitForElement('~£69.00', waitTimeout)
  I.waitForElement('~Includes extra charges', waitTimeout)
  I.waitForElement('~From 05 Dec to 04 Jan', waitTimeout)
  I.waitForElement('~data cap OFF', waitTimeout)
  I.waitForElement('~Manage Bars & Extras', waitTimeout)
  I.waitForElement('~Button', waitTimeout)
  I.waitForElement('~My Account', waitTimeout)
  I.waitForElement('~Rewards', waitTimeout)
  I.waitForElement('~topi', waitTimeout)
  I.waitForElement('~Billing', waitTimeout)
  I.waitForElement('~Settings', waitTimeout)
  I.swipeUp('~Manage Bars & Extras')
});
