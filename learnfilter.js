const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, genre: "Fiction" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, genre: "Fiction" },
  { title: "1984", author: "George Orwell", yearPublished: 1949, genre: "Dystopian" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, genre: "Fiction" },
  { title: "Brave New World", author: "Aldous Huxley", yearPublished: 1932, genre: "Dystopian" },
  { title: "Moby Dick", author: "Herman Melville", yearPublished: 1851, genre: "Adventure" }
];

function filterByGenre(books, genre) {
  return books.filter(book => book.genre === genre);
}

const fictionBooks = filterByGenre(books, "Fiction");
console.log(fictionBooks);


function filterByYear(books, year) {
  return books.filter(book => book.yearPublished < year);
}

const booksBefore1950 = filterByYear(books, 1950);
console.log(booksBefore1950);