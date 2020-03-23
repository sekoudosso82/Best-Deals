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

. As a user I register
. As a user I should be able to login / logout
. As a user I should be able see my profile 
. As a user I can sell item
. As a user I can buy item
. As a user I should be able to like item
. As a user I should be able to update item
. As a user I should be able to delete
.  As a user I can see my cart
. As a user I can checkout 


Models : 
User   
UserProduct 
Product  
ProductCart 
Cart

Models Relationships :
	Users has many products through UserProducts 
		Product belongs to User
	Cart has many products through ProductCart
		Product belongs to Cart
    Product has many products through ProductCart



 
