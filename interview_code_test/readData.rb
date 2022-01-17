
require 'csv'
require 'json'
require 'pp'

# customerData = CSV.read('transaction_data_1.csv',headers: true)

# customer_data = JSON.pretty_generate(CSV.open('transaction_data_1.csv', headers:true).map do |row|
#     modifier = {}
#     row.each do |k,v|
#         if k =~ /modifier(.)_(.*)$/
#             (modifier[$1] ||= {})[$2]= v
#         end
#     end
#     {
#         id:row['id'],
#             modifier: modifier.sort_by { |k,v|k}.map{|k,v|v}
#     }
# end
# )

#Get data from csv and camelize headers to get valid keys

customer_data = CSV.open('transaction_data_1.csv', :headers => true,:header_converters => :symbol, :converters => :all).map { |x|x.to_h }.to_json
hashed_data = JSON.parse(customer_data)

 # group by same customer ID
 
grouped_data = hashed_data.group_by { |k| k['customer_id'] }

#Count the length of each grouped array
# using Enumerable frequency policy to get the frequency of occurance of the arrays


puts grouped_data
