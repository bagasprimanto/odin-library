// Array for storing books
const myLibrary = [];

// Constructor for Books
function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, numPages, isRead) {
    const book = new Book(title, author, numPages, isRead);

    myLibrary.push(book);
}

function initializeMyLibrary() {
    addBookToLibrary("Elon Musk", "Walter Isaacson", 688, true);
    addBookToLibrary("Filosofi Teras", "Henry Manampiring", 1120, false);
    addBookToLibrary("Sapiens", "Yuval Noah Harari", 1520, true);
    addBookToLibrary("Bumi Manusia", "Pramoedya Ananta Toer", 330, true);
}

function displayLibrary() {

}