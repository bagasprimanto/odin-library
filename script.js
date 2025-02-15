// Array for storing books
const myLibrary = [];

// Book table
const bookTable = document.querySelector(".table");

// Dialog
const addBookDialog = document.querySelector("dialog.add-book-dialog");
const addBookBtn = document.querySelector("button.add-book");
const addBookForm = document.querySelector(".add-book-dialog form");
const addBookCancelBtn = document.querySelector("button.add-book-cancel");

// Constructor for Books
function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

// Add a book to myLibrary array
function addBookToLibrary(title, author, numPages, isRead) {
    const book = new Book(title, author, numPages, isRead);
    myLibrary.push(book);
}

// Clear library display
function clearDisplayLibrary() {
    let books = document.querySelectorAll(".book");
    let arrBooks = Array.from(books);

    for (let book of arrBooks) {
        book.remove();
    }
}

// Display books in myLibrary array
function displayLibrary() {

    // Clear display library table
    clearDisplayLibrary();

    // Loop into each book
    for (let i = 0; i < myLibrary.length; i++) {

        //Create book div
        let bookDiv = document.createElement("div");

        // Set div class = book
        bookDiv.classList.add("book");
        // Set attribute data-attribute = arrayIndex
        bookDiv.setAttribute("data-attribute", i);

        // Create title div
        let titleDiv = document.createElement("div");
        // Set div class = title
        titleDiv.classList.add("title");
        // Input title into div
        titleDiv.textContent = myLibrary[i].title;
        // Append to bookDiv
        bookDiv.appendChild(titleDiv);

        // Create author div
        let authorDiv = document.createElement("div");
        authorDiv.classList.add("author");
        authorDiv.textContent = myLibrary[i].author;
        bookDiv.appendChild(authorDiv);

        // Create num-pages div
        let numPagesDiv = document.createElement("div");
        numPagesDiv.classList.add("num-pages");
        numPagesDiv.textContent = myLibrary[i].numPages;
        bookDiv.appendChild(numPagesDiv);

        // Create read div with checkbox
        let readDiv = document.createElement("div");
        readDiv.classList.add("read");

        // Create checkbox
        let readCheckbox = document.createElement("input");
        readCheckbox.setAttribute("type", "checkbox");
        readCheckbox.id = `${i}-read`;

        let readLabel = document.createElement("label");
        readLabel.setAttribute("for", readCheckbox.id);

        // If read, tick the checkbox
        if (myLibrary[i].isRead) {
            readCheckbox.checked = true;
            readLabel.textContent = "Read";
        } else {
            readLabel.textContent = "Unread";
        }

        // Append read div with checkbox and label
        readDiv.appendChild(readCheckbox);
        readDiv.appendChild(readLabel);

        // Append read cell into book row
        bookDiv.appendChild(readDiv);

        // Create delete button div
        let deleteDiv = document.createElement("div");
        deleteDiv.classList.add("delete-btn");

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("data-attribute", i);
        deleteBtn.textContent = "Delete";
        deleteDiv.appendChild(deleteBtn);

        bookDiv.appendChild(deleteDiv);

        // Append row to Books list
        bookTable.appendChild(bookDiv);
    }
}

// Add a new book to array and display updated library
function addBookSubmit(event) {
    event.preventDefault(); // We don't want to submit this form

    // Get the values of the input elements
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let numPages = document.querySelector("#num-pages");
    let isRead = document.querySelector("#read");

    // Add Book to Array
    addBookToLibrary(title.value, author.value, numPages.value, isRead.checked);

    // Clear input fields
    title.value = "";
    author.value = "";
    numPages.value = "";
    isRead.checked = false;

    // Close dialog
    addBookDialog.close();

    // Display the books
    displayLibrary();
}

// Initialize myLibrary array
function initializeMyLibrary() {
    // Add 4 initial books to myLibrary
    addBookToLibrary("Elon Musk", "Walter Isaacson", 688, true);
    addBookToLibrary("Filosofi Teras", "Henry Manampiring", 1120, false);
    addBookToLibrary("Sapiens", "Yuval Noah Harari", 1520, true);
    addBookToLibrary("Bumi Manusia", "Pramoedya Ananta Toer", 330, true);
}

// Initialize event listeners
function initializeEventListeners() {
    // Add event listeners

    // Add event listener for showing modal
    addBookBtn.addEventListener("click", () => {
        addBookDialog.showModal();
    })

    // Add event listener for closing modal
    addBookCancelBtn.addEventListener("click", () => {
        addBookDialog.close();
    })

    // Add event listener for adding a book
    addBookForm.addEventListener("submit", addBookSubmit);
}

// Initialize web page
function initialize() {
    // Initialize myLibrary array
    initializeMyLibrary();

    // Initialize event listeners
    initializeEventListeners();

    // Display library
    displayLibrary();
}

// Initialize My Library web page
initialize();