const myForm =document.querySelector('#my-form');
const firstName =document.querySelector('#firstname');
const lastName =document.querySelector('#lastname');
const phoneNo =document.querySelector('#phone');
const emailAdd =document.querySelector('#email');
const errorEl =document.querySelector('#error');
const btn =document.querySelector('#button');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (firstName.value === '' || lastName.value === '') {
        errorEl.innerText='this is a required field';

        setTimeout(() => errorEl.remove(), 3000)
    } else{
        alert('this form has been submitted');
    }
}