
@Sprint2 @85360 

Feature: Allowances tile variations
As a MyVF PAYM user, 
I want to view allowances tiles on the dashboard, 
so that I can track my allowances usage.

   #User Story
   #https://vfuk-digital.visualstudio.com/Digital/_workitems/edit/85360
   # Please provide sizing for allowances with the 'view all allowances' card and without the 'view all allowances' card so we can determine whether to include in the sprint or wait for a later release (if we wait then we'll have a new card specifically for the 'view all allowances' card.
   # Designs
   # https://vodafoneuk.invisionapp.com/d/main#/projects/prototypes/17306434

   Scenario: Scenario 1
      Given I am a "MyVF PAYM" user
         When I view the dashboard
         Then I should see the main tile displaying "MyVF PAYM" allowances cards horizontally scroll-able
            And clicking allowances tile takes me to Usage tab

               # Allowance cards will show the aggregated domestic data, domestic minutes, domestic SMS, and international mins volume
               # Each allowance card should show the below info:
               # Icon: allowances icon for each allowance type (Data, Mins, SMS, etc.)
               # First name: "phone book first name"+ current allowance name (data, minutes, etc,) based on the allowance card he/she is currently on OR if no contact book available OR contact name is too long then show no name and just show current allowance name
               # Consumption: remaining allowance out of total
               # Progress bar: indicating the consumption percentage OR full bar in case of unlimited allowances
               # Footer: Expiry/renewal date in case aggregated allowances all have the same expiry date  OR  “See your breakdown” text in case of different expiry dates
               # Pips: indicated the number of cards, the card the user is currently on, and that cards are horizontally scroll-able

   Scenario: Scenario 2
      Given I am a "MyVF MBB" user
         When I view the dashboard
         Then I should see the main tile displaying "MyVF MBB" allowances cards horizontally scroll-able
            And clicking allowances tile takes me to Usage tab

               # Icon: Data allowances icon
               # First name: current allowance name
               # Consumption: remaining allowance out of total
               # Progress bar: indicating the consumption percentage OR full bar in case of unlimited allowances
               # Footer: Expiry/renewal date in case aggregated allowances all have the same expiry date  OR  “See your breakdown” text in case of different expiry dates
               # Pips: indicated the number of cards, the card the user is currently on, and that cards are horizontally scroll-able

# NO TEST DATA
   # Scenario: Scenario 3
   #    Given I am a "MyVF HBB" user
   #       When I view the dashboard
   #       Then I should see the main tile displaying "MyVF HBB" allowances cards horizontally scroll-able
   #          And clicking allowances tile takes me to Usage tab

   #             # Icon: Data allowances icon
   #             # First name: current allowance name
   #             # Consumption: remaining allowance out of total
   #             # Progress bar: indicating the consumption percentage OR full bar in case of unlimited allowances
   #             # Footer: Expiry/renewal date in case aggregated allowances all have the same expiry date  OR  “See your breakdown” text in case of different expiry dates
   #             # Pips: indicated the number of cards, the card the user is currently on, and that cards are horizontally scroll-able

   Scenario: Scenario 4
      Given I am a "MyVF PAYG Simply withAllow" user
         When I view the dashboard
         Then I should see the main tile displaying "MyVF PAYG Simply withAllow" allowances cards horizontally scroll-able
            And clicking allowances tile takes me to Usage tab

               # Icon: allowances icon for each allowance type (Data, Mins, SMS, etc.)
               # First name: "phone book first name"+ current allowance name (data, minutes, etc,) based on the allowance card he/she is currently on OR if no contact book available OR contact name is too long then show no name and just show current allowance name
               # Consumption: remaining allowance out of total
               # Progress bar: indicating the consumption percentage OR full bar in case of unlimited allowances
               # Footer: Expiry/renewal date in case aggregated allowances all have the same expiry date  OR  “See your breakdown” text in case of different expiry dates
               # Pips: indicated the number of cards, the card the user is currently on, and that cards are horizontally scroll-able
   
   Scenario: Scenario 5
      Given I am a "MyVF PAYG Simply noAllow" user
         When  I view the dashboard
         Then I should not see "allowances tile"

   Scenario: Scenario 6
      Given I am a "MyVF PAYG 1 <£1 spend" user
         When I view the dashboard
         Then I should not see "allowances tile"
   
   Scenario: Scenario 7
      Given I am a "MyVF PAYG 1 >£1 spend" user
         When I view the dashboard
         Then I should see the main tile displaying "MyVF PAYG 1 >£1 spend" allowances cards horizontally scroll-able
            And clicking allowances tile takes me to Usage tab

               # Icon: allowances icon for each allowance type (Data, Mins, SMS, etc.)
               # First name: "phone book first name"+ current allowance name (data, minutes, etc,) based on the allowance card he/she is currently on OR if no contact book available OR contact name is too long then show no name and just show current allowance name
               # Consumption: remaining allowance out of total
               # Progress bar: indicating the consumption percentage OR full bar in case of unlimited allowances
               # Footer: Expiry/renewal date in case aggregated allowances all have the same expiry date  OR  “See your breakdown” text in case of different expiry dates
               # Pips: indicated the number of cards, the card the user is currently on, and that cards are horizontally scroll-able

   Scenario: Scenario 8
      Given I am a "MyVF PAYG BVB" user
         When I view the dashboard
         Then I should see the main tile displaying "MyVF PAYG BVB" allowances cards horizontally scroll-able
            And clicking allowances tile takes me to Usage tab

               # Icon: allowances icon for each allowance type (Data, Mins, SMS, etc.)
               # First name: "phone book first name"+ current allowance name (data, minutes, etc,) based on the allowance card he/she is currently on OR if no contact book available OR contact name is too long then show no name and just show current allowance name
               # Consumption: remaining allowance out of total
               # Progress bar: indicating the consumption percentage OR full bar in case of unlimited allowances
               # Footer: Expiry/renewal date in case aggregated allowances all have the same expiry date  OR  “See your breakdown” text in case of different expiry dates
               # Pips: indicated the number of cards, the card the user is currently on, and that cards are horizontally scroll-able