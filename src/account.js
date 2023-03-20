const form = document.getElementById('form')
const login = document.getElementById('login')
const username = document.getElementById('username')
const password = document.getElementById('password')
const number = document.getElementById('number')
const email = document.getElementById('email')
const errorElement1 = document.querySelector('.error1')
const errorElement2 = document.querySelector('.error2')
const errorElement3 = document.querySelector('.error3')
const errorElement4 = document.querySelector('.error4')

form.addEventListener('submit',function(e){
    const messagesName = [];
    const messagesPassword = [];
    const messageNumber = [];
    const messageEmail = [];

    //USERNAME
    if(username.value === ''){
        messagesName.push('Please input your name')
    }
    if(messagesName.length > 0){
        e.preventDefault();
        errorElement1.style.color = 'red'
        errorElement1.style.fontSize = '11px'
        errorElement1.style.fontWeight = '600'
        errorElement1.innerText = messagesName.join('')
    }

    //EMAIL
    if(email.value === ''){
        messageEmail.push('Please input your email')
    }
    if(messageEmail.length > 0){
        e.preventDefault();
        errorElement2.style.color = 'red'
        errorElement2.style.fontSize = '11px'
        errorElement2.style.fontWeight = '600'
        errorElement2.innerText = messageEmail.join('')
    }

    //NUMBER
    if(number.value === ''){
        messageNumber.push('Please input your phone number')
    }

    if(number.value.length > 0 && number.value.length !== 11){
        messageNumber.push('Please input a correct number')
    }
    if(messageNumber.length > 0){
        e.preventDefault();
        errorElement3.style.color = 'red'
        errorElement3.style.fontSize = '11px'
        errorElement3.style.fontWeight = '600'
        errorElement3.innerText = messageNumber.join('')
    }

    //PASSWORD
    if(password.value === ''){
        messagesPassword.push('Please input your password ')
    }
    if(password.value.length > 0 && password.value.length < 4){
        messagesPassword.push('password must be more than 4')
    }
    if(messagesPassword.length > 0){
        e.preventDefault();
        errorElement4.style.color = 'red'
        errorElement4.style.fontSize = '11px'
        errorElement4.style.fontWeight = '600'
        errorElement4.innerText = messagesPassword.join('')
    }

    if(username.value !== ''  && password.value.length !== ''&& password.value.length > 4 && email.value!== '' && number.value !== '' && number.value.length === 11){
        alert('You have sucessfully created an account with us')
        e.preventDefault();
        //login.addEventListener('click',function(e){
            window.location.href = 'http://127.0.0.1:5500/index.html'
        //}) 
    }
})

/*
login.addEventListener('click',function(e){
    alert('You have sucessfully created an account with us')
})*/