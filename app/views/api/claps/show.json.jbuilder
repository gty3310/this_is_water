if @clap.clappable_type == "Story"
  json.story do
    json.extract! @clappable, :id, :totalClaps
  end
else
  json.story {}
end



if @clap.clappable_type == "Response"
  json.response do
    json.extract! @clappable, :id, :totalClaps
  end
else
  json.response {}
end
