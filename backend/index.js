// Libraries
const express = require('express')

// Data

// Import Routers
const doctorRouter = require('./routes/doctorRouter')
const appointmentRouter = require('./routes/appointmentRouter')

// Create express app
const app = express()

// Mount subrouters to router
app.use('/doctors', doctorRouter)
app.use('/appointments', appointmentRouter)


// Ping on console
app.listen(3000, () => {
    console.log("Listening on port 3000");
})