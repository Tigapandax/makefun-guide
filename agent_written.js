// Agent authored utility script
// Demonstrates agent's own code contribution
function greet(name) {
  return `Hello, ${name}!`;
}

// Simple example usage
const user = "World";
console.log(greet(user));

// Export for potential import
module.exports = { greet };
