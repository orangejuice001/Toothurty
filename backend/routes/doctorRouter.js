// Import Libraries
const express = require("express");

// Import Data
const doctors = require("../data/doctors.json");
const appointments = require("../data/appointments.json");

// create doctor router
const doctorRouter = express.Router();

//
doctorRouter.get("/", (req, res) => {
    res.send(doctors);
});

// Search for Doctors using a query
doctorRouter.get("/search", (req, res) => {
    const searchQuery = req.query["q"].toLowerCase();

    let searchResults = [];

    for (const key in doctors) {
        if (Object.hasOwnProperty.call(doctors, key)) {
            const doctor = doctors[key];

            let found = false;
            // Check in every field of Doctor JSON
            if (doctor["name"].toLowerCase().includes(searchQuery)) {
                found = true;
            } else if (doctor["speciality"].toLowerCase().includes(searchQuery)) {
                found = true;
            } else if (doctor["phone"].toLowerCase().includes(searchQuery)) {
                found = true;
            } else if (doctor["email"].toLowerCase().includes(searchQuery)) {
                found = true;
            } else if (doctor["address"].toLowerCase().includes(searchQuery)) {
                found = true;
            }

            // If a match is found, adding it to result list
            if (found) {
                searchResults.push(doctor);
            }
        }
    }


    if (searchResults.length > 0) {
        res.send(searchResults);
    } else {
        res.status(404).send("No results found");
    }
});

// Gives Doctor information based on doctor id
doctorRouter.get("/:doctorId", (req, res) => {
    const inputDocId = req.params.doctorId;
    let result = []
    let found = false;
    for (const key in doctors) {
        if (Object.hasOwnProperty.call(doctors, key)) {
            const doctor = doctors[key];
            
            if (key === inputDocId) {
                found = true;
                result.push(doctor);
                break;
            }
        }
    }
    if (result.length > 0) {
        res.send(result)
    } else {
        res.status(404).send("No results found")
    }
});

//Shows appointments only for a particular doctor
doctorRouter.get("/:doctorId/appointments", (req, res) => {
    let doctorId = req.params.doctorId;

    if (doctors[doctorId] != null) {
        const doctorAppointments = Object.values(appointments).filter(
            (appointment) => appointment.doctorId === doctorId
        );

        // Available appointments for doctor
        if (doctorAppointments.length > 0) {
            res.send(doctorAppointments);
        } else {
            res.status(404).send("No appointments found for this doctor");
        }
    } else {
        res.send("Doctor not found");
    }
});

// export doctor router
module.exports = doctorRouter;
