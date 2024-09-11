export const getAnAdult = (users) => {
    // Write your code here
    return users.find(user => user.age >= 18)
  }
  
console.log(getAnAdult([{name: "John", age: 20}, {name: "Jane", age: 18}, {name: "Jim", age: 22}]))