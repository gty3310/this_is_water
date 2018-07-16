# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Story.destroy_all

puts("Successfully Seeded")

demoUser = User.new({
  username: "Guest Username",
  email: "guest@thisiswater.com",
  password:"password",
  biography: "This is a guest account meant to demonstrate features.  For any issues please notify Andrew",
  image_url: ""
  })

demoUser.save!

andrew = User.new({
  username: "Andrew",
  email: "andrewdong1994@gmail.com",
  password:"password",
  biography: "Rock climber, software developer, ",
  image_url: ""
  })

andrew.save!

julia = User.new({
  username: "Julia",
  email: "juliajconn@equinox.com",
  password:"password",
  biography: "Recently graduated Hunter College student in physical therapy, serious volleyball player",
  image_url: ""
  })

julia.save!

nick = User.new({
  username: "Nick",
  email: "nickmastrangelo@uhartford.edu",
  password:"password",
  biography: "Serious moviepass user",
  image_url: ""
  })

nick.save!

robbie = User.new({
  username: "Robbie",
  email: "robbiesanders@sdsu.edu",
  password:"password",
  biography: "Radiohead fan, quant marketing professor at SDSU",
  image_url: ""
  })

robbie.save!

story1 = Story.new({
  title: "Heterogenous consumer choice and dynamic pricing on perishable goods",
  header: "UChicago Dissertation related to dynamic pricing",
  body: "#{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)}",
  author_id: robbie.id,
  })

story1.save!

story2 = Story.new({
  title: "Antman and the Wasp",
  header: "The Marvel Cinematic Universe is losing its sting",
  body: "#{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)}",
  author_id: nick.id,
  })

story2.save!

story3 = Story.new({
  title: "Sorry To Bother You",
  header: "The Most Socially Conscious Film Since The Matrix",
  body: "#{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)}",
  author_id: nick.id,
  })

story3.save!

story4 = Story.new({
  title: "6 Days of Fasting",
  header: "A challenging week in the life of a student athlete",
  body: "#{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)} \n #{Faker::Hipster.paragraph_by_chars(300)}",
  author_id: julia.id,
  })

story4.save!
