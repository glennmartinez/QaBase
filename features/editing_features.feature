Feature: Editing features
  In order to alter feature information
  As a user
  I want a form to edit the features

  Background:
        Given there is a release called "Confluence"
        And that release has a feature:
          | title           | description                   |
          |  Make it shiny! | Gradients! Starbursts! Oh my! |
        Given I am on the homepage
        When I follow "Confluence"
        And I follow "Make it shiny!"
       When I follow "Edit Feature"
  Scenario: Updating a feature
        When I fill in "Title" with "Make it really shiny!"
        And I press "Update Feature"
        Then I should see "Feature has been updated."
        And I should see "Make it really shiny!" within "#ticket h2"
        But I should not see "Make it shiny!"
  Scenario: Updating a ticket with invalid information
        When I fill in "Title" with ""
        And I press "Update Feature"
        Then I should see "Feature has not been updated."