async function getDoctors(doctorsTable) {
    const response = await fetch("http://localhost:3000/doctors/"); // response
    const doctors = await response.json(); //

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
