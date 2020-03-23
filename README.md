# Best-Deals 
Mod3 project 

e-commerce app 

Features :  
    . login (only with unique userNmae)	
    . post item (fetch )
    . update item
    . delete item
    . review item
        .update review
        .delete review
    . like item 

User stories:
. As a user I can post item 
. As a user I should be able to update item 
. As a user I should be able to delete
. As a user I should be able leave a review about item 
. As a user I should be able like  item 


Models : 
    user   (name, location)
    userItem (user_id, item_id)
    item (name, price, quantity, imageUrl)
    review( comment )
    itemReview( item_id, review_id )




Models Relationships :
	
    users has many reviews
    users has many items
        
    item has many reviews 
    item belongs to user 

    review belongs to item
    review belongs to user


ERD diagram 







 
