const db = require('../db');
const Book = require('../models/book');
const User = require('../models/user');
const BorrowInfo = require('../models/borrowInfo');
const Librarian = require('../models/librarian');

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));

const main = async () => {

    const book1= await new Book({ISBN: 1593275846, title: "Eloquent JavaScript: A Modern Introduction to Programming", author: {first_name: "Marjin", last_name: "Haverbeke"} , publisher_name: "No Starch press", year_published: 2014});
    book1.save();

    const book2 = await new Book({ISBN: 596517742, title: "JavaScript: The Good Parts", author: {first_name: "Douglas", last_name: "Crockford"}, publisher_name: "O'Rielly Media", year_published: 2008});
    book2.save();

    const book3 = await new Book({ISBN: 148420896, title: "MongoDB Basics", author: {first_name: "Peter", last_name: "Membrey"}, publisher_name: "Apress", year_published: 2014});
    book3.save();

    const book4 = await new Book({ISBN: 1617291609, title: "MongoDB in Action", author: {first_name: "Kyle",last_name: "Banker"}, publisher_name: "Manning", year_published: 2016});
    book4.save();

    const book5 = await new Book({ISBN: 9781484201886, title: "Beginning Node.js", author: {first_name: "Basarat", last_name: "Ali Syed"}, publisher_name: "Apress", year_published: 2014});
    book5.save();

        // {ISBN: 1617292427, title: "Express in Action", author: {first_name: "Evan", last_name: "Hahn"}, publisher_name: "Manning", year_published: 2016},
        // {ISBN: 1118008189, title: "hTML & CSS", author: {first_name: "Jon", last_name: "Duckett"}, publisher_name: "Wiley", year_published: 2011},
        // {ISBN: 1119363020, title: "Coding All-in-one for Dummies", author: {first_name: "Nikhil", last_name: "Abraham"}, publisher_name: "For Dummies", year_published: 2017},
        // {ISBN: 991344626, title: "FullStack react", author: {first_name: "Anthony", last_name: "Accomazzo"}, publisher_name: "FullStack.io", year_published: 2017},
        // {ISBN: 1617293857, title: "React in Action", author: {first_name: "Mark Tielens", last_name: "Thomas"}, publisher_name: "Manning", year_published: 2018}
     //]

     //console.log(books[0].ISBN);
    //  await Book.insertMany(books);
    console.log('Created Books!');
       
        const user1= await new User({
                uname: "Poojitha Vangala", 
                    address:
                    { 
                        street: "Continental Ct",
                        city: "Monroe Twp",
                        state: "NJ",
                        zip: 08831
                     },
                phone: 7328237527,
                email: "poojithavangala@gmail.com",
                maxBooksLimit: 3
            })
            user1.save();

            const user2 = await new User({ 
                uname: "Swetha Kolli", 
                address: 
                    { 
                        street: "Casey Dr",
                        city: "Monroe Twp",
                        state: "NJ",
                        zip: 08831
                     },
                phone: 7322890331,
                email: "kns.482gmail.com",
                maxBooksLimit: 3
            })
            user2.save();

            const user3 = await new User({ 
                uname: "Vineela Kosuri", 
                address: 
                    { 
                        street: "Gateway Blvd",
                        city: "Monroe Twp",
                        state: "NJ",
                        zip: 08831
                     },
                phone: 5085587499,
                email: "kosuri.vineela@gmail.coom",
                maxBooksLimit: 3
            })

            user3.save();

            const librarian = await new Librarian({
                name: "Silpa Mederametla",
                address: 
                    { 
                        street: "Davino Dr",
                        city: "Monroe Twp",
                        state: "NJ",
                        zip: 08831
                     },
                phone: 8482136081,
                email: "silpa.mederametla@gmail.com"
            })
     
            const borrowedBooks = [
                { 
                    borrowBook_id: book1._id,
                    user_id: user1._id,
                    librarian_id: librarian._id,
                    issueDate: "Mar 1,2022",
                    dueDate: "Mar 7, 2022"
                },
                { 
                    borrowBook_id: book3._id,
                    user_id: user2._id,
                    librarian_id: librarian._id,
                    issueDate: "Feb 28,2022",
                    dueDate: "Mar 6, 2022"
                },
                { 
                    borrowBook_id: book2._id,
                    user_id: user3._id,
                    librarian_id: librarian._id,
                    issueDate: "Feb 15,2022",
                    dueDate: "Feb 22, 2022"
                }
            ]
    
    
    await BorrowInfo.insertMany(borrowedBooks);
    console.log('Created Borrowed Books');
    //console.log(borrowedBooks.ISBN);
    // await User.insertMany(users);
    // console.log('Created Users!')
    librarian.save();
    console.log("Created Librarian!")
}

const run = async () => {
    await main();
    //db.close();
}

run();
