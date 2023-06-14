Feature: Removing an item from the cart

  Scenario: Removing an item from the cart
    Given I am logged in to the Sauce Demo website
    When I navigate to the cart page
    And I remove an item from the cart
    Then the item should be removed successfully
