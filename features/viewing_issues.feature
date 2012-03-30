Feature: Viewing issue
In order to view the issues for a feature
As a user
I want to see them on that feature's page
Background:    
    Given there is a release called "Confluence"
    And that release has a feature:
      | title                | description   |
      | Make it shiny!       | Gradients! Starbursts! Oh my! |
    And that feature has a issue:
      | title                | description   |
      | First Issue          | This is a first issue. |
    And I am on the homepage

  Scenario: Viewing issue for a given feature
    When I follow "Confluence"
    Then I should see "Standards compliance"
    When I follow "Standards compliance"
    Then I should see "First Issue" 
    And I should see "This is a first issue."
    