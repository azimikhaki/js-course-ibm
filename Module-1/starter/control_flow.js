let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
  accessLevel = "full access granted";
} else if (userRole === "manager") {
  accessLevel = "limited access granted";
} else {
  accessLevel = "no access granted";
}

console.log("Access level: " + accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
  if (userRole === "admin") {
    userMessage = "Welcome back, admin.";
  } else {
    userMessage = "Welcome back, valued user.";
  }
} else {
  userMessage = "Please log in to continue.";
}

console.log(userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "Adminstrator";
    break;
  case "manager":
    userCategory = "Manager";
    break;
  case "subscriber":
    userCategory = "Subscriber";
    break;
  default:
    userCategory = "Unknown";
}

console.log(`User category: ${userCategory}`);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log(`Authentication status: ${authenticationStatus}`);