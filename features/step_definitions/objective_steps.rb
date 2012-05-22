Given /^that feature has a objective:$/ do |table|
@feature = Factory(:feature, :title => title)
@objective = Factory(:issue, :title => title)

  table.hashes.each do |attributes|
  	
    @feature.objective.create!(attributes)
  end
end