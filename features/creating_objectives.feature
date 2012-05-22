Feature: Creating Objectives
In order to create objectives for features
As a user
I want to be able to select a feature and do that
Background:
    Given there is a release called "Confluence"
    And that release has a feature:
      | title           | description                   |
      |  Make it shiny | Gradients! Starbursts! Oh my! |
    Given I am on the homepage
    And I follow "Confluence"
    When I follow "Make it shiny"
    And I follow "Objectives"
    And I follow "Create Objective"
Scenario: Creating a objective
  When I fill in "Title" with "First Objective"
  And I press "Create Objective"
  Then I should see "Objective has been created."