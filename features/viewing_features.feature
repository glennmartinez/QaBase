Feature: Viewing tickets
In order to view the tickets for a project
As a user
I want to see them on that project's page
Background:
    Given there is a release called "Confluence"
    And that release has a feature:
      | title           | description                   |
      |  Make it shiny! | Gradients! Starbursts! Oh my! |
    And there is a release called "Internet Explorer"
    And that release has a feature:
      | title                | description   |
      | Standards compliance |Isnt a joke. |
    And I am on the homepage

  Scenario: Viewing features for a given release
    When I follow "Confluence"
    Then I should see "Make it shiny!"
    And I should not see "Standards compliance"
    When I follow "Make it shiny!"
    Then I should see "Make it shiny" within "#ticket h2"
    And I should see "Gradients! Starbursts! Oh my!"


    When I follow "QaBase"
    And I follow "Internet Explorer"
    Then I should see "Standards compliance"
    And I should not see "Make it shiny!"
    When I follow "Standards compliance"
    Then I should see "Standards compliance" within "#ticket h2"
    And I should see "Isnt a joke."