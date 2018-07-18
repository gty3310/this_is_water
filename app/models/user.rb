# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  biography       :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  # Validations

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  # validates :biography, length: { maximum: 160 }

  after_initialize :ensure_session_token, :ensure_user_avatar

  # validate :ensure_avatar
  #
  #
  # def ensure_avatar
  #   unless self.avatar.attached?
  #     errors[:avatar] << "Must be attached"
  #   end
  # end




  #Associations

  has_one_attached :avatar

  has_many :authored_stories,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Story

  has_many :responses,
  primary_key: :id,
  foreign_key: :responder_id,
  class_name: :Response

  has_many :users_following,
  primary_key: :id,
  foreign_key: :followed_id,
  class_name: :Follow

  has_many :user_follows,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :Follow

  has_many :followers,
  through: :users_following,
  source: :follower

  has_many :followed_users,
  through: :user_follows,
  source: :followed

  has_many :followed_user_stories,
  through: :followed_users,
  source: :authored_stories


  #Auth methods

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    return self.session_token
  end

  def is_password?(password)
    bcrypted_password = BCrypt::Password.new(self.password_digest)
    bcrypted_password.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_user_avatar
    self.avatar
  end

end
