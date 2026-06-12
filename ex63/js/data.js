const initialMembers = [
    { name: "John", email: "john@gmail.com", gender: "Man", birthday: "02/02/1990", hobbies: "Reading", color: "Yellow" },
    { name: "Peter", email: "peter@gmail.com", gender: "Man", birthday: "01/01/1992", hobbies: "chat, reading", color: "Red" },
    { name: "Lucy", email: "lucy@gmail.com", gender: "Woman", birthday: "01/02/2005", hobbies: "Listening, Chat", color: "Violet" }
];

function formatDate(day, month, year) {
    let formattedMonth = month < 10 ? '0' + month : month;
    return day + '/' + formattedMonth + '/' + year;
}

function validateEmailFormat(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function getSelectedHobbies(checkboxElements) {
    let checkedHobbies = [];
    checkboxElements.forEach(function(chk) {
        checkedHobbies.push(chk.value);
    });
    return checkedHobbies.join(', ');
}