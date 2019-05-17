require('dotenv').config();
const express = require('express');
const massive = require('massive');
const peopleController = require('./controllers/people.contoller');

//ENV Variables
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

//Server Setup
const app = express();

//Middleware
app.use(express.json());

//Database Connection
massive(CONNECTION_STRING)
    .then(dbInstance => {
    app.set('db', dbInstance);
    console.log('🐘 Database Connected 🐘');
    })
    .catch(error => {
        if (error) throw error;
    });

//End Points (gates)
app.post('/api/addPerson', peopleController.addPerson);

//App Listening
app.listen(SERVER_PORT, () => {
    console.log('🔥 Server is Running 🔥');
});