// Element References
const doctorsContainer = document.getElementById("doctors-container")
const appointmentsContainer = document.getElementById("appointments-container")

// Default tab status
doctorsContainer.style.display = "block";
appointmentsContainer.style.display = "none";

function switchToDoctors() {
    doctorsContainer.style.display="block";
    appointmentsContainer.style.display="none";
    
    const navbarLinks = document.getElementsByClassName('nav-link')
    navbarLinks[0].classList.add("active")
    navbarLinks[1].classList.remove("active")
}

function switchToAppointments() {
    doctorsContainer.style.display="none";
    appointmentsContainer.style.display="block";

    const navbarLinks = document.getElementsByClassName('nav-link')
    navbarLinks[0].classList.remove("active")
    navbarLinks[1].classList.add("active")
}

function showDoctorForm(){
    document.getElementById("docFormContainer").style.display = 'block';
}

// TODO: create CRUD api calls to your api