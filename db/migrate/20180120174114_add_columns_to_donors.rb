class AddColumnsToDonors < ActiveRecord::Migration[5.1]
  def change
    add_column :donors, :street, :string
    add_column :donors, :city, :string
    add_column :donors, :state, :string
    add_column :donors, :zipcode, :integer
    add_column :donors, :lifetime_donat, :decimal, precision: 5, scale: 2
    add_column :donors, :last_donat, :decimal, precision: 5, scale: 2
    add_column :donors, :events_att, :integer
    add_column :donors, :college, :string
    add_column :donors, :major, :string
    add_column :donors, :planned_donat, :decimal, precision: 5, scale: 2
    add_column :donors, :bool_donat, :boolean
  end
end
