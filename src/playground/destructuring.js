//
// object descructuring
//


// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 80
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Ememy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name:publisherName = 'Self-published'} = book.publisher

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, small, medium, large] = item;

// console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${itemName} costs ${medium}`);