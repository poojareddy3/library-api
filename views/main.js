const BASE_URL = `https://library-crud-api.herokuapp.com/api/`;

const button = document.querySelector("#borrBooks");
const display = document.querySelector(".display");
const booksbtn = document.querySelector("#books");
const usersbtn = document.querySelector("#users")

// fetch('https://library-crud-api.herokuapp.com/api/')
// .then(res => res.json())
// .then(res => console.log(res));

button.addEventListener('click', async () => {
    try {
        let response = await axios.get(`${BASE_URL}borrowInfo`);
        console.log(response.data.borrowedBooks);
        const getInfo = response.data.borrowedBooks;
        getData(getInfo);
    } catch (error) {
        console.log(error);
    }
})

booksbtn.addEventListener('click', async () => {
    try {
        let response = await axios.get(`${BASE_URL}books`);
        console.log(response.data.books);
        const getBooks = response.data.books;
        getBooksData(getBooks);
    } catch (error) {
        console.log(error);
    }
})

usersbtn.addEventListener('click', async () => {
    try {
        let response = await axios.get(`${BASE_URL}users`);
        console.log(response.data.users);
        const getUsers = response.data.users;
        getUsersData(getUsers);
    } catch (error) {
        console.log(error);
    }
})

function getData(arr){
    display.innerHTML=" ";
    for(let i = 0; i < arr.length; i++){
        const borrowBook = document.createElement("div");
        borrowBook.innerHTML += `<h4>Title: <span style="color:#fff">  ${arr[i].borrowBook_id.title} </span></h4>`;
        const user = document.createElement("div");
        user.innerHTML += `<h4>User Name:<span style="color:#fff">   ${arr[i].user_id.uname}</span></h4>`;
        const issueDate = document.createElement("div");
        issueDate.innerHTML += `<h4> IssueDate:<span style="color:#fff">  ${arr[i].issueDate} </span></h4>`;
        const dueDate = document.createElement("div");
        dueDate.innerHTML += `<h4> DueDate: <span style="color:#fff">  ${arr[i].dueDate} </span></h4><br> <br>****************************<br>`;

        display.append(borrowBook, user, issueDate, dueDate);
    }
    
}

function getBooksData(arr){
    display.innerHTML = " ";
    for(let i = 0; i < arr.length; i++){
        const ISBN = document.createElement("div");
        ISBN.innerHTML += `<h4> ISBN: <span style="color:#fff"> ${arr[i].ISBN} </span> </h4>`;
        const title = document.createElement("div");
        title.innerHTML += `<h4> Title:  <span style="color:#fff">${arr[i].title}</span> </h4>`;
        const author = document.createElement("div");
        author.innerHTML += `<h4> Author:<span style="color:#fff">${arr[i].author.first_name} ${arr[i].author.last_name} </span> </h4>`;
        const publisher = document.createElement("div");
        publisher.innerHTML += `<h4> Publisher: <span style="color:#fff"> ${arr[i].publisher_name}</span> </h4>`;
        const yearPublished = document.createElement("div");
        yearPublished.innerHTML += `<h4> Year Published:<span style="color:#fff"> ${arr[i].year_published} </span> </h4><br> <br>****************************<br>`;
     display.append(ISBN, title, author, publisher, yearPublished);
}
}

function getUsersData(arr){
    display.innerHTML = " ";
    for(let i = 0; i < arr.length; i++){
        const uname = document.createElement("div");
        uname.innerHTML += `<h4> Name: <span style="color:#fff"> ${arr[i].uname} </span> </h4>`;
        const address = document.createElement("div");
        address.innerHTML += `<h4> Address:  <span style="color:#fff">${arr[i].address.street},${arr[i].address.city},${arr[i].address.state},${arr[i].address.zip}</span> </h4>`;
        const phone = document.createElement("div");
        phone.innerHTML += `<h4> Phone:<span style="color:#fff">${arr[i].phone} </span> </h4>`;
        const email = document.createElement("div");
        email.innerHTML += `<h4> Email: <span style="color:#fff"> ${arr[i].email}</span> </h4><br> <br>****************************<br>`;
        
     display.append(uname, address, phone, email);
}
}


