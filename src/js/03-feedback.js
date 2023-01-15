import throttle from 'lodash.throttle'; 
  
 const formEl = document.querySelector('.feedback-form'); 
 const emailInputEl = document.querySelector('input'); 
 const messageInputEl = document.querySelector('textarea'); 
  
 formEl.addEventListener('input', throttle(dataFormEl, 500)); 
 formEl.addEventListener('submit', onFormSubmit); 
  
 const STORAGE_KEY_DATAFORM = 'feedback-form-state'; 
  
 let formData = JSON.parse(localStorage.getItem(STORAGE_KEY_DATAFORM)) || {}; 
  
 auditLocalStorage(); 
  
 function dataFormEl(evt) { 
   formData[evt.target.name] = evt.target.value; 
   //   console.log(formData); 
   localStorage.setItem(STORAGE_KEY_DATAFORM, JSON.stringify(formData)); 
 } 
  
 function onFormSubmit(evt) { 
   evt.preventDefault(); 
   console.log(formData); 
   evt.currentTarget.reset(); 
   localStorage.removeItem(STORAGE_KEY_DATAFORM); 
   formData = {}; 
 } 
  
 function auditLocalStorage() { 
   const savedFormData = localStorage.getItem(STORAGE_KEY_DATAFORM); 
   const parsedFormData = JSON.parse(savedFormData); 
  
   if (parsedFormData) { 
     emailInputEl.value = formData.email || ''; 
     messageInputEl.value = formData.message || ''; 
   } 
 }