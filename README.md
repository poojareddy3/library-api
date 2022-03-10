# Library-api

## Description:

This is a Library Crud Api.

## Technologies

Express, MongoDB and Mongoose, Node.JS

## Instructions to run the application:

Below are the routes links to execute the applications. Open on the links below in a Web Browser for GET Requests. All the other CRUD links should be on Postman.

Base Heroku URL for the API: [https://library-api-crud.herokuapp.com/api/]

## EndPoints

/books
/users
/librarian
/borrowInfo

For books,users and borrowInfo Endpoints, you can find the data with ID. For Example,  [https://library-crud-api.herokuapp.com/api/books/6227b652589f62bf5ebd99be]


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
```const BorrowInfo = new Schema(
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