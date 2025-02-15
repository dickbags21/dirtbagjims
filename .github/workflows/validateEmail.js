const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Replace 'your.email@example.com' with your actual email address
const email = "your.email@example.com";

if (validateEmail(email)) {
  console.log("The email address is valid.");
} else {
  console.log("The email address is invalid.");
}