@end2end
Feature: End to end test
  As a QA
  I want to check the build after a each deployment
  So that I can be confident the application is healthy
      
      Scenario: Launch App - First launch
        Given I open the app for the first time
        When I complete the developer options
        And I progress through the Welcome Page
        Then I should see the landing page
        
      