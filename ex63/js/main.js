window.addEventListener('DOMContentLoaded', function() {
    let selDay = document.getElementById('selDay');
    let selMonth = document.getElementById('selMonth');
    let selYear = document.getElementById('selYear');
    
    for (let i = 1; i <= 31; i++) {
        let dayStr = i < 10 ? '0' + i : i;
        selDay.options.add(new Option(dayStr, dayStr));
    }
    
    for (let i = 1; i <= 12; i++) {
        selMonth.options.add(new Option(i, i));
    }
    
    let currentYear = new Date().getFullYear();
    for (let i = 1970; i <= currentYear; i++) {
        selYear.options.add(new Option(i, i));
    }
    
    applyTableHoverEvents();
});

document.getElementById('btnSignUp').addEventListener('click', function() {
    let nameInput = document.getElementById('txtName');
    let emailInput = document.getElementById('txtEmail');
    
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    
    if (name === "") {
        alert("Name cannot be left blank!");
        nameInput.focus();
        return;
    }
    
    if (!validateEmailFormat(email)) {
        alert("Please enter a valid Email address!");
        emailInput.focus();
        return;
    }
    
    let day = document.getElementById('selDay').value;
    let month = document.getElementById('selMonth').value;
    let year = document.getElementById('selYear').value;
    let birthday = formatDate(day, month, year);
    
    let gender = document.querySelector('input[name="gender"]:checked').value;
    
    let hobbyCheckboxes = document.querySelectorAll('input[name="hobby"]:checked');
    let hobbies = getSelectedHobbies(hobbyCheckboxes);
    
    let color = document.querySelector('input[name="favColor"]:checked').value;
    
    let tbody = document.querySelector('#resultTable tbody');
    let newRow = tbody.insertRow();
    
    newRow.innerHTML = '<td>' + name + '</td>' +
                       '<td>' + email + '</td>' +
                       '<td>' + gender + '</td>' +
                       '<td>' + birthday + '</td>' +
                       '<td>' + hobbies + '</td>' +
                       '<td>' + color + '</td>';
    
    applyTableHoverEvents();
});

document.getElementById('btnReset').addEventListener('click', function() {
    document.getElementById('regForm').reset();
    document.getElementById('txtName').value = "";
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtName').focus();
});

function applyTableHoverEvents() {
    let rows = document.querySelectorAll('#resultTable tbody tr');
    rows.forEach(function(row) {
        row.onmouseover = null;
        row.onmouseout = null;
        
        row.onmouseover = function() {
            this.className = "row-hover";
        };
        
        row.onmouseout = function() {
            this.className = "row-normal";
        };
    });
}