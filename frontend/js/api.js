/**
 * API call to endpoint /doctors
 * Gives list of all doctors in database
 * @returns JSON
 */
async function getDoctors() {
    const response = await fetch("http://localhost:3000/doctors/"); // response
    const doctors = await response.json();
    return doctors
}

/**
 * API call to endpoint /doctors/{doctorid}
 * @param {integer} inputDocId - Doctor ID
 * @returns JSON/null
 */
async function getDoctorById(inputDocId) {
    const response = await fetch(`http://localhost:3000/doctors/${inputDocId}`) // Doctor Information based on ID

    if (response.ok) {
        const docInfo = await response.json();
        return docInfo
    }

    return null;
}

/**
 * Gives
 * @param {string} inputGenText 
 * @returns JSON/null
 */
async function getDoctorsByText(inputGenText) {
    const response = await fetch(`http://localhost:3000/doctors/search?q=${inputGenText}`); // Query text

    if (response.ok) {
        const doctors = await response.json
        return doctors
    }

    return null
}

