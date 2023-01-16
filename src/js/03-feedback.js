import throttle from 'lodash.throttle'; 

const refs = {
    formEl: document.querySelector('.feedback-form'),
    inputEl: document.querySelector('input'),
    messageInput: document.querySelector('textarea'),
};

const STORAGE_KEY = 'form-message';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateTextarea();

refs.formEl.addEventListener('input', throttle(dataFormEl, 500));
refs.formEl.addEventListener('submit', onFormSubmit)

function dataFormEl(evt) {
    const message = evt.target.value;

   
    formData[evt.target.name] = message;
 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(evt) {
    
    evt.preventDefault();
   
    if (formData.email && formData.message) {
        console.log(formData);
        evt.target.reset();
        Object.keys(formData).forEach(key => delete formData[key]);
        localStorage.removeItem(STORAGE_KEY);

        return;
    } 
};

function populateTextarea() {
    const savedmessage = localStorage.getItem(STORAGE_KEY);

    const parsedFormData = JSON.parse(savedmessage); 
  
   if (parsedFormData) { 
 refs.inputEl.value = formData.email || ''; 
 refs.messageInput.value = formData.message || ''; 
   } 
};
