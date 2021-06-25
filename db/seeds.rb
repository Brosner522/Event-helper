puts "Destroying everything!!"

User.destroy_all
Invitation.destroy_all
Event.destroy_all

puts "creating users🙎‍♂️🙍‍♀️🙎"
10.times do 
    User.create(username: Faker::Name.unique.name, age: Faker::Number.between(from: 18, to: 60), profile_img: Faker::Avatar.image(size: "50x50"), password: Faker::Alphanumeric.alphanumeric(number: 10))
end


puts "making events..."
Event.create(user_id: Faker::Number.between(from: 1, to: 10), name: "Gardening in the Garden", date: Faker::Date.between(from: '2021-09-23', to: '2022-12-25'), time: "10:15 am", location: "Madison Square Garden" , price: rand(20..100), description:"This workshop is designed to help your group build a strong foundation for your group's leadership and decision-making structures." , img: "https://2wfm7hcgwyz2qtc6fza10emm-wpengine.netdna-ssl.com/wp-content/uploads/legacy/104/1-2048x1152.jpg" ) 

Event.create(user_id: Faker::Number.between(from: 1, to: 10), name: "Beer Pong Tournament" , date: Faker::Date.between(from: '2021-09-23', to: '2022-12-25'), time: "9:00 pm", location: "Billionaire's Row"  , price: rand(20..100), description:"Beer Pong has turned a party game into a professional big-payday sport. Build your legacy in the game of beer pong!" , img: "https://www.famoushostels.com/wp-content/uploads/porto-beer-pong-banner.jpg" )

Event.create(user_id: Faker::Number.between(from: 1, to: 10), name: "Lake-side Movies" , date: Faker::Date.between(from: '2021-09-23', to: '2022-12-25'), time: "5:00 pm", location: "Navy Pier, Chicago, IL" , price: rand(20..100), description: "From free outdoor movies in the park to free jazz concerts to interactive art installations to dance performances and much more, the People’s Pier is a year-round destination for free events in Chicago." , img: "https://laketahoethisweek.com/sites/default/files/styles/ob_very_large/public/business/event/screen_shot_2017-06-14_at_9.12.01_am.png?itok=aW8il4q0" )

Event.create(user_id: Faker::Number.between(from: 1, to: 10), name: "The Flatiron School Gala", date: Faker::Date.between(from: '2021-09-23', to: '2022-12-25'), time: "6:00 pm", location: "175 5th ave, New York, NY 10010", price: rand(20..100), description: "The Flatiron School gala is being held to honor the cohort of 040521", img: "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-05-06/25899030-5abb-4263-b211-0ea376bff74c.jpeg" )

Event.create(user_id: Faker::Number.between(from: 1, to: 10), name: "Software Seminar", date: Faker::Date.between(from: '2021-09-23', to: '2022-12-25'), time: "9:30 am", location: "4 W 43rd St, New York, NY 10036", price: rand(20..100), description: "The Software Seminar is a yearly event to give our community a chance to gather and discuss the new technologies that become available to us.", img: "https://breezy-gallery.imgix.net/f8301/Image%20from%20iOS%206%201.jpg")

Event.create(user_id: Faker::Number.between(from: 1, to: 10), name: "The Stackholm Invitational", date: Faker::Date.between(from: '2021-09-23', to: '2022-12-25'), time: "11:00 am", location: "Great Lawn Oval, New York, NY 10024", price: rand(20..100), description: "Just a group of Flatiron students balling out together.", img: "https://nodawaynews.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-27-at-5.13.09-PM.png")


puts "seeding invitations..."
30.times do
    user_id = User.ids.sample
    event_id = Event.ids.sample
    Invitation.create(date: Faker::Date.between(from: '2020-09-23', to: '2022-12-25'), user_id: user_id, event_id: event_id)
end

