@sprint2 @84882 @Time-dependentsalutation

Feature: Time-dependent salutation
 In order to appropriately greet the user on app load
 As an MVA user
 I want a time depentant greeting when I open the app
 So that that the first expeirence is friendly and targeted
        
        Scenario: Morning greeting
        Given I open the app in the "morning"
        When I view the dashboard
        Then I should see "Good morning"
        
        Scenario: Afternoon greeting
        Given I open the app in the "afternoon"
        When I view the dashboard
        Then I should see "Good Afternoon"

        Scenario: Evening greeting
        Given I open the app in the "evening"
        When I view the dashboard
        Then I should see "Good evening"