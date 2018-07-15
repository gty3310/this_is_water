# == Schema Information
#
# Table name: claps
#
#  id             :bigint(8)        not null, primary key
#  clapper_id     :integer
#  clap_count     :integer
#  clappable_type :string
#  clappable_id   :bigint(8)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Clap < ApplicationRecord

  # Validations

  validates :clapper_id, presence: true

  # Associations

  belongs_to :user,
  primary_key: :id,
  foreign_key: :clapper_id,
  class_name: :User

  belongs_to :clappable,
  polymorphic: true
end
