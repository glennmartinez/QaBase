Feature: Creating Tickets
In order to create tickets for projects
As a user
I want to be able to select a project and do that
Background:
  Given there is a release called "Internet Explorer"
  And I am on the homepage
  When I follow "Internet Explorer"
  And I follow "New Feature"
Scenario: Creating a feature
  When I fill in "Title" with "Non-standards compliance"
  And I fill in "Description" with "My pages are ugly!"
  And I press "Create Feature"
  Then I should see "Feature has been created."
Scenario: Creating a feature without valid attributes fails
  When I press "Create Feature"
  Then I should see "Feature has not been created."
  And I should see "Title can't be blank"
  And I should see "Description can't be blank"

Scenario: Description must be longer than 10 characters
  When I fill in "Title" with "Non-standards compliance"
  And I fill in "Description" with "it sucks"
  And I press "Create Feature"
  Then I should see "Feature has not been created."
  And I should see "Description is too short"