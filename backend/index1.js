const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory data store (replace this with a database in a production environment)
let dentists = [];
let appointments = [];

// Create (C): Add a new dentist
app.post('/dentists', (req, res) => {
    const newDentist = req.body;
    dentists.push(newDentist);
    res.json(newDentist);
});

// Read (R): Get a list of dentists
app.get('/dentists', (req, res) => {
    res.json(dentists);
});

// Read (R): Get details of a specific dentist
app.get('/dentists/:dentistId', (req, res) => {
    const dentistId = req.params.dentistId;
    const dentist = dentists.find(d => d.id === dentistId);
    if (dentist) {
        res.json(dentist);
    } else {
        res.status(404).json({ error: 'Dentist not found' });
    }
});

// Update (U): Update dentist information
app.put('/dentists/:dentistId', (req, res) => {
    const dentistId = req.params.dentistId;
    const updatedDentist = req.body;
    const index = dentists.findIndex(d => d.id === dentistId);
    if (index !== -1) {
        dentists[index] = { ...dentists[index], ...updatedDentist };
        res.json(dentists[index]);
    } else {
        res.status(404).json({ error: 'Dentist not found' });
    }
});

// Delete (D): Remove a dentist
app.delete('/dentists/:dentistId', (req, res) => {
    const dentistId = req.params.dentistId;
    dentists = dentists.filter(d => d.id !== dentistId);
    res.json({ message: 'Dentist deleted successfully' });
});

// Create (C): Book an appointment
app.post('/appointments', (req, res) => {
    const newAppointment = req.body;
    appointments.push(newAppointment);
    res.json(newAppointment);
});

// Read (R): Get a list of appointments
app.get('/appointments', (req, res) => {
    res.json(appointments);
});

// Read (R): Get details of a specific appointment
app.get('/appointments/:appointmentId', (req, res) => {
    const appointmentId = req.params.appointmentId;
    const appointment = appointments.find(a => a.id === appointmentId);
    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404).json({ error: 'Appointment not found' });
    }
});

// Update (U): Update appointment information
app.put('/appointments/:appointmentId', (req, res) => {
    const appointmentId = req.params.appointmentId;
    const updatedAppointment = req.body;
    const index = appointments.findIndex(a => a.id === appointmentId);
    if (index !== -1) {
        appointments[index] = { ...appointments[index], ...updatedAppointment };
        res.json(appointments[index]);
    } else {
        res.status(404).json({ error: 'Appointment not found' });
    }
});

// Delete (D): Cancel an appointment
app.delete('/appointments/:appointmentId', (req, res) => {
    const appointmentId = req.params.appointmentId;
    appointments = appointments.filter(a => a.id !== appointmentId);
    res.json({ message: 'Appointment canceled successfully' });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
