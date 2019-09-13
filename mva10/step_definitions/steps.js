const { waitTimeout,usernameField, passwordField, errorMessage, greetingBar, scrollLocator, testData, actualNum, warningBox } = require('/Users/jamesmortlock/Sites/mva/mvaAutomation/mva10/helperFiles/generic.helper.js')
const { I } = inject();
// Add in your custom step files

Given('I open the app for the first time', () => {
  //From "features/End to end tests/end2end.feature" {"line":8,"column":9}
  I.waitForElement('~ic_warning', waitTimeout)
});

When('I complete the developer options', () => {
  //From "features/End to end tests/end2end.feature" {"line":9,"column":9}
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
});

When('I progress through the Welcome Page', () => {
  //From "features/End to end tests/end2end.feature" {"line":10,"column":9}
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
  //From "features/End to end tests/end2end.feature" {"line":11,"column":9}
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

Given('I am a  {string} user', (userType) => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":14,"column":2}
  const user = testData[userType]
  I.waitForElement('~Go to My Vodafone', waitTimeout)          
  I.tap('~Developer Settings')
  I.waitForElement('~MSISDN') 
  I.tap('~MSISDN')
  I.tap('~MSISDN')
  I.fillField('XCUIElementTypeTextField', user.msisdn)
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
});

When('I view the dashboard', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":15,"column":3}
  throw new Error('Not implemented yet');
});

Then('I should see the {string} displaying {string} cards horizontally scroll-able', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":16,"column":3}
  throw new Error('Not implemented yet');
});

Then('clicking {string} takes me to {string}', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":17,"column":6}
  throw new Error('Not implemented yet');
});

When('I view the {string}', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":17,"column":10}
  throw new Error('Not implemented yet');
});

Given('I am a {string} user', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":31,"column":7}
  throw new Error('Not implemented yet');
});

When('I view the {string}', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":32,"column":10}
  throw new Error('Not implemented yet');
});

Given('I am a {string} user', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":44,"column":7}
  throw new Error('Not implemented yet');
});

When('I view the {string}', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":45,"column":10}
  throw new Error('Not implemented yet');
});

Given('I am a {string} user', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":57,"column":7}
  throw new Error('Not implemented yet');
});

When('I view the {string}', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":58,"column":10}
  throw new Error('Not implemented yet');
});

Given('I am a {string} user', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":70,"column":10}
  throw new Error('Not implemented yet');
});

When('action I am on the dashboard', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":71,"column":10}
  throw new Error('Not implemented yet');
});

Then('I should not see {string}', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":72,"column":10}
  throw new Error('Not implemented yet');
});

Given('I am a {string} user', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":75,"column":10}
  throw new Error('Not implemented yet');
});

When('action I am on the dashboard', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":76,"column":10}
  throw new Error('Not implemented yet');
});

Then('I should not see {string}', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":77,"column":10}
  throw new Error('Not implemented yet');
});

Given('I am a {string} user', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":80,"column":10}
  throw new Error('Not implemented yet');
});

When('action I am on the dashboard', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":81,"column":10}
  throw new Error('Not implemented yet');
});

Given('I am a {string} user', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":93,"column":10}
  throw new Error('Not implemented yet');
});

When('action I am on the dashboard', () => {
  // From "features/10.0/Sprint 2/85360AllowancesTileVariations.feature" {"line":94,"column":10}
  throw new Error('Not implemented yet');
});
