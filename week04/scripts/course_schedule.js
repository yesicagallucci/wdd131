let course = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {section:"4",
        instructor: "Jason Blazzard",
        enrolled: 43 },
        {section:"3",
        instructor: "joe Doe",
        enrolled: 36 },
            
    ]
}

function displayCourseInfo(course) {
    const nameElement = document.getElementById("courseName");
    const codeElement = document.getElementById("courseCode");
    const creditsElement = document.getElementById("courseCredits");

    nameElement.textContent = course.title;
    codeElement.textContent = course.code;
    creditsElement.textContent = course.credits;

}

function displaySections(course) {
    const tableBody = document.querySelector("#sections tbody");
    tableBody.innerHTML = "";
    for(let section of course.sections) {
        const row = document.createElement("tr");

        const sectionCell = document.createElement("td");
        const instructorCell = document.createElement("td");
        const enrolledCell = document.createElement("td");

        sectionCell.textContent = section.section;
        instructorCell.textContent = section.instructor;
        enrolledCell.textContent = section.enrolled;

        row.appendChild(sectionCell);
        row.appendChild(instructorCell);
        row.appendChild(enrolledCell);

        tableBody.appendChild(row);


    }
}

displayCourseInfo(course);
displaySections(course);
