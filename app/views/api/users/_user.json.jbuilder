json.extract! user, :id, :username, :email, :image_url, :biography
json.day user.created_at.day
json.month user.created_at.month
json.year user.created_at.year
