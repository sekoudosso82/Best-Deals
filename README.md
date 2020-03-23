

# Best-Deals

Mod3 project 

e-commerce app 

Features :  
. login (with username- password- balance) /register
. Profile
. sell items
. Form to sell items
	. name
	. price
	. quantity
	. type 
	. image url
. post item (fetch )

			. update item
					. get item  (fetch)
					. make the modification and 
					. patch(fetch)
			. delete item
					. get item  (fetch)
					. delete  (fetch/ delete)

. Buy items
Index page of all products 
. all products on page
	name
	price 
	quantity
	type-of-product
. filter by type 
. select item
	. take to show page
	. name
	. price
	. quantity
	. type 
	. image url
	. add to cart 
. like item 
	. save to profile
. save for later 


			. cart 
				. total 
				. checkout 
    			 




User stories:
. As a user I can post item *
. As a user I should be able like  item *
. As a user I should be able leave a review about item *
. As a user I should be able to update item *
. As a user I should be able to delete
<!-- . As a user I can see my cart -->



Models : 
User   ()
userItem 
item  
like 
review



Models Relationships :
	Users has many products through UserProducts 
		Product belongs to User
	Cart has many products through ProductCart
		Product belongs to Cart 
        cart belongs to user
    Product has many products through ProductCart

ERD diagram
