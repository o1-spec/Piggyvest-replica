'use strict'
const login = document.getElementById('login')
const form = document.getElementById('form')
const errorElement1 = document.querySelector('.error1')
const errorElement2 = document.querySelector('.error2')
const email = document.getElementById('email')
const password = document.getElementById('pass')

form.addEventListener('submit',function(e){
    let messagesName = [];
    if(email.value === ''){
        messagesName.push('Please input your name or email')
    }

    if(messagesName.length > 0){
        e.preventDefault();
        errorElement1.style.color = 'red'
        errorElement1.style.fontSize = '11px'
        errorElement1.style.fontWeight = '600'
        errorElement1.innerText = messagesName.join('')
    }

    let messagesPassword = [];
    if(password.value === ''){
        messagesPassword.push('Please input your password ')
    }

    if(password.value.length > 0 && password.value.length < 4){
        messagesPassword.push('password must be more than 4')
    }

    if(messagesPassword.length > 0){
        e.preventDefault();
        errorElement2.style.color = 'red'
        errorElement2.style.fontSize = '11px'
        errorElement2.style.fontWeight = '600'
        errorElement2.innerText = messagesPassword.join('')
    }

    if(email.value !== ''  && password.value.length !== ''&& password.value.length > 4){
        alert('You have Successfully logged in')
        e.preventDefault();
        //login.addEventListener('click',function(e){
            window.location.href = 'http://127.0.0.1:5500/index.html'
        //}) 
    }
    
})



/*
login.addEventListener('click',function(e){
    alert('You have Successfully login')
})*///http://127.0.0.1:5500/index.html