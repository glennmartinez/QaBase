Feature: Creating Issues
In order to create issues for features
As a user
I want to be able to select a feature and do that
Background:
    Given there is a release called "Confluence"
    And that release has a feature:
      | title           | description                   |
      |  Make it shiny | Gradients! Starbursts! Oh my! |
    Given I am on the homepage
    And I Follow "Confluence"
    When I follow "Make it shiny"
    And I follow "Issues"
    And I follow "Create Issue"
Scenario: Creating a issue
  When I fill in "Title" with "First Issue"
  And I fill in "Description" with "This is the first issue"
  And I press "Create Issue"
  Then I should see "Issue has been created."
