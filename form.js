const errorEmail = document.querySelector('.error-email');
const errorName = document.querySelector('.error-name');
const errorTel = document.querySelector('.error-phone');
const button = document.querySelector('.contact__form button');
const form = document.querySelector('.contact__form');

button.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    let inputEmail = document.querySelector('input[type="email"]').value;
    let inputName = document.querySelector('input[type="text"]').value;
    let inputTel = document.querySelector('input[type="tel"]').value;

    if (!inputEmail) {
        errorEmail.style.display = 'block';
    } else {
        errorEmail.style.display = 'none';
    }

    if (!inputName) {
        errorName.style.display = 'block';
    } else {
        errorName.style.display = 'none';
    }

    if (!inputTel) {
        errorTel.style.display = 'block';
    } else {
        errorTel.style.display = 'none';
    }

    if (inputEmail && inputName && inputTel) {
        // Якщо всі поля заповнені, відправляємо форму і очищуємо поля
        sendForm();
        clearFields();
    }
}

function sendForm() {
    console.log('Форма відправлена');
}

function clearFields() {
    // Очищення полів форми
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="tel"]').value = '';
    document.querySelector('textarea').value = '';
}

// Додамо обробник події для відправки форми
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Відміна стандартної поведінки відправки форми
    validateForm();
});