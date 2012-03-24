Feature: Viewing releases
  In order to assign tickets to a release
  As a user
  I want to be able to see a list of available releases

  Scenario: Listing all releases
    Given there is a release called "Confluence"
    And I am on the homepage
    When I follow "Confluence"
    Then I should be on the release page for "Confluence"