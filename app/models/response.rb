# == Schema Information
#
# Table name: responses
#
#  id           :bigint(8)        not null, primary key
#  body         :string           not null
#  story_id     :integer          not null
#  responder_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Response < ApplicationRecord

  # Validations

  validates :body, :story_id, :responder_id, presence: true

  # Associations

  belongs_to :responder,
  primary_key: :id,
  foreign_key: :responder_id,
  class_name: :User

  belongs_to :story,
  primary_key: :id,
  foreign_key: :story_id,
  class_name: :Story

  has_many :claps,
  as: :clappable

  # Methods

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
