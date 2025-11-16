const formData = {
  email: '',
  message: '',
};

const initData = localStorage.getItem('feedback-form-state');
const initDataParse = JSON.parse(initData);

const formEl = document.createElement('form');
formEl.classList.add('feedback-form');
formEl.autocomplete = 'off';

const labelEmailEl = document.createElement('label');
labelEmailEl.classList.add('label-element');
labelEmailEl.textContent = 'Email';

const inputEmail = document.createElement('input');
inputEmail.classList.add('form-input');
inputEmail.type = 'email';
inputEmail.name = 'email';
inputEmail.autofocus = true;

if (initData !== null) {
  inputEmail.value = initDataParse.email;
}

const labelMessageEl = document.createElement('label');
labelMessageEl.classList.add('label-element');
labelMessageEl.textContent = 'Message';

const textAreaMessage = document.createElement('textarea');
textAreaMessage.classList.add('form-text-area');
textAreaMessage.name = 'message';
textAreaMessage.rows = 8;

if (initData !== null) {
  textAreaMessage.value = initDataParse.message;
}

const btnEl = document.createElement('button');
btnEl.classList.add('form-button');
btnEl.type = 'submit';
btnEl.textContent = 'Submit';

labelEmailEl.append(inputEmail);
labelMessageEl.append(textAreaMessage);
formEl.append(labelEmailEl);
formEl.append(labelMessageEl);
formEl.append(btnEl);

document.body.append(formEl);

const addDataToLocalStorage = () => {
  try {
    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', jsonFormData);
  } catch (error) {
    console.error(error.message);
  }
};

const onInput = event => {
  if (!event) {
    return;
  }

  const fieldName = event.target.name;

  const fieldValue = event.target.value.trim();

  if (fieldName === 'email') {
    formData.email = fieldValue;
  }

  if (fieldName === 'message') {
    formData.message = fieldValue;
  }

  addDataToLocalStorage();
};

const onSabmit = event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  inputEmail.value = '';
  textAreaMessage.value = '';
  formData.email = '';
  formData.message = '';
};

formEl.addEventListener('input', onInput);

formEl.addEventListener('submit', onSabmit);
