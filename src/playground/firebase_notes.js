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
const attributes = firebase.database();

database.ref().set({
  // .ref - short for reference, can reference different parts of the database, no arguments means accessing the root of the database
  // .set - sets the value for the given reference
  // .set does not have to take an object, can take any of the data types can store inside of firebase
  name: "Smudge the Pleco",
  age: 26,
  isSingle: false,
  location: {
    city: "London",
    country: "United Kingdom",
    world: "test"
  }
});

// database.ref().set("This is Pleco's test data");
// - this set will wipe out what has gone before (the original set)

// database.ref("age").set({
//   age: 27
// });
// this set (before passing in 'age') will not just overwrite age but all the other properties above as well

database.ref("age").set(27);
//This will change only the part of the database we want to change
// as called a

database.ref("location/city").set("New York");

database.ref("attributes").set({
  height: 73,
  weight: 150
});

// the data changing is asynchronous, just because have call to set data, does not mean it completes before the next line runs
// our calls to set need to communicate with the firebase servers, have to:
// - Initialise the request off to the servers
// - The servers have to process that request then respond - letting us know if things went well or whether there was a problem

// need  a way to know whether the data has actually changed/failed to change for some reason

// Need to use 'promises' - i.e. so something after a long running task completes
