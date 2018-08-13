# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'
require 'rest-client'
require 'ez_download'

User.destroy_all
Story.destroy_all
Response.destroy_all
Follow.destroy_all
Clap.destroy_all


puts("Starting Seed")


demoUser = User.new({
  username: "Guest User",
  email: "guest2018@gmail.com",
  password:"password",
  biography: "There are these two girls sitting together in a bar in the remote Alaskan wilderness.  I'm one of them.",
  })

file = EzDownload.open("https://cdn2.iconfinder.com/data/icons/female-users/512/11-512.png")
demoUser.avatar.attach(io: file, filename: "guest.jpg")
demoUser.save!

puts ("Successfully Seeded DemoUser")

andrew = User.new({
  username: "Andrew Dong",
  email: "andrewdong1994@gmail.com",
  password: "password",
  biography: "Phish loving software developer"
  })

andrew.avatar.attach(io: File.open('app/assets/images/user_seeds/andrew.jpg'), filename: 'andrew.jpg')
andrew.save!

julia = User.new({
  username: "Julia Connoly",
  email: "juliajconn@equinox.com",
  password: "password",
  biography: "Physical therapist and passionate volleyball coach",
  })

julia.avatar.attach(io: File.open('app/assets/images/user_seeds/julia.jpg'), filename: 'julia.jpg')
julia.save!

nick = User.new({
  username: "Nick Mastrangelo",
  email: "nickster412@blackfinn.com",
  password:"password",
  biography: "Serious MoviePass user, disappointed by recent MoviePass developments",
  })

nick.avatar.attach(io: File.open('app/assets/images/user_seeds/nick.jpg'), filename: 'nick.jpg')
nick.save!

robbie = User.new({
  username: "Robbie Sanders",
  email: "sandersr@sdsu.edu",
  password:"password",
  biography: "Quantitative marketing professor and listener of Andrew Bird",
  })

robbie.avatar.attach(io: File.open('app/assets/images/user_seeds/robbie.jpg'), filename: 'robbie.jpg')
robbie.save!

danielle = User.new({
  username: "Danielle Harder",
  email: "dharder@equinox.com",
  password:"password",
  biography: "Yoga instructor, rock climber and dog lover",
  })

danielle.avatar.attach(io: File.open('app/assets/images/user_seeds/danielle.jpg'), filename: 'danielle.jpg')
danielle.save!

brian = User.new({
  username: "Brian Liew",
  email: "bliew@appacademy.edu",
  password:"password",
  biography: "Shadowverse master, kind soul",
  })

brian.avatar.attach(io: File.open('app/assets/images/user_seeds/brian.jpg'), filename: 'brian.jpg')
brian.save!

reef = User.new({
  username: "Reef Hossain",
  email: "rhossain@appacademy.edu",
  password:"password",
  biography: "Gorillaz expert, kind soul",
  })

reef.avatar.attach(io: File.open('app/assets/images/user_seeds/reef.jpg'), filename: 'reef.jpg')
reef.save!

puts ('Successfully Seeded Friends')


paragraph_length = rand(10..30)
paragraph_number = rand(3..15)
body = ""

(paragraph_number).times do |i|
  body += (Faker::Lorem.paragraphs(paragraph_length).join(" ") + "\n")
  end

julia_story = Story.new({
  title: "6 Days of Fasting",
  header: "Is it good for you?  I'm not sure!",
  body: body,
  author_id: julia.id,
  })

julia_story.photo.attach(io: File.open('app/assets/images/story_seeds/julia_story.jpg'), filename: 'julia_story.jpg')
julia_story.save!

paragraph_length = rand(10..30)
paragraph_number = rand(3..15)
body = ""

(paragraph_number).times do |i|
  body += (Faker::Lorem.paragraphs(paragraph_length).join(" ") + "\n")
  end

nick_story_1 = Story.new({
  title: "Antman and the Wasp",
  header: "The Marvel Cinematic Universe is losing its sting",
  body: body,
  author_id: nick.id,
  })

nick_story_1.photo.attach(io: File.open('app/assets/images/story_seeds/nick_story_1.jpg'), filename: 'nick_story_1.jpg')
nick_story_1.save!

paragraph_length = rand(10..30)
paragraph_number = rand(3..15)
body = ""

(paragraph_number).times do |i|
  body += (Faker::Lorem.paragraphs(paragraph_length).join(" ") + "\n")
  end

andrew_story_1 = Story.new({
  title: "A Song of Pigskins and Whistles",
  header: "Fan fiction based on 2017's Stark's BMFL team",
  body: body,
  author_id: andrew.id,
  })

andrew_story_1.photo.attach(io: File.open('app/assets/images/story_seeds/andrew_story_1.jpg'), filename: 'andrew_story_1.jpg')
andrew_story_1.save!

