//Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('firstName', 'Rahul')
localStorage.setItem('lastName', 'Sahu')
localStorage.setItem('age', 20)
localStorage.setItem("country", "india")
localStorage.setItem('city', "kolkata")



//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys.
//Store the student object in your browser localStorage.

let student = { firstName: "Rahul", lastName: "Sahu", age: "28", skills: "javaScript", country: "india" }
window.localStorage.setItem("student", JSON.stringify(student));

let newObject = window.localStorage.getItem("student");
console.log(JSON.parse(newObject));


//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense,
//accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description
//and expenses is also a set of expenses and its description.