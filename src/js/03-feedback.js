import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';
const localData ={
    email: "",
    message: "",
};


const formFeedback = document.querySelector(".feedback-form");
console.log(formFeedback);
const inputEmail = formFeedback.querySelector('.feedback-form input');
const textarea = document.querySelector(".feedback-form textarea");

getLocalStorageText();

formFeedback.addEventListener('input', throttle(onInputListener, 500))

function onInputListener(event) {
localData[event.target.name] = event.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
console.log(JSON.stringify(localData))};

formFeedback.addEventListener('submit', onFormSubmit);
function onFormSubmit (event){
event.preventDefault();
event.target.reset();
localStorage.removeItem(STORAGE_KEY)
}

function getLocalStorageText() {
    let saveObject;
  
    try {
      saveObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      saveObject = localData;
    }
  
    if (saveObject === null) saveObject = localData;
  
    inputEmail.value = saveObject.email;
    textarea.value = saveObject.message;
  }
