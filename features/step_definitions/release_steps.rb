 Given /^there is a release called "([^\"]*)"$/ do |name|
          Factory(:release, :name => name)
end