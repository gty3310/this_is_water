# == Schema Information
#
# Table name: stories
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  header     :string
#

class Story < ApplicationRecord

  validates :title, :body, :author_id, presence: true
  validates :title, uniqueness: true

  has_one_attached :photo

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :responses,
  primary_key: :id,
  foreign_key: :story_id,
  class_name: :Response

  has_many :claps,
  as: :clappable

  # Methods

  def read_time
    word_count = self.body.split(' ').length
    minutes = word_count / 150
    if minutes < 1
      "< 1 minute read"
    else
      "#{minutes} min read"
    end
  end

  def date
    monthShort = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    monthLong= [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]

    year = self.created_at.year
    month = monthShort[self.created_at.month]
    day = self.created_at.day
    return "#{month} #{day}"
  end

  def totalClaps
    self.claps.sum(:clap_count)
  end
end
