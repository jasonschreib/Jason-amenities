//import allAmenities array
import allAmenities from './allAmenities.js';

//connection to the Mongoose database

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

//turn the db connection on
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected');
  // we're connected!
});

//define schema for the photos services
const amenitiesSchema = new mongoose.Schema({
  propertyID: Number,
  amenities: Array
});


//compile the schema into a model
const propertyAmenities = mongoose.model('propertyAmenities', amenitiesSchema);

//function to seed data into the database
async function seedData() {
  try {
    //iterate from 1 to 100
    for (var i = 1; i <= 100; i++) {
        //create a new entry for property id - all props will have the same amenities array (at least for now)
        const doc = new propertyAmenities({
          propertyID: i,
          amenities: allAmenities
        });
        //save this entry - it is async!
        await doc.save();

    }
    //console.log message once all done with seeding
    console.log('finished seeding.');
  } catch (err) {
    console.log('Error with seeding', err);
  }
};

//function to retrieve amenities for a certain property
const retrieveAmenities = function (id) {
  //retrieve document with the property id that is passed in
  return new Promise((resolve, reject) => {
    propertyAmenities.find({ propertyID: id }, function (err, docs) {
      //err check
      if (err) {
        console.log('Error with retrieving amenities');
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });
};



module.exports = {
  seedData,
  retrieveAmenities
};