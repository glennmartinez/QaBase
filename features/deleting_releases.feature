Feature: Deleting releases
  In order to remove needless releases
  As a release manager
  I want to make them disappear

  Scenario: Deleting a release
    Given there is a release called "Confluence"
    And I am on the homepage
    When I follow "Confluence"
    And I follow "Delete Release"
    Then I should see "Release has been deleted."
    Then I should not see "Confluence"