# Library-api

## Description:

This is a Library Crud Api.

## Technologies

Express, MongoDB, Node.JS, Mongoose, Postman, Heroku

## Instructions to run the application:

Base Heroku URL for the API: [https://library-api-crud.herokuapp.com/api/]

Use the Endpoints with the heroku Base URL to get the data in any Web Browser or Postman.

To Modify the data with POST, PUT or DELETE use Postman for testing.

For Example to get Book By ID:  [https://library-crud-api.herokuapp.com/api/books/6227b652589f62bf5ebd99be]

For running locally:

* clone the project to your local system
* VS Code Terminal
    * npm init -y
    * npm i mongoose
    * npm i express
    * npm i nodemon
    * add below line to package.json's scripts tag:
        "scripts": { \
                "start": "nodemon server.js" \
                } 
    * node/seed/borrowInfos.js
    * npm start

## EndPoints

### End Points for Books CRUD:

#### Sample data for all schemas is in the Test Data.txt file.

Create Book: /books

Link to Create a Book: [https://library-api-crud.herokuapp.com/api/books]

Get AllBooks: /books

Link to Get all Books Data: [https://library-api-crud.herokuapp.com/api/books]

Get Book By Id: /books/:id

Link to Get Book by ID: [https://library-api-crud.herokuapp.com/api/books/:id] 

Update Book By ID: /books/:id

Link to Update a Book: [https://library-api-crud.herokuapp.com/api/books/:id]

Delete Book By ID: /books/:id

Link to Delete a Book: [https://library-api-crud.herokuapp.com/api/books/:id]

### EndPoints for User CRUD:

Create User: /users

Link to create User: [https://library-api-crud.herokuapp.com/api/users]

Get All Users: /users

Link to Get all Users Data: [https://library-api-crud.herokuapp.com/api/users]

Get User By ID: /users/:id

Link to Get User by ID: [https://library-api-crud.herokuapp.com/api/users/:id]

Update User By ID: /users/:id

Link to Update User: [https://library-api-crud.herokuapp.com/api/users/:id]

Delete User By ID:  /users/:id

Link to Delete User: [https://library-api-crud.herokuapp.com/api/users/:id]

### End Points for BorrowInfo CRUD:

Create BorrowBookInfo: /borrowInfo

Link to Create BorrowedBook Info: [https://library-api-crud.herokuapp.com/api/borrowInfo]

Get All BorrowInfo: /borrowInfo

Link to Get All BorrowInfo: [https://library-api-crud.herokuapp.com/api/borrowInfo]

Get BorrowInfo By Id: /borrowInfo/:id

Link to Get borrowInfo by ID: [https://library-api-crud.herokuapp.com/api/borrowInfo/:id]

Update BorrowInfo By ID: /borrowInfo/:id

Link to Update BorrowInfo: [https://library-api-crud.herokuapp.com/api/borrowInfo/:id]

Delete BorrowInfo By ID: /borrowInfo/:id

Link to delete BorrowInfo: [https://library-api-crud.herokuapp.com/api/borrowInfo/:id]

## Schemas:

### Book Schema:
```
const Author = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true}
    }
)

const Book = new Schema(
    {
        ISBN: { type: Number, required: true },
        title: { type: String, required: true },
        author: Author,
        publisher_name: { type: String, required: true},
        year_published: { type: Number, required: true }
    },
    { timestamps: true }
)
```
### User Schema:
```
const Address = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
},
{ timestamps: true }
)

const User = new Schema(
    {
        uname: { type: String, required: true },
        address: Address,
        phone: { type: Number, required: true},
        email: { type: String, required: true },
        maxBooksLimit: { type: Number, required: true},
    },
    { timestamps: true}
)
```
### Librarian Schema:
```
const Address = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true }
},
{ timestamps: true }
);

const Librarian = new Schema(
    {
        name: { type: String, required: true},
        address: Address,
        phone: { type: Number, required: true},
        email: { type: String, required: true}
    },
    { timestamps: true}
)
```
### BorrowInfo Schema
```
const BorrowInfo = new Schema(
    {
        borrowBook_id: { type: Schema.Types.ObjectId, ref: 'book'},
        user_id: { type: Schema.Types.ObjectId, ref: 'user'},
        librarian_id: { type: Schema.Types.ObjectId, ref: 'librarian'},
        issueDate: { type: String, required: true},
        dueDate: { type: String, required: true },
    },
    { timestamps: true}
)
```