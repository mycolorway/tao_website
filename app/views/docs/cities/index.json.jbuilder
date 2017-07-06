json.options @cities.group_by {|city| city[:province]}.to_a do |group|
  cities = group[1].map do |city|
    [city[:name], city[:value], {:'data-search-key' => "#{city[:name]} #{city[:pinyin]}", :'data-hint' => city[:hint]}]
  end
  json.array! [group[0], cities]
end

json.totalSize @cities.size
