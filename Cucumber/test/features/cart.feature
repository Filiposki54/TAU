Feature: Dodawanie przedmiotu do koszyka

  Scenario: Dodanie przedmiotu do koszyka
    Given I am logged in to the Sauce Demo website
    When I navigate to the inventory page
    And I add an item to the cart
    Then the item should be added to the cart successfully


