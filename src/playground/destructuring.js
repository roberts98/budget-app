//
//  Object destruction
//

// const person = {
//   name: 'Robert',
//   age : 21,
//   location: {
//     city: 'Cracow',
//     temp: 5
//   }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName)

//
//  Array destruction
//

const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '191497'];
const [street, city, state, zip] = adress;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemDesc, , medium] = item;
console.log(`A medium ${itemDesc} costs ${medium}`);