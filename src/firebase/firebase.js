// require("./firebase/firebase");
// import './firebase/firebase';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, remove, update, child, onValue, off, push, onChildRemoved, onChildChanged, onChildAdded } from "firebase/database";
import { getAuth , GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";



export const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MESUREMENT_ID
};

const app = initializeApp(config);
const database = getDatabase(app);
const db = getDatabase();
const auth = getAuth();


// const GoogleProvider = new auth( GoogleAuthProvider());

// export class GoogleAuthProvider extends Base0AuthProvider {}

const provider = new GoogleAuthProvider();

export { getDatabase, ref, set, get, remove, update, child, onValue, off, push, onChildRemoved, onChildChanged, onChildAdded, auth, provider, onAuthStateChanged, signInWithPopup, signOut, db as default };



// child_removed
// const starCountRef = ref(db, 'expenses');
// onChildRemoved(starCountRef, (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// const starCountRef = ref(db, 'expenses');
// onChildChanged(starCountRef, (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_Added
// const starCountRef = ref(db, 'expenses');
// onChildAdded(starCountRef, (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// var postElement = document.getElementById("postElement");

// var updateStarCount = function(element, value) {
//     return element = value;
// };

// const starCountRef = ref(db, 'expenses');
// onValue(starCountRef, (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses)
// })

// const data = snapshot.val();
// console.log(updateStarCount(postElement, data));

// const dbRef = ref(db);
// get(child(dbRef, 'expenses'))
// .then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// .catch((e) => {
//   console.log('Error fetching data', e);
// });


// remove(ref(db, 'notes/-MmdTUw7cuy5X-dKTZP_'));

// push(ref(db, 'expenses'),{
//     description: 'T&T',
//     note: "This is for lunch",
//     amount: 10000,
//     createdAt: -1000
//   }
// );

// push(ref(db, 'expenses'),{
//   description: 'Phone',
//   note: "for october",
//   amount: 4400,
//   createdAt: 8030923
// }
// );

// push(ref(db, 'expenses'),{
//   description: 'Rent',
//   note: "",
//   amount: 49500,
//   createdAt: -129032
// }
// );

// const firebaseNotes = {
//   notes: {
//     falsejiawe: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     jkdalklafldlk: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// },{
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// set(ref(db, 'notes'), {
//   notes
// });

// var postElement = document.getElementById("postElement");

// var updateStarCount = function(element, value) {
//     return element = value;
// };

// const starCountRef = ref(db, '/users/1');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(updateStarCount(postElement, data));
// });

// const dbRef = ref(db);
// const onValueChange = get(child(dbRef, 'users/1')).then((snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.username} is a ${val.userjob.title} in ${val.userlocation.city}`);
// })
// .catch((e) => {
//   console.log('Error fetching data', e);
// });

// setTimeout(() => {
//   set(ref(db, '/users/1/userage'), {
//     userage: 29
//   })
// }, 3500);

// setTimeout(() => {
//   off(ref(db, '/users/1/userage'), onValueChange)
// }, 7000);

// setTimeout(() => {
//   set(ref(db, '/users/1/userage'), {
//     userage: 30
//   })
// }, 10500);

// set(ref(db, '/users/1/'), {
//   userage: 28
// })

// const db = getDatabase();
// set(ref(db, 'users'), {
//   city: 'New York'
// })

// function writeUserData(userId, name, age, stressLevel, job, location) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     userage: age,
//     userstressLevel: stressLevel,
//     userjob: job,
//     userlocation: location,
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed.', e)
//   });
// }

// writeUserData(
//   1,
//   'Kyosuke Ito',
//   30,
//   6,
//   {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   {
//     city: 'Vancouver',
//     country: 'Canada'
//   }
// )

// var singleRef = ref(db, ('name'));
// remove(singleRef)
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

// var addRef = ref(db, 'users/1/');
// update(addRef, {
//   userstressLevel: 9,
//   'userjob/company': 'Amazon',
//   'userlocation/city': 'Seattle'
// });

// const db = getDatabase();
// set(ref(db, 'users'), {
//   city: 'New York'
// })