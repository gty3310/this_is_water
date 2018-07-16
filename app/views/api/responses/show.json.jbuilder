json.story do
  json.id @response.story.id
  json.responses_array @response.story.responses.map { |resp| resp.id }
end

json.response do
  json.extract! @response, :id, :body, :story_id, :responder_id
  json.date @response.date
  json.totalClaps @response.totalClaps
end
