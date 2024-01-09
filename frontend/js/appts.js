// EVERYTHING THAT GOES IN THE APPOINTMENT CONTAINER

// Appointment table references
const apptTableBody = document.getElementById("appointment-table-body")

async function showAllAppts() {
    const appointments = await getAllAppointments();
    console.log(appointments);

    for (const key in appointments) {
        if (Object.hasOwnProperty.call(appointments, key)) {
            const eachAppt = appointments[key];

            const newRow = document.createElement("tr");

            for (const field in eachAppt) {
                if (Object.hasOwnProperty.call(eachAppt, field)) {
                    const data = eachAppt[field];

                    const cell = document.createElement("td");
                    cell.innerHTML = data;

                    newRow.appendChild(cell);
                }
            }

            const editTd = document.createElement("td");
            const editDiv = document.createElement('div');
            const editButton = document.createElement('button');
            editButton.classList = ["btn", "btn-outline-warning", "btn-sm"];
            editButton.innerHTML = "Edit";
            editDiv.appendChild(editButton);
            editTd.appendChild(editDiv)

            newRow.appendChild(editTd)

            apptTableBody.appendChild(newRow);

        }
    }
    document.getElementById("appointment-table").style.display = "block";
}