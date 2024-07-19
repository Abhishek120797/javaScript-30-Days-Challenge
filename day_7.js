// Day 7: Objects

// Activity 1: Object creation and object

// Task 1:

const book = {
  title: "javascript",
  author: "Hitesh Choudhary",
  year: 2023,
};

console.log(book);

// Task 2:

console.log("Title : ", book.title);
console.log("Auther : ", book.author);

// Activity 2: Object methods

// Task 3:

book.getString = function () {
  return `Title of book is ${book.title} and author of this book is ${book.author}`;
};
console.log(book);
console.log(book.getString());

// Task 4:

book.updateYear = function (year) {
  book.year = year;
};

book.updateYear(2024);

console.log(book);
// Activity 3: Nested Object

// Task 5:

const library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ],
};

console.log(library);

// Task 6:

console.log(`Library name : ${library.name}`);

library.books.forEach((book) => {
  console.log(book.title);
});

// Activity 4: The this Keyword

// Task 7:

book.getBookYear = function () {
  return `Title of book is ${this.title} witch is published in ${this.year}`;
};

console.log(book.getBookYear());

// Activity 5: Object Iteration

// Task 8:

for (let prop in book) {
  console.log(`properites -> ${prop} and value -> ${book[prop]}`);
}

// Task 9:

console.log(Object.keys(book));
console.log(Object.values(book));
