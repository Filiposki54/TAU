Feature: Logging out

  Scenario: Logging out
    Given I am logged in to the Sauce Demo website
    When I click on the logout button
    Then I should be logged out successfully
