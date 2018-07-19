# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'

User.destroy_all
Story.destroy_all
Response.destroy_all
Follow.destroy_all
Clap.destroy_all


puts("Starting Seed")


demoUser = User.new({
  username: "Andrew Dong",
  email: "andrewdong@uchicago.edu",
  password:"password",
  biography: "There are these two guys sitting together in a bar in the remote Alaskan wilderness...",
  })

uri = URI('https://picsum.photos/200/?random')
pic = StringIO.new(uri.read)
uri2 = URI(Faker::Avatar.image)
pic2 = StringIO.new(uri2.read)
# file = File.open('app/assets/images/user_seeds/mbappe.jpeg')

demoUser.avatar.attach(io: File.open('app/assets/images/user_seeds/andrew.jpg'), filename: 'andrew.jpg')



demoUser.save!



puts ("Successfully Seeded DemoUser")

# andrew = User.new({
#   username: "Andrew",
#   email: "andrewdong1994@gmail.com",
#   password:"password",
#   biography: "Rock climber, software developer, ",
#   })
#
# andrew.avatar.attach(io: File.open('app/assets/images/user_seeds/andrew.jpg'), filename: 'andrew.jpg')
#
# andrew.save!



julia = User.new({
  username: "Julia",
  email: "juliajconn@equinox.com",
  password:"password",
  biography: "Recently graduated Hunter physical therapist, lovely volleyball player",
  })

julia.avatar.attach(io: File.open('app/assets/images/user_seeds/julia.jpg'), filename: 'julia.jpg')


julia.save!

nick = User.new({
  username: "Nick",
  email: "nickmastrangelo@uhartford.edu",
  password:"password",
  biography: "Serious moviepass user",
  })

nick.avatar.attach(io: File.open('app/assets/images/user_seeds/nick.jpg'), filename: 'nick.jpg')


nick.save!

robbie = User.new({
  username: "Robbie",
  email: "robbiesanders@sdsu.edu",
  password:"password",
  biography: "Radiohead fan, quant marketing professor at SDSU",
  })

robbie.avatar.attach(io: File.open('app/assets/images/user_seeds/robbie.jpg'), filename: 'robbie.jpg')

robbie.save!

paragraph_length = rand(10..30)
paragraph_number = rand(3..25)
body = ""

(paragraph_number).times do |i|
  body += (Faker::Hipster.paragraphs(paragraph_length).join(" ") + "\n")
  end

story1 = Story.new({
  title: "Dynamic Pricing on Perishable Goods",
  header: "UChicago Dissertation produced using data from grocery-chain Marianos",
  body: body,
  author_id: robbie.id,
  })

story1.photo.attach(io: File.open('app/assets/images/story_seeds/story1.jpg'), filename: 'story1.jpg')

story1.save!

story2 = Story.new({
  title: "Antman and the Wasp",
  header: "The Marvel Cinematic Universe is losing its sting",
  body: body,
  author_id: nick.id,
  })

story2.photo.attach(io: File.open('app/assets/images/story_seeds/story2.jpg'), filename: 'story2.jpg')

story2.save!

story3 = Story.new({
  title: "Sorry To Bother You",
  header: "The Most Socially Conscious Film Since The Matrix",
  body: body,
  author_id: nick.id,
  })

story3.photo.attach(io: File.open('app/assets/images/story_seeds/story3.jpg'), filename: 'story3.jpg')

story3.save!

story4 = Story.new({
  title: "6 Days of Fasting",
  header: "Man I could go for some ramen",
  body: body,
  author_id: julia.id,
  })

story4.photo.attach(io: File.open('app/assets/images/story_seeds/story4.jpg'), filename: 'story4.jpg')

story4.save!

puts ('Successfully Seeded Friends')

5.times do |i|
  lname = Faker::Name.last_name
  username = Faker::Name.first_name + " " + lname
  email = lname + "@thisiswater.com"


  # all_user = User.all.map{|user| user.username}
  # debugger
  # while(all_user.include?(username))
  # end

  user = User.new(
    username: username,
    email: email,
    password: 'password',
    biography: Faker::MostInterestingManInTheWorld.quote,
  )

  uri = URI('https://picsum.photos/200/?random')
  uri2 = URI(Faker::Avatar.image)
  pic = StringIO.new(uri.read)

  user.avatar.attach(io: pic, filename: 'userAvatar.jpg')

  redo unless user.valid?

  user.save!
end


puts("Successfully Seeded Users")

3.times do |i|
  paragraph_length = rand(25..50)
  paragraph_number = rand(3..25)
  body = ""

  (paragraph_number).times do |i|
    body += (Faker::Hipster.paragraphs(paragraph_length).join(" ") + "\n")
    end

  story = Story.new(
    author_id: User.all.sample.id,
    title: Faker::Movie.quote,
    header: Faker::TwinPeaks.quote,
    body: body
  )

  uri = URI('https://picsum.photos/700/500/?random')
  pic = StringIO.new(uri.read)

  story.photo.attach(io: pic, filename: 'storyImage.jpg')

  redo unless story.valid?

  story.save!
end

puts("Successfully Seeded Stories")

# 20.times do |i|
#     # paragraph_length = rand(5..30)
#     # body: Faker::Hipster.paragraphs(paragraph_length).join(" "),
#
#     body = Faker::Matz.quote
#     story_id = Story.all.sample.id
#     responder_id = User.all.sample.id
#
#     response = Response.new(
#       body: body,
#       story_id: story_id,
#       responder_id: responder_id
#     )
#
#     redo unless response.valid?
#
#     Response.create!(
#       body: body,
#       story_id: story_id,
#       responder_id: responder_id
#     )
# end
#
# puts("Successfully Seeded Responses")

# 3.times do |i|
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












# demoUser = User.new({
#   username: "Guest Username",
#   email: "andrewdong@uchicago.edu",
#   password:"password",
#   biography: "This is a guest account meant to demonstrate features.  For any issues please notify Andrew",
#   })
#
# demoUser.avatar.attach(io: File.open('app/assets/images/user_seeds/mbappe.jpeg'), filename: 'andrew.jpeg')
#
# demoUser.save!
#
