# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string
#  biography       :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token


  # VALIDATIONS
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :stories,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Story

  #ASSOCIATIONS

  #GETTERS/SETTERS

  attr_reader :password

  #METHODS

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

end
