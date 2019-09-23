const { waitTimeout,usernameField, passwordField, errorMessage, greetingBar, scrollLocator, e2eMsisdn, backendEnv, testData, actualNum, warningBox } = require('/Users/jamesmortlock/Sites/mva/mvaAutomation/mva10/helperFiles/generic.helper.js')
const { I } = inject();
// Add in your custom step files

//-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~End 2 End test steps-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~\\
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
  I.waitForElement('XCUIElementTypeTextField')
  I.fillField('XCUIElementTypeTextField', e2eMsisdn)
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
  I.waitForElement('~~Welcome_footer')
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
  I.waitForElement('~Welcome_footer', waitTimeout)
  I.seeInField('~Welcome_footer', "You can also register if you haven't", "been set up with an account yet.")
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
//-~-~-~-~-~-~-~-~-~--~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~End-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~\\
let userSubTyp

Given('I am a {string} user', async (userStr) => {
  //Transform user type from scenario to reference in testData object
  userSubTyp = testData[userType][subType]
  const userType = userStr.replace(/\s/g, '')
  const user = testData[userType]
  //Completing dev settings
  I.waitForElement('~ic_error', waitTimeout)
  I.waitForElement('~Go to My Vodafone', waitTimeout)          
  I.tap('~Developer Settings')
  I.waitForElement('~MSISDN') 
  I.tap('~MSISDN')
  I.waitForElement('XCUIElementTypeTextField', waitTimeout)
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
  //Read welcome page and confirm continuing to app
  I.waitForElement('~Welcome_to_My_Vodafone_Title', waitTimeout)
  I.waitForElement('~Welcome_YourAccount')
  I.waitForElement('~Get started', waitTimeout)
  I.waitForElement('~Welcome_footer')
  I.tap('~Get started')
  //Verify Opt In Page
  I.waitForElement('//XCUIElementTypeStaticText[@name="Enhance your Vodafone experience"]', waitTimeout)
  I.waitForElement('~Before you get started, please grant us the permissions below in order to get the best possible app experience.', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Contact Book"]', waitTimeout)
  //I.waitForElement('//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeTextView', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Notifications"]', waitTimeout)
  //I.waitForElement('//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeTextView', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Location"]', waitTimeout)
  I.waitForElement('~Privacy')
  I.tap('~Privacy')
  I.tap('~Privacy')
  //I.swipe(locate(scrollLocator), 0, 100, 1000)
  I.waitForVisible('~Continue')
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
  I.waitForElement('~Welcome_footer', waitTimeout)
  I.seeInField('~Welcome_footer', "You can also register if you haven't", "been set up with an account yet.")
  I.tap('~No thanks')
  I.waitForElement('~vodafoneLogo red', waitTimeout)
});

When('I view the dashboard', () => {
  I.waitForElement(greetingBar, waitTimeout)
  I.waitForElement('~Pull down to refresh', waitTimeout)
  I.swipe(locate(scrollLocator), 0, 100, 1000)
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
  I.swipe(locate(scrollLocator), 0, 100, 1000)
});

Then('I should see the main tile displaying {string} allowances cards horizontally scroll-able', async () => {
  I.see('~wdgDashboardAllowences')
  let allowCardTitle = await I.grabTextFrom('~wdgDashboardAllowences')
  console.log(allowCardTitle)
  I.swipeRight('~wdgDashboardAllowences')
  I.see('~wdgDashboardAllowences')
  allowCardTitle = await I.grabTextFrom('~wdgDashboardAllowences')
  console.log(allowCardTitle)
  I.swipeRight('~wdgDashboardAllowences')
  I.see('~wdgDashboardAllowences')
  allowCardTitle = await I.grabTextFrom('~wdgDashboardAllowences')
  console.log(allowCardTitle)
  I.swipeRight('~wdgDashboardAllowences')
  I.see('~wdgDashboardAllowences')
  allowCardTitle = await I.grabTextFrom('~wdgDashboardAllowences')
  console.log(allowCardTitle)
  I.swipeLeft('~wdgDashboardAllowences')
  I.swipeLeft('~wdgDashboardAllowences')
  I.swipeLeft('~wdgDashboardAllowences')
  I.swipeLeft('~wdgDashboardAllowences')
  throw console.warn("Allowance not checked in test, to be implemented");
});

Then('clicking allowances tile takes me to Usage tab', async () => {
  I.tap('~wdgDashboardAllowences')
  I.seeElement('~subs-overlay-redworld-bg')
  I.seeElement('~imgSubscriptionIcon')
  I.seeElement('~txtSubscriptionAccountType')
  let subType = await I.grabTextFrom('~txtSubscriptionAccountType')
  I.see(actualNum)
  I.see(`~${user.subType}`)
  console.log(`${subType} vs ${user.subType}`)
  I.see('~txtSubscriptionCreditSpend')
  I.see('~txtSubscriptionCreditSpend')
  I.see('~txtSubscriptionAdditionalLabel')
  I.see('~txtSubscriptionPeriod')
  I.see('~Plan')
  I.see('~Usage')
  I.see('~Charges')
  I.see('~Extras')
  I.see('~Upgrade')
});

Then('I should not see {string}', () => {
  throw new Error('Not implemented yet');
});

When('I pull down to refresh', () => {
  
  throw new Error('Not implemented yet');
});

Then('I should see the loading status bar', () => {
  
  throw new Error('Not implemented yet');
});

Then('the last updated time {string}', () => {
  
  throw new Error('Not implemented yet');
});

Then('the loading status bar should disappear', () => {
  
  throw new Error('Not implemented yet');
});

Then('I should see {string}', () => {
  
  throw new Error('Not implemented yet');
});

Then('And I should see {string}', (passStr) => {
  I.see(`~${passStr}`)
  throw new Error('Not implemented yet');
});

Then('the loading status bar should not disappear', () => {
  I.see('~swipe-down')
});

Given('I open the app in the {string}', (timeOfDay) => {
  const time = (timeOfDay) => 
  {
    let randomTime
    switch (timeOfDay)
    {
      case 'morning':
        randomTime = Math.floor(Math.random() * (11 - 1 + 1) + 1)
        randomTime.toString()
        randomTime += ":00"
        break
      case 'afternoon':
        randomTime = Math.floor(Math.random() * (19 - 12 + 1) + 12)
        randomTime.toString()
        randomTime += ":00"
        break
      case 'evening':
        randomTime = Math.floor(Math.random() * (24 - 20 + 1) + 20)
        randomTime.toString()
        randomTime += ":00"
        break
    }
  }
  let timeSett = time(timeOfDay)
  I.setSettings({time: timeSett})
  I.waitForElement('~ic_warning', waitTimeout)
  //Completing dev settings
  I.waitForElement('~ic_error', waitTimeout)
  I.waitForElement('~Go to My Vodafone', waitTimeout)          
  I.tap('~Developer Settings')
  I.waitForElement('~MSISDN') 
  I.tap('~MSISDN')
  I.waitForElement('XCUIElementTypeTextField', waitTimeout)
  I.fillField('XCUIElementTypeTextField', testData.MyVFPAYM.msisdn)
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
  //Read welcome page and confirm continuing to app
  I.waitForElement('~Welcome_to_My_Vodafone_Title', waitTimeout)
  I.waitForElement('~Welcome_YourAccount')
  I.waitForElement('~Get started', waitTimeout)
  I.waitForElement('~Welcome_footer')
  I.tap('~Get started')
  //Verify Opt In Page
  I.waitForElement('//XCUIElementTypeStaticText[@name="Enhance your Vodafone experience"]', waitTimeout)
  I.waitForElement('~Before you get started, please grant us the permissions below in order to get the best possible app experience.', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Contact Book"]', waitTimeout)
  //I.waitForElement('//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeTextView', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Notifications"]', waitTimeout)
  //I.waitForElement('//XCUIElementTypeApplication[@name="My Vodafone"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeTextView', waitTimeout)
  I.waitForElement('//XCUIElementTypeStaticText[@name="Location"]', waitTimeout)
  I.waitForElement('~Privacy')
  I.tap('~Privacy')
  I.tap('~Privacy')
  //I.swipe(locate(scrollLocator), 0, 100, 1000)
  I.waitForVisible('~Continue')
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
  I.waitForElement('~Welcome_footer', waitTimeout)
  I.seeInField('~Welcome_footer', "You can also register if you haven't", "been set up with an account yet.")
  I.tap('~No thanks')
  I.waitForElement('~vodafoneLogo red', waitTimeout)
  throw new Error('Not implemented yet');
});
