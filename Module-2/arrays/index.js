// ForEach Example: Sending Welcome Emails
function sendWelcomeEmail(email) {
  console.log("Email sent to " + email);
}

const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];

users.forEach((user) => sendWelcomeEmail(user.email));

// Map Example: Converting Temperatures from Celsius to Fahrenheit
const celsiusTemperatures = [0, 20, 37, 100];
const fahrenheitTemperatures = celsiusTemperatures.map(
  (temp) => (temp * 9) / 5 + 32
);
console.log(fahrenheitTemperatures); // Output: [32, 68, 98.6, 212]

// Filter method: example
const products = [
  { name: "laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 250 },
  { name: "Keyboard", price: 50 },
];

function filterProductsByPriceRange(products, minPrice, maxPrice) {
  return products.filter(
    (prod) => prod.price >= minPrice && prod.price <= maxPrice
  );
}

const minPrice = 30;
const maxPrice = 300;

const filteredProducts = filterProductsByPriceRange(
  products,
  minPrice,
  maxPrice
);

filteredProducts.forEach((product) =>
  console.log(`${product.name} is of $${product.price}`)
);

// Reduce method: example
const orderPrices = [50, 30, 25, 40, 15];
const totalOrderValue = orderPrices.reduce((total, price) => total + price, 0);
console.log(`The total value of the order is $${totalOrderValue}`);

// Find method: example
const employees = [
  {
    id: 1,
    name: "Alice",
    Eid: "EMP001",
    "contact details": "alice@example.com",
    Role: "manager",
    Designation: "Project Manager",
    Experience: "5 years",
  },
  {
    id: 2,
    name: "Bob",
    Eid: "EMP002",
    "contact details": "bob@example.com",
    Role: "Engineer",
    Designation: "Software Engineer",
    Experience: "3 years",
  },
  {
    id: 3,
    name: "Sarah",
    Eid: "EMP003",
    "contact details": "sarah@example.com",
    Role: "Analyst",
    Designation: "Data Analyst",
    Experience: "2 years",
  },
];

const employee = employees.find((emp) => emp.id === 2);
console.log(
  `Details of the employee\nname: ${employee.name}\nEid: ${employee.Eid}\nContact details: ${employee["contact details"]}\nRole: ${employee.Role}\nDesignation: ${employee.Designation}\nExperience: ${employee.Experience}`
);
