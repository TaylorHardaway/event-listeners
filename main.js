console.log("Am I Connected?");

const firstObj = {};

const user = {
  username: 'biz.markie', 
  password: 'add123',
  lovesJavascript: true,
  favoriteNumber: 42,
}


// Dot Notation  
// Get values out of an object
// console.log(user.lovesJavascript);
// console.log(user.username);

// Bracket Notation
const password = 'password';
console.log(user[password]);
console.log(user['username']);


// ASSIGNING VALUES

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince'; // DOT NOTATION
// newUser['password'] = 'abcd1234'; // bracket notation
// newUser[1] = 'abcd1234'; // bracket notation
// console.log(newUser);

const newObject = {
  username: 'Taylor',
  sayHello: function () {
    console.log('${this.username} says Hello!');
  }
}

//newObject.sayHello();

// ITERATE OVER AN OBJECT

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

for (let key in userTwo) {
  console.log(userTwo[key]); //values
  // console.log(userTwo)
}
