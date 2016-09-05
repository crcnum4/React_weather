// var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
//   console.log(name);
// })

// names.forEach((name) => {
//   console.log('arrorwFunc:', name);
// })

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Cliff'));

// var person = {
//   name: 'Cliff',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// }

// person.greet();

function add (a,b) {
  return a+b;
}

var addStatement =  (a, b) => {
  return a + b;
}

var adder = (a, b) => a + b;

console.log(add(1,3));
console.log(add(9,0));
console.log('addStatement');
console.log(addStatement(2, 6));
console.log(addStatement(5, 5));

console.log('adder');
console.log(adder(1, 2));
console.log(adder(12, 8));