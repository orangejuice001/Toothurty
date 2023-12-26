// Import Libraries
const express = require('express')

// Import Data
const doctors = require('../data/doctors.json');
const appointments = require('../data/appointments.json');

// Creating Appointment Router
const appointmentRouter = express.Router();


//All Doctors and their appointments
appointmentRouter.get("/", (req, res) => {
    res.send(appointments)
})

// Exporting Appointment Router
module.exports = appointmentRouter;