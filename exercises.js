const users = [
  {
    id: 1,
    name: "Ali",
    lastName: "Ameri",
    roles: ["student"],
    age: 18,
    scores: { english: 10, math: 17, physics: 5 },
  },
  {
    id: 2,
    name: "Ahmad",
    lastName: "Hosseini",
    roles: ["student", "admin"],
    age: 16,
    scores: { english: 18, math: 12, physics: 20 },
  },
  {
    id: 3,
    name: "Morteza",
    lastName: "Shirbeygi",
    roles: ["student", "admin", "guest"],
    age: 17,
    scores: { english: 13, math: 20, physics: 15 },
  },
  {
    id: 4,
    name: "Armin",
    lastName: "Torkashvand",
    roles: ["student", "admin"],
    age: 15,
    scores: { english: 12, math: 17, physics: 20 },
  },
  {
    id: 5,
    name: "Mehdi",
    lastName: "Alinejad",
    roles: ["student", "admin"],
    age: 20,
    scores: { english: 20, math: 17, physics: 13.5 },
  },
  {
    id: 6,
    name: "Hossein",
    lastName: "Zenderoh",
    roles: ["student", "admin", "guest"],
    age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
  },
];
// ------------------------------------------------------------------------------------------
// Function to sort this array from younger to older

// function sortByAge(Users){
//     Users.sort((a, b) => (a.age > b.age) ? 1 : -1)
//     return Users
// }
// console.log(sortByAge(users))






// ------------------------------------------------------------------------------------------
// Function to detect the role of user and return a list of users that have specific role (dy
//namic argument)

// function detectByRole(role){
//     return users.filter(user => (user.roles).includes(role))
// }

// console.log(detectByRole("guest"))






// ------------------------------------------------------------------------------------------
// Function for calculate average of each person and sort from top to bottom


// get the average of any given array of numbers
function getAverage(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    let avg = total / array.length;
    return avg.toFixed(2);
  }

// add the average of each user to them as an object key
function addAverage(Users) {
  Users.forEach((user) => {
    user.average = getAverage(Object.values(user.scores));
  });
  return Users
}

// sort the given array of users based on their overall average scores
function sortByAverage(Users) {
    addAverage(Users)
    Users.sort((a, b) => (b.average > a.average) ? 1 : -1);
    return Users
}


// console.log(sortByAverage(users))







// ------------------------------------------------------------------------------------------
// Function that return status of each student "passed" or "failed"
// for example "Hossein Zenderoh: passed"


function passed(Users){
    Users.forEach(user => {
        if(user.average >= 15){
            user.passed = true
        }else{
            user.passed = false
        }
    });
    return Users
}

// passed(users)
// console.log(users)

// ------------------------------------------------------------------------------------------






// ------------------------------------------------------------------------------------------

const user = {
  id: 6,
  name: "Hossein",
  lastName: "Zenderoh",
  roles: ["student", "admin"],
  age: 15,
  scores: { english: 10, math: 19.5, physics: 14 },
};
// Function that add a new course score and return the new user object (dynamic argument)

function addNewCourse(course = "new course", score = "not declared yet"){
    (user.scores).course = score
    return user
}

// addNewCourse("Python", 18)
// console.log(user)

// ------------------------------------------------------------------------------------------
// Function that add a new role and check if his age is under 18 add status: "veryyoung" to that object and return the object

function addRole(role){
    (user.roles).push(role)
    if(user.age < 18){
        user.status = "very young"
    }
    return user
}

console.log(addRole("Guest"))

// Convert this object to array and after that add (fatherName: "ali") and then convert it to
// object
// ------------------------------------------------------------------------------------------

// With Date 2006-10-23
let date = new Date(2006, 10, 23)

// Show => 23/10/2006
let simple_date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
// console.log(simple_date)

// Show => 2006-10-23 00:00:00
// console.log(simple_date + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())

// Show => timestamp of this time
// console.log(date.getTime())

// Show => 23 October 2006
let Oct23_2006 = new Date((36 * 12 * 31 * 24 * 3600 * 1000) + (2 * 31 * 24 * 3600 * 1000) + (21 * 24 * 3600 * 1000))

// console.log(Oct23_2006.getDate() + " " + Oct23_2006.getMonth() + " " + Oct23_2006.getFullYear())

// Convert it time to persian calendar just with js method
let localDate = Oct23_2006.toLocaleDateString('fa-IR');

// console.log(localDate)