import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }, (err) => {
//   console.log('something went wrong');
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }, (err) => {
//   console.log('something went wrong');
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   }, (err) => {
// //     console.log('something went wrong: ', err);
// //   });

// // database.ref('expenses').push({
// //   description: 'North Fish',
// //   note: 'ryba z dodatkami',
// //   amount: 13.95,
// //   createdAt: 19500
// // });

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // }, (err) => {
// //   console.log('Cannot fetch the data from the database ', err);
// // });

// // database.ref()
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((err) => {
// //     console.log('something went wrong while fetching data: ', err);
// //   });

// // database.ref().set({
// //   name: 'Robert',
// //   age: 20,
// //   stressLevel: 3,
// //   job: {
// //     title: 'junior web developer',
// //     company: 'rsoft'
// //   },
// //   isSingle: true,
// //   location: {
// //     city: 'Cracow',
// //     country: 'PL'
// //   }
// // }).then(() => {
// //   console.log('data is saved');
// // }).catch((err) => {
// //   console.log('this failed: ', err);
// // });

// // database.ref().update({
// //   name: 'Arek',
// //   age: 22
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Warsaw'
// // }).then(() => {
// //   console.log('data was updated correctly');
// // }).catch((err) => {
// //   console.log('error while updating data: ', err);
// // });

// // database.ref('attributes').set({
// //     height: 185,
// //     weigth: 76
// // }).then(() => {
// //   console.log('data saved');
// // }).catch((err) => {
// //   console.log('something went wrong: ', err);
// // });

// // database.ref('isSingle').remove()
// //   .then(() => {
// //     console.log('removed succesfully');
// //   }).catch((err) => {
// //     console.log('something went wrong while removing data ', err);
// //   });