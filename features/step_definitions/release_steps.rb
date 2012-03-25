 Given /^there is a release called "([^\"]*)"$/ do |name|
          @release = Factory(:release, :name => name)
end