json.extract! story, :id, :title, :body, :author_id, :image_url, :video_url, :publish_date
json.user_username story.user.username
json.day story.created_at.day
json.month story.created_at.month
json.year story.created_at.year
json.userImageUrl story.user.image_url
