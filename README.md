# BACK Day02: Express

### Objectives
- Handle Node js
- Understand how to interact with Express js
- Learn to use Express js
- Handle NPM

## Exercises

### Exercise 1

Create a file named e1.js

Wake up a server using Express, when you wake up the server it should display a message that says: `Server up on port ${PORT}`.

### Exercise 2

Create a file named ej2.js

Stand up an Express server

Drive the following routes:

Path: Site root ('/'), Method: get, Action: Show a welcome message

Path: Products, Method: get, Action: Show a message that says: product listing

Path: Products, Method: post, Action: Show a message that says: create a product

Path: Products, Method: put, Action: Show a message that says: update a product

Path: Products, Method: delete, Action: Show a message that says: delete a product

Path: Users, Method: get, Action: Show a message that says: list of users

Path: Users, Method: post, Action: Show a message that says: create a user

Path: Users, Method: put, Action: Show a message that says: update a user

Path: Users, Method: delete, Action: Show a message that says: delete a user

Use Postman to test all calls

### Exercise 3

Create a file named ej3.js

Stand up an Express server

Calling localhost:3000/products should display the following JSON:

{
   description: 'Products',
   items: [
     { id: 1, name: 'Harry Potter Mug', price: 300},
     { id: 2, name: 'FIFA 22 PS5', price: 1000},
     {id: 3, name: 'Goku Super Saiyan Figure', price: 100},
     {id: 4, name: 'Zelda Breath of the Wild', price: 200},
     {id: 5, name: 'Skin Valorant', price: 120},
     { id: 6, name: 'Star Wars Mug', price: 220}
   ]
}

Create endpoint to create a new product

Create endpoint to be able to update a product

Create endpoint to be able to delete a product

Create filter by product price

Create filter that shows products with a price between 50 and 250.

Create a filter that when I search in postman by parameter for the id of a product, it returns that product

Create a filter that when I search in postman by parameter for the name of a product, it returns that product

| Node.js | Express | HTML | JS |

Completed by [Vero Polegre](https://github.com/VeroPolegre)
