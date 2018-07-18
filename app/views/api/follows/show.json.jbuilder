json.extract! @user, :id, :username, :biography
json.currentUserFollows @currentUserFollows
json.avatar url_for(@user.avatar)
