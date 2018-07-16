# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_16_185029) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "claps", force: :cascade do |t|
    t.integer "clapper_id"
    t.integer "clap_count"
    t.string "clappable_type"
    t.bigint "clappable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clappable_type", "clappable_id"], name: "index_claps_on_clappable_type_and_clappable_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id", null: false
    t.integer "followed_id", null: false
    t.index ["follower_id", "followed_id"], name: "index_follows_on_follower_id_and_followed_id", unique: true
  end

  create_table "responses", force: :cascade do |t|
    t.string "body", null: false
    t.integer "story_id", null: false
    t.integer "responder_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["responder_id"], name: "index_responses_on_responder_id"
    t.index ["story_id"], name: "index_responses_on_story_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "author_id", null: false
    t.string "image_url"
    t.string "video_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "header"
    t.index ["author_id"], name: "index_stories_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "image_url"
    t.text "biography"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
