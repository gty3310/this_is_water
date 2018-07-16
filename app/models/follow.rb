# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord

  # Validations

  validates :follower_id, :followed_id, presence: true
  validates :followed_id, uniqueness: { scope: [:follower_id], message: "should only follow one other user" }

  # Associations

  belongs_to :followed,
  primary_key: :id,
  foreign_key: :followed_id,
  class_name: :User

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :User

  # Methods

  def not_self
    if self.followed_id == self.follower_id
      self.errors[:User] << "cannot follow yourself"
    end
  end

end
