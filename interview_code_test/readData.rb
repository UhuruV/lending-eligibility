
require 'csv'
require 'json'
require 'pp'

# customerData = CSV.read('transaction_data_1.csv',headers: true)

# customer_data = JSON.pretty_generate(CSV.open('transaction_data_1.csv', headers:true).map do |row|
#     customerData = {}
#     row.each do |k,v|
#         if k =~ /customerData(.)_(.*)$/
#             (customerData[$1] ||= {})[$2]= v
#         end
#     end
#     {
#         id:row['id'],
#             customer_id: customerData.sort_by { |k,v|k}.map{|k,v|v}
#     }
# end
# )

#Get data from csv and camelize headers to get valid keys

customer_data = CSV.open('transaction_data_1.csv', :headers => true,:header_converters => :symbol, :converters => :all).map { |x|x.to_h }.to_json
hashed_data = JSON.parse(customer_data)

 # group by same customer ID
 
grouped_data = hashed_data.group_by { |k| k['customer_id'] }


#looping through the grouped data
grouped_data.each do |customer|
    # puts customer
end 

hash = Hash(grouped_data)
# puts hash

# Iterating the hash to get the transaction dates for the different id's
difference_in_days = []
hash.keys.sort.each do |name|
    puts "  id: #{name}"
    hash[name].each do |svc|
        transaction_dates = svc["transaction_date"]
        puts transaction_dates
        # puts "transaction_date: #{svc["transaction_date"]}"
    end
end




#Get consecutive dates
# Have a sliding window to keep track of the maximum consecutive days and n number (the legnth of the array)
max_consecutive_dates = 0
start = 0
max_days = 0




