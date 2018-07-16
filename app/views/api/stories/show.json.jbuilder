json.story do
  json.extract! story, :id, :title, :header, :body, :author_id, :image_url, :video_url
  json.readTime story.read_time
  json.date @story.date
  json.responses_array @story.responses.map {|response| response.id}
  json.totalClaps @story.totalClaps
end

json.user do
  json.extract! @story.author, :id, :username, :biography
  json.currentUserFollows @currentUserFollows
end

json.responses do
  @story.responses.each do |comment|
    json.set! response.id do
      json.extract! response, :id, :body, :story_id, :responder_id
      json.date response.date
      json.totalClaps = response.totalClaps
    end
  end
end
