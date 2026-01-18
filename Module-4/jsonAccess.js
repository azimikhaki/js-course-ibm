// Browser version
// fetch("books.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach((book) => console.log(book.title));
//   })
//   .catch((error) => console.error("Error fetching JSON:", error));

// OR:
// async function fetchBooks() {
//   const res = await fetch('books.json')
//   const data = await res.json()
//   console.log(data);
// }

// fetchBooks()

// Node.js version
// import fs from "fs";

// const books = JSON.parse(fs.readFileSync("./books.json", "utf-8"));
// console.log(books);

// Now lets's build a small Local API without any server

const apiURL = "https://jsonplaceholder.typicode.com";

// In a static file (books.json) only GET method is working properly
async function getBooks() {
  const res = await fetch("books.json");
  const data = await res.json();
  console.log(data);
}

async function getOneItem(id) {
  const res = await fetch(`${apiURL}/posts/${id}`);
  const data = await res.json();
  console.log(data);
}

async function postBook() {
  const res = await fetch(`${apiURL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Harry Poter",
      author: "J.K Rowlings",
      year: 2019,
    }),
  });
  const data = await res.json();
  console.log(data);
}

async function putBook(id) {
  const res = await fetch(`${apiURL}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Compound Effect",
      author: "Darn Hardy",
      year: 2011,
      userId: 201,
    }),
  });
  const data = await res.json();
  console.log(data);
}

async function patchBook(id) {
  const res = await fetch(`${apiURL}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "The Kite Runner",
    }),
  });
  const data = await res.json();
  console.log(data);
}

async function deleteBook(id) {
  const res = await fetch(`${apiURL}/posts/${id}`, {
    method: "DELETE",
  });
  if (res.ok) console.log(`data with id ${id} deleted!`);
}

// GET method
getBooks();
getOneItem(100);

// POST method
postBook();

// PUT method
putBook(31);

// PATCH method
patchBook(45);

// DELETE method
deleteBook(7);
