Given /^that feature has a issue:$/ do |table|
   @feature = Factory(:feature, :title => title)
  table.hashes.each do |attributes|
    @feature.issues.create!(attributes)
  end
end