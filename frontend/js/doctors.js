// EVERYTHING THAT GOES ON INSIDE THE DOCTORS CONTAINER

const searchDoctorBar = document.getElementById('search-doctor-bar');

let searchType = "ID";

const searchTypeText = document.getElementById('search-type');
const searchDoctorDropdown = document.getElementById('search-doctor-dropdown');

searchTypeText.innerHTML = searchType;

function switchToID() {
    searchType = "ID";
    searchTypeText.innerHTML = searchType;

    const dropdownButtons = searchDoctorDropdown.getElementsByClassName('dropdown-item');
    dropdownButtons[0].classList.add('active');
    dropdownButtons[1].classList.remove('active');
}

function switchToText() {
    searchType = "Text";
    searchTypeText.innerHTML = searchType;

    const dropdownButtons = searchDoctorDropdown.getElementsByClassName('dropdown-item');
    dropdownButtons[0].classList.remove('active');
    dropdownButtons[1].classList.add('active');
}

function searchDoctor() {
    if (searchType == "ID") {
        searchDoctorByID()
    } else {
        searchDoctorByText();
    }
}


// Doctor Table References:
const doctorsTable = document.getElementById("doctors-table-body");
const docIdElement = document.getElementById("docIdInputField");


showAllDocs();




function showDoctorForm() {
    document.getElementById("docFormContainer").style.display = "block";
}



async function showAllDocs() {
    const doctors = await getDoctors()

    for (const key in doctors) {
        if (Object.hasOwnProperty.call(doctors, key)) {
            const doctor = doctors[key];

            const row = document.createElement("tr"); // making a <tr> in js

            for (const field in doctor) {
                if (Object.hasOwnProperty.call(doctor, field)) {
                    const value = doctor[field];

                    const td = document.createElement("td"); //
                    td.innerHTML = value;

                    row.appendChild(td);
                }
            }
            const editTd = document.createElement("td");
            const editDiv = document.createElement('div');
            const editButton = document.createElement('button');
            editButton.classList = ["btn", "btn-outline-warning", "btn-sm"];
            editButton.innerHTML = "Edit";
            editDiv.appendChild(editButton);
            editTd.appendChild(editDiv)

            row.appendChild(editTd)

            doctorsTable.appendChild(row);
        }
    }

    document.getElementById("doctors-table").style.display = "block";
}


async function searchDoctorByID() {
    // TODO: Search By DOC ID
    const docIdValue = searchDoctorBar.value;
    const doctor = await getDoctorById(docIdValue)

    doctorsTable.innerHTML = ""; // empty the doctor table <tbody>

    const newRow = document.createElement("tr");

    for (const field in doctor) {
        if (Object.hasOwnProperty.call(doctor, field)) {
            const data = doctor[field];

            const td = document.createElement("td"); //
            td.innerHTML = data;

            newRow.appendChild(td);
        }
    }

    // Creating Edit Button
    const editTd = document.createElement("td");
    const editDiv = document.createElement('div');
    const editButton = document.createElement('button');
    editButton.classList = ["btn", "btn-outline-warning", "btn-sm"];
    editButton.innerHTML = "Edit";
    editDiv.appendChild(editButton);
    editTd.appendChild(editDiv)

    // Adding Edit button to the row
    newRow.appendChild(editTd)

    //Adding the row to the table
    doctorsTable.appendChild(newRow)
}

async function searchDoctorByText() {
    const genTextValue = searchDoctorBar.value;
    // TODO: General Search
    const doctors = await getDoctorsByText(genTextValue)
    doctorsTable.innerHTML = "";
    
    // Doctors not found
    if (doctors === null) {
        console.log("Doctor not found");
        // in the table, just append a <p> that says "No doctor found"
        let errMss = document.createElement('p');
        errMss.innerHTML = "No Doctor Found"
        doctorsTable.appendChild(errMss)

        return
    }
    else {
        console.log("Doctors found");
        console.log(doctors);
        // Doctor(s) found, Loop through list of doctors
        for (const key in doctors) {
            if (Object.hasOwnProperty.call(doctors, key)) {
                const doctor = doctors[key];

                const row = document.createElement("tr"); // making a <tr> in js

                for (const field in doctor) {
                    if (Object.hasOwnProperty.call(doctor, field)) {
                        const value = doctor[field];

                        const td = document.createElement("td"); //
                        td.innerHTML = value;

                        row.appendChild(td);
                    }
                }
                const editTd = document.createElement("td");
                const editDiv = document.createElement('div');
                const editButton = document.createElement('button');
                editButton.classList = ["btn", "btn-outline-warning", "btn-sm"];
                editButton.innerHTML = "Edit";
                editDiv.appendChild(editButton);
                editTd.appendChild(editDiv)

                row.appendChild(editTd)

                doctorsTable.appendChild(row);
            }
        }

    }
}
