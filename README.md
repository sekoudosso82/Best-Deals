# README

e-commerce app

Features :
. login (only with unique userNmae)
. post item (fetch ) . update item 
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
    . As a user I should be able like item

Models : 
    user (user_name) 
    item (name, description, imageUrl ) 
    review( comment ) 
    

Models Relationships :

    users has many reviews
    users has many items
        
    item has many reviews 
    item belongs to user 

    review belongs to item
    review belongs to user

ERD diagram