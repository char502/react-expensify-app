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

// **********************************************
database.ref().on(
  "value",
  (snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
  },
  (error) => {
    console.log("error with data fetching", error);
  }
);

// **********************************************

const onValueChange = database.ref().on(
  // on() allows to listen for something over and over again
  "value", // *** See below, the value event - the data stored at this location
  // able to get the value back from the db initially and then every time it changes
  (snapshot) => {
    console.log(snapshot.val());
  },
  (error) => {
    console.log("error with data fetching", error);
  }
);

// ***Event type: One of the following strings: "value", "child_added", "child_changed", "child_removed", or "child_moved."

setTimeout(() => {
  database.ref("age").set(29);
}, 3500);

setTimeout(() => {
  database.ref().off("value", onValueChange); // will cancel all subscriptions on the given reference
}, 7000);

setTimeout(() => {
  database.ref("age").set(30);
}, 10500);

// *************************************************

// so can get back initial value for the db and every single time it changes
// do not use promises as will onle get a resolve or reject once with a single value, here want to run it over and over again on data changes

// ***************************************
// putting something in .ref(), will determine what data comes back
// ref() will return everything (refers to the root of the db)
// ref('location') returns everything nested inside location
// ref('location/city') will just return the indiv city value i.e. 'Seattle' in this example

// database
//   .ref("location")
//   .once("value") // to fetch a single time *****Returns a promise*****
//   .then(snapshot => {
//     // on snapshot, have access to our data
//     const val = snapshot.val(); // to extract the object
//     console.log(val);
//   })
//   .catch(error => {
//     console.log("error fetching data", error);
//   });
// ************************************

// database
//   .ref()
//   .set({
//     name: "Smudge the Pleco",
//     age: 30,
//     stressLevel: 8,
//     job: {
//       title: "Software developer",
//       company: "Amazon"
//     },
//     location: {
//       city: "Seattle",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!"); // lets you know your changes were successfully synced
//   })
//   .catch((error) => {
//     // function to run when data fails to sync
//     console.log("This failed", error);
//   });

// two ways to fetch data:
// fetch data a single time
// fetch data by subscribing - allows to be ntoifed of changes
