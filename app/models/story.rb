# == Schema Information
#
# Table name: stories
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  body         :text             not null
#  author_id    :integer          not null
#  image_url    :string
#  video_url    :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  publish_date :datetime         not null
#

class Story < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  def read_time
    word_count = self.body.split(' ').length
    minutes = word_count / 300
    if minutes < 1
      "< 1 minute read"
    else
      "#{minutes} minute read"
    end
  end
end
