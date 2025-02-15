// Array for storing books
const myLibrary = [];

// Book table
const bookTable = document.querySelector(".table");

// Dialog
const addBookDialog = document.querySelector("dialog.add-book-dialog");
const addBookBtn = document.querySelector("button.add-book");
const addBookSubmitBtn = document.querySelector(".add-book-dialog button.add-book-submit");

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

// Display books in myLibrary array
function displayLibrary() {
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

        readDiv.appendChild(readCheckbox);
        readDiv.appendChild(readLabel);

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

function initializeMyLibrary() {
    // Add 4 initial books to myLibrary
    addBookToLibrary("Elon Musk", "Walter Isaacson", 688, true);
    addBookToLibrary("Filosofi Teras", "Henry Manampiring", 1120, false);
    addBookToLibrary("Sapiens", "Yuval Noah Harari", 1520, true);

    // Add event listeners
    addBookBtn.addEventListener("click", () => {
        addBookDialog.showModal();
    })

    // Display the books
    displayLibrary();
}

initializeMyLibrary();