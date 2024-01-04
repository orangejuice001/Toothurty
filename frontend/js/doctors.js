// Get doctors table
const doctorsTable = document.getElementById("doctors-table-body");
const docIdElement = document.getElementById("docIdInputField");

const doctors = getDoctors(doctorsTable)

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


function searchByID() {
    // TODO: Search By DOC ID
    const docIdValue = docIdElement.value;
    const doctor = getDoctorById(docIdValue)

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

function generalSearch() {
    const genTextValue = generalTextElement.value;
    // TODO: General Search
    
    
    const doctors = getDoctorsByText()
    doctorsTable.innerHTML = "";

    if (doctors == null) {
        // in the table, just append a <p> that says "No doctor found"
        let errMss = document.createElement('p');
        errMss.innerHTML = "gfjdfg"
        doctorsTable.appendChild(errMss)

        return
    }

    
}