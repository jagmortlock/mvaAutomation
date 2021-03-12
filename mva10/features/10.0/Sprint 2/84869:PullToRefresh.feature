@sprint2 @84869
Feature: Pull to refresh
 
 As a MVA 10 user
 I want to refresh my app, via pull too refresh
 So that I can ensure my data is up to date
 
# Last updated date requirements:
# - Time stamp to always come from DAL or MVAX in case of non-balance APIs

# - Time stamp to be associated with (UK) when the user is roaming

# - Time stamp to be displayed in 24 hrs format


Scenario: Successful refresh
 Given I am a "MVA" user
  When I view the dashboard
     And I pull down to refresh
  Then I should see the loading status bar
     And the last updated time "now"
        And the loading status bar should disappear

Scenario: Prevented refresh
 Given I am a "MVA" user
  When I view the dashboard
     And I pull down to refresh
  Then I should see the loading status bar
     And the last updated time "past"
        And the loading status bar should disappear
 

Scenario: Failed refresh
 Given I am a "MVA" user
  When I view the dashboard
     And I pull down to refresh
  Then I should see the loading status bar
     And I should see "warning icon"
        And And I should see "error message"
           And the loading status bar should not disappear