paragraph_length = rand(10..30)
paragraph_number = rand(3..15)
body = ""

(paragraph_number).times do |i|
  body += (Faker::Lorem.paragraphs(paragraph_length).join(" ") + "\n")
  end

robbie_story = Story.new({
  title: "Dynamic Pricing on Perishable Goods",
  header: "Comparing Alternative Models of Heterogeneity in Consumer Choice",
  body: body,
  author_id: robbie.id,
  })

robbie_story.photo.attach(io: File.open('app/assets/images/story_seeds/robbie_story.jpg'), filename: 'robbie_story.jpg')
robbie_story.save!

paragraph_length = rand(10..30)
paragraph_number = rand(3..15)
body = ""

(paragraph_number).times do |i|
  body += (Faker::Lorem.paragraphs(paragraph_length).join(" ") + "\n")
  end

nick_story_2 = Story.new({
  title: "Sorry To Bother You",
  header: "The Most Socially Conscious Film Since The Matrix",
  body: body,
  author_id: nick.id,
  })

nick_story_2.photo.attach(io: File.open('app/assets/images/story_seeds/nick_story_2.jpg'), filename: 'nick_story_2.jpg')
nick_story_2.save!

paragraph_length = rand(10..30)
paragraph_number = rand(3..15)
body = ""

(paragraph_number).times do |i|
  body += (Faker::Lorem.paragraphs(paragraph_length).join(" ") + "\n")
  end

andrew_story_2 = Story.new({
  title: "Howl Owl City Get to Sleep",
  header: "Twice the speed, half the owl sound listening time",
  body: body,
  author_id: andrew.id,
  })

andrew_story_2.photo.attach(io: File.open('app/assets/images/story_seeds/andrew_story_2.jpg'), filename: 'andrew_story_2.jpg')
andrew_story_2.save!

puts("Successfully seeded friends' stories")


# 5.times do |i|
#   lname = Faker::Name.last_name
#   username = Faker::Name.first_name + " " + lname
#   email = lname + "@thisiswater.com"
#
#   user = User.new(
#     username: username,
#     email: email,
#     password: 'password',
#     biography: Faker::MostInterestingManInTheWorld.quote,
#   )
#
#   uri = URI('https://picsum.photos/200/?random')
#   uri2 = URI(Faker::Avatar.image)
#   pic = StringIO.new(uri.read)
#
#   user.avatar.attach(io: pic, filename: 'userAvatar.jpg')
#
#   redo unless user.valid?
#
#   user.save!
# end
#
#
# puts("Successfully Seeded Users")
#
# 10.times do |i|
#   paragraph_length = rand(10..30)
#   paragraph_number = rand(3..15)
#   body = ""
#
#   (paragraph_number).times do |i|
#     body += (Faker::Lorem.paragraphs(paragraph_length).join(" ") + "\n")
#     end
#
#   story = Story.new(
#     author_id: User.all.sample.id,
#     title: Faker::Lorem.sentences(1).join(""),
#     header: Faker::Movie.quote,
#     body: body
#   )
#
#   uri = URI('https://picsum.photos/700/500/?random')
#   pic = StringIO.new(uri.read)
#
#   story.photo.attach(io: pic, filename: 'storyImage.jpg')
#
#   redo unless story.valid?
#
#   story.save!
# end
#
# puts("Successfully Seeded Stories")


# User.all.each do |user|
#   Story.all.each do |story|
#     Response.create(body: Faker::Lorem.paragraph_by_chars(50 + rand(300)), story_id: story.id, responder_id: user.id)
#   end
# end
#
# puts("Successfully Seeded Responses")
#
# User.all.each do |user|
#   Story.all.each do |story|
#     Clap.create(clapper_id: user.id, clappable_type: 'Story', clappable_id: story.id, clap_count: rand(10))
#   end
# end
#
# puts("Successfully Seeded Claps")

# 10.times do |i|
#     # paragraph_length = rand(5..30)
#     # body: Faker::Lorem.paragraphs(paragraph_length).join(" "),
#
#     body = Faker::Matz.quote
#     story_id = Story.all.sample.id
#     responder_id = User.all.sample.id
#
#     # response = Response.new(
#     #   body: body,
#     #   story_id: story_id,
#     #   responder_id: responder_id
#     # )
#     #
#     # redo unless response.valid?
#
#     Response.create!(
#       body: body,
#       story_id: story_id,
#       responder_id: responder_id
#     )
# end
#
# puts("Successfully Seeded Responses")

# 10.times do |i|
#   follower_id = User.all.sample.id
#   followed_id = User.all.sample.id
#
#   while(follower_id == followed_id)
#     followed_id = User.all.sample.id
#   end
#
#   Follow.create!(
#     followed_id: followed_id,
#     follower_id: follower_id
#   )
# end
#
# puts ("Successfully Seeded Follows")
