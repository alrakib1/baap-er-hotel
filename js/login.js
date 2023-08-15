// step-1: add click event handler submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2 : get input of email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step 3 : get password 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // step 4: verify email and password and check valid user or not
    if(email ==='sontan@baap.com' && password ==='secret'){
        window.location.href='bank.html'
    }else{
        alert('invalid user')
    }
})

