
function Book(title, author, pages){
    this.title =title;
    this.author = author;
    this.pages = pages;
}

library = []


let book1 = new Book("book qoute", "somebook", 324)
let book2 = new Book("something...", "some author", 311)
let book3 = new Book("sumthin else", "another Author", 233)
let book4 = new Book("and another one", "one more author", 442)

library.push(book1, book2, book3, book4)


Book.prototype.displayInfo = function(){
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nNumber of Pages: ${this.pages}`);
}

function addBook(title, author, pages){
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

function displayAllBooksInfo(library){
    library.forEach(library => library.displayInfo());
}

function searchByTitle(title){
    const book = library.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book){
        book.displayInfo();        
    }
    else{
        console.log("Book not recongnized");
    }
}

function searchByAuthor(author){
    const booksByAuthor = library.filter(book => book.author.toLowerCase() === author.toLowerCase());
    if(booksByAuthor.length > 0){
        booksByAuthor.forEach(book => book.displayInfo());
    }
    else{
        console.log("No author connected to that book");
    }
}

function filterBookPages(){
    const booksPages = library.filter(book => book.pages < 463);
    if (booksPages.length > 0){
        booksPages.forEach (book => book.displayInfo());
    }
    else{
        console.log("Nothing matching that author!");
    }
}

// addBook("somebook", "an author", 987)
// console.log(addBook)
// displayAllBooksInfo(library)
// console.log(displayAllBooksInfo)
// searchByTitle("somebook")
// console.log(searchByTitle)
// searchByAuthor("an author")
// console.log(searchByAuthor)
// filterBookPages(435)
// console.log(filterBookPages)




function Account(accountNumber, balance, owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;    
}

let account1 = new Account(5423,245,"Luffy")
let account2 = new Account(5342,524,"Nami")
let account3 = new Account(8224,8282, "Robin")
let account4 = new Account(93432,234, "Pinky")

Account.prototype.displayInfo = function(){
    console.log(`Name: ${this.owner}\nAccount #: ${this.accountNumber}\nCurrent Account Balance: $${this.balannce}`);    
}

Account.prototype.deposit = function(amount){
    if (amount > 0){
        this.balance += amount;
        console.log(`$${amount} has been deposited. \nNew Balance: $${this.balance}.`);   
}   
    else{
        console.log(`You cant deposit negative money.`);
    }

};

Account.prototype.withdrawal = function(amount){
    if (amount > 0 && amount <= this.balance){
        this.balance -= amount;
        console.log(`$${amount} has been withdrawn. \nNew balance: $${this.balance}.`);
    }
    else if(amount > this.balance){
        console.log(`Insufficient funds for this withdrawal.`);        
    }
    else {
        console.log(`Withdrawal amount must be positive.`);
    }
};

 Account.prototype.calculateCompoundInterest = function(years, annualRate){
    let principal = this.balance;
    let n = 1;
    let r = annualRate;
    let t = years;
    let amount = principal * Math.pow((1+ (r / n)), (n * t));
    let roundedAmount = Math.ceil(amount);

    console.log(`The amount of money accumulated after ${t} years at an annual interest rate of ${r * 100}% is $${roundedAmount},`);
 };

// account1.displayInfo()
// console.log()
// account1.deposit(60)
// console.log()
// account1.displayInfo()
// console.log()
// account1.withdrawal(15)
// console.log()
// account1.displayInfo()
// console.log()
// account1.calculateCompoundInterest(5, 0.05)
// console.log()
// account2.calculateCompoundInterest(5, 0.05)
// console.log()
// account3.calculateCompoundInterest(5, 0.05)
// console.log()
// account4.calculateCompoundInterest(5, 0.05)
// console.log()