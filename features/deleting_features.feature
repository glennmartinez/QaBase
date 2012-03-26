 Feature: Deleting tickets
          In order to remove tickets
          As a user
          I want to press a button and make them disappear
      Background:
        Given there is a release called "Confluence"
        And that release has a feature:
          | title           | description                   |
          |  Make it shiny! | Gradients! Starbursts! Oh my! |
        Given I am on the homepage
        When I follow "Confluence"
        And I follow "Make it shiny!"
      Scenario: Deleting a feature
        When I follow "Delete Feature"
        Then I should see "Feature has been deleted."
        And I should be on the release page for "Confluence"