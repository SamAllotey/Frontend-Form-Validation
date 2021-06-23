const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
})

function checkInputs() {
    //get values from input
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === ''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if(!ValidateEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        //add success class
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        //show error
        //add error class
        setErrorFor(password, 'Password cannot be blank');
    } else {
        //add success class
        setSuccessFor(password);
    }

    if (password2Value === ''){
        //show error
        //add error class
        setErrorFor(password2, 'Verify password as above');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match')
    } else {
        //add success class
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function ValidateEmail(mail)   {  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}

