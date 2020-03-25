# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# user_a = User.create(userName: "Andrew")
# user_b = User.create(userName: "Sean")
# user_c = User.create(userName: "Yoan")
 
# puppy   = Item.create(user_id:1, name: "doock",         description: "********",imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fpuppy&psig=AOvVaw0a0eQGnTpG5TG9V_CsVaVf&ust=1585139942538000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJi9x8uQs-gCFQAAAAAdAAAAABAH')
# sneaker = Item.create(user_id:2, name: "Air force 1",   description: "********",imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/uqlntxm9u2wckpv3nvpn/air-force-1-sp-womens-shoe-CsrVcC.jpg')
# monitor = Item.create(user_id:2, name: "LG",            description: "********",imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMUA2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5%2C0.5&.v=1573666299753')
# ipad2   = Item.create(user_id:1, name: "mini",          description: "********",imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPCqzuSrprYiZg3sRhsCowgvITjFC0R_HmsaSKoOxEOCw4GVINd_k&usqp=CAc')
# book    = Item.create(user_id:3, name: "Ruby",          description: "********",imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTLxM6SLdHGpFgBfU_npunxjWsi66lgN59BcLhSjOY01VEQgTAP&imgrefurl=https%3A%2F%2Fbooks.google.com%2Fbooks%2Fabout%2FRuby_on_Rails.html%3Fid%3DFtG-zAEACAAJ%26source%3Dkp_cover&tbnid=T2wwc513_WMeCM&vet=12ahUKEwiQ0qWekbPoAhUShuAKHRpkAVAQMygAegUIARDcAQ..i&docid=3M4h267S6Gy6qM&w=267&h=400&itg=1&q=Ruby%20on%20Rails%3A%202019%20Edition&ved=2ahUKEwiQ0qWekbPoAhUShuAKHRpkAVAQMygAegUIARDcAQ')
# watch   = Item.create(user_id:3, name: "Richard Mille", description: "********",imageUrl: 'https://cdn11.bigcommerce.com/s-bc02e/images/stencil/1280x1280/products/106219/103779/RM__09294.1570818997.jpg?c=2&imbypass=on')
 


# review_a = Review.create(user_id: 1, item_id: 1, comment: "******")
# review_b = Review.create(user_id: 2, item_id: 2, comment: "******")
# review_c = Review.create(user_id: 1, item_id: 3, comment: "******")
# review_d = Review.create(user_id: 3, item_id: 4, comment: "******")
# review_e = Review.create(user_id: 2, item_id: 5, comment: "******")
# review_f = Review.create(user_id: 3, item_id: 6, comment: "******")


review_a = Review.create(user_id: 1, item_id: 1, comment: 'Pretty cool')
review_b = Review.create(user_id: 2, item_id: 2, comment: 'WOW')
review_c = Review.create(user_id: 3, item_id: 3, comment: 'Awsome')
review_d = Review.create(user_id: 1, item_id: 4, comment: 'OMG')
review_e = Review.create(user_id: 2, item_id: 5, comment: 'Booooo')
review_f = Review.create(user_id: 3, item_id: 6, comment: 'Nope')













