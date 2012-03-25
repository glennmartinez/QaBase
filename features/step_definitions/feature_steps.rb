Given /^that release has a feature:$/ do |table|
  table.hashes.each do |attributes|
    @release.features.create!(attributes)
  end
end