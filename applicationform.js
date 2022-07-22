const applicantForm = document.querySelector('#applicant-form');
const msg = document.querySelector(".msg");
const fName = document.querySelector('#firstname');
const lName = document.querySelector('#lastname');
const age = document.querySelector('#age');
const state = document.querySelector('#state');
const tBody = document.querySelector('tbody');


applicantForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const gender = document.querySelector('input[name="gender"]:checked');
    const courses = document.querySelectorAll('input[name="courses"]:checked');

    console.log(courses.length);
    console.log(gender);
    if (gender === null) {
        msg.classList.add("error");
        msg.innerHTML = "Please select your gender";
        setTimeout(() => {msg.classList.remove('error'); msg.innerHTML = ''}, 5000);
    }else if(courses.length > 4 || courses.length < 4){
        msg.classList.add("error");
        msg.innerHTML = "Please select 4 courses only";
        setTimeout(() => {msg.classList.remove('error'); msg.innerHTML = ''}, 5000);
    }else{
        addToTable(gender, courses);
    }

    
    
});

function addToTable(gender, courses){
    document.querySelector('.applicants-table').classList.remove('hide');
    let userCourse = [...courses];
    fName.value[0].toUpperCase();
    const newRow = document.createElement('tr')
    newRow.innerHTML =`
    <td>${fName.value} ${lName.value}</td>
    <td>${age.value} years</td>
    <td>${gender.value}</td>
    <td>${state.value}</td>
    <td>
    <ul>
    ${userCourse.map(course => `<li>${course.value}</li>`).join('')}
    </ul>
    </td>
    `
    tBody.append(newRow);
}

function clearForm() {
    fName.value = '';
    lName.value = '';
    age.value = '';
    gender.value = '';
    state.value = '';
}