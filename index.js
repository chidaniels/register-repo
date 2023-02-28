const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const phone=document.getElementById('phone');
const email=document.getElementById('email');
const password=document.getElementById('password');
const form=document.getElementById('form');
const errorElement=document.getElementById('error');

form.addEventListener('onsubmit', (e) => {
    let messages=[]
    if (firstname.value === "") {
        messages.push('this is a required field');

    }
    if (messages.length>0) {
        e.defaultPrevented();
        errorElement.innerText=messages.join(',')
    }
});