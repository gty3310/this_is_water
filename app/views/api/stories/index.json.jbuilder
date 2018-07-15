json.stories do
  @stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :header, :body, :author_id, :image_url, :video_url
      json.date story.date
      json.read_time story.read_time
    end
  end
end

json.users do
  @stories.each do |story|
    json.set! story.author.id do
      json.extract! story.author, :id, :email, :username
    end
  end
end
