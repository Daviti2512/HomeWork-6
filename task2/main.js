document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationDate').value = getDate();
    
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valid = true;
        
        const firstName = document.getElementById('firstName').value;
        if (!firstName) {
            document.getElementById('firstNameError').textContent = '';
            valid = false;
        } else {
            document.getElementById('firstNameError').textContent = '';
        }
        
        const lastName = document.getElementById('lastName').value;
        if (!lastName) {
            document.getElementById('lastNameError').textContent = '';
            valid = false;
        } else {
            document.getElementById('lastNameError').textContent = '';
        }
        
        const idNumber = document.getElementById('idNumber').value;
        if (!/^\d{11}$/.test(idNumber)) {
            document.getElementById('idNumberError').textContent = '';
            valid = false;
        } else {
            document.getElementById('idNumberError').textContent = '';
        }
        
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            document.getElementById('emailError').textContent = '';
            valid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }
        
        if (valid) {
            alert('Registration successful!');
        }
    });
});

function getDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}:${month}:${year}`;
}
