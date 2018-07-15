json.story do
  json.extract! story, :id, :title, :header, :body, :author_id, :image_url, :video_url
  json.read_time story.read_time
  json.date @story.date
  json.responses_array @story.responses.map {|response| response.id}
end

json.user do
  json.extract! @story.author, :id, :username, :biography
  json.currentUserFollows @currentUserFollows
end

json.responses do
  @story.responses.each do |comment|
    json.set! response.id do
      json.extract! response, :id, :body, :story_id, :author_id
      json.date response.date
    end
  end
end
