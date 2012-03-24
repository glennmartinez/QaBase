Feature: Creating releases
          In order to have releases to assign tickets to
          As a user
          I want to create them easily

          Background:

	            Given I am on the homepage
	            When I follow "New Release"


          Scenario: Creating a project
	            And I fill in "Name" with "Confluence"
	            And I press "Create Release"
	            Then I should see "Release has been created."
	            And I should be on the release page for "Confluence"
				And I should see "Confluence - Releases - QaBase"

		  Scenario: Creating a project without a name
				  And I press "Create Release"
				  Then I should see "Release has not been created."
				  And I should see "Name can't be blank"