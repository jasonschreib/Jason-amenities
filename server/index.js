//module for my express server
const db = require('../db/index.js');
const path = require('path');
const express = require('express');
const app = express();
const port = 3005;

//serve up initial html page
app.use(express.static(__dirname + '/../client/dist/index.html'));

//serve route to retrieve amenities data for a specific property id
app.get('/amenities/:propertyID', (req, res) => {
  //call the db retrieveAmenities function and pass in req and res
  db.retrieveAmenities(req.params.propertyID)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(500);
    });
});


//add one final route to take care of any other endpoints (a catch-all) - important to allow sending back of the index.html
app.get('*', (req, res) => {
  //deliver index.html --> this will deliver the bundle too
  const currPath = path.resolve(__dirname + '/../client/dist/index.html');
  res.sendFile(currPath);
});


app.listen(port, () => {
  console.log(`Connected, app listening on port ${port}`);
})