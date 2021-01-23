console.log("Am I Connected?");

function saysHelloToUser (user) {
  return 'Hello ${user}!';
}

function saysGoodbyeToUser(user) {
  return 'Goodbye ${user}!';
}

function createGreeting(user, cb) {
  return cb(user);
}

console.log(createGreeting('Dan', saysHelloToUser)); // 'Hello Dan!
console.log(createGreeting('Dan', saysGoodbyeToUser)); // 'Goodbye Dan!
