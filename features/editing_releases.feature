Feature: Editing Releases
  In order to update releases information
  As a user
  I want to be able to do that through an interface

  Background:
    Given there is a release called "Confluence"
    And I am on the homepage
    When I follow "Confluence"
    And I follow "Edit Release"

  Scenario: Updating a releases
    And I fill in "Name" with "Confluence 2"
    And I press "Update Release"
    Then I should see "Release has been updated."
    Then I should be on the release page for "Confluence 2"

  Scenario: Updating a release with invalid attributes is bad
     And I fill in "Name" with ""
     And I press "Update Release"
     Then I should see "Release has not been updated."