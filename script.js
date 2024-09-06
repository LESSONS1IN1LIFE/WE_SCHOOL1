document.addEventListener('DOMContentLoaded', function() {
    const teacherForm = document.getElementById('teacherForm');
    const teacherList = document.getElementById('teacherList');
    const classForm = document.getElementById('classForm');
    const classList = document.getElementById('classList');

    // Add teacher
    teacherForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const teacherName = document.getElementById('teacherName').value;
        const teacherSubject = document.getElementById('teacherSubject').value;
        const teacherEmail = document.getElementById('teacherEmail').value;

        const teacherItem = document.createElement('li');
        teacherItem.textContent = `${teacherName} - ${teacherSubject} - ${teacherEmail}`;
        teacherList.appendChild(teacherItem);

        teacherForm.reset();
    });

    // Add class
    classForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const className = document.getElementById('className').value;
        const classGrade = document.getElementById('classGrade').value;

        const classItem = document.createElement('li');
        classItem.textContent = `${className} - ${classGrade}`;
        classList.appendChild(classItem);

        classForm.reset();
    });
});