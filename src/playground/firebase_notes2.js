import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD_5S7U1bRWTGmtGToS6AU5ANAnNQ-GzKU",
  authDomain: "expensify-7565b.firebaseapp.com",
  databaseURL: "https://expensify-7565b.firebaseio.com",
  projectId: "expensify-7565b",
  storageBucket: "expensify-7565b.appspot.com",
  messagingSenderId: "130470381618"
};

firebase.initializeApp(config);

const database = firebase.database();

database
  .ref()
  .set({
    name: "Smudge the Pleco",
    age: 26,
    stressLevel: 6,
    job: {
      title: "Software developer",
      company: "Google"
    },
    location: {
      city: "London",
      country: "United Kingdom"
    }
  })
  .then(() => {
    console.log("Data is saved!"); // lets you know your changes were successfully synced
  })
  .catch((error) => {
    // function to run when data fails to sync
    console.log("This failed", error);
  });

// database.ref("isSingle").set(null); // alternative option if want to wipe data in firebase

// database.ref().update({
//   // update has to be called with an object
//   job: "Manager",
//   location: {
//     city: "Reading"
//   }
// });

// *******Update only updates at the root level, so need to be careful with nested objects, will lose all other data stored on the object, i.e. the above will lose country******

// An alternative would be the below:

// database.ref().update({
//   // update has to be called with an object
//   job: "Manager",
//   "location/city": "Boston" // this updates city and leaves country where it is
// });

database.ref().update({
  stressLevel: 9,
  "job/company": "Amazon",
  "location/city": "Seattle"
});

// **************Update also supports promises***************

// set returns a promise, so can continue chaining, after ref and set (as above)

// database.ref("age").set(27);

// database.ref("location/city").set("New York");

// remove issingle: false

// const remSingle = firebase.database().ref("isSingle");

// remSingle
//   .remove()
//   .then(() => {
//     console.log("remove worked!");
//   })
//   .catch(error => {
//     console.log("remove didn't work", error);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("remove worked!");
//   })
//   .catch(error => {
//     console.log("looks like there's a problem!", error);
//   });

// the below would wipe the whole db:
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("remove worked!");
//   })
//   .catch(error => {
//     console.log("looks like there's a problem!", error);
//   });
