const holderName = document.querySelector('#holderName');
const holderNumber = document.querySelector('#holderNumber');
const holderMonth = document.querySelector('#holderMonth');
const holderYear = document.querySelector('#holderYear');
const holderCvc = document.querySelector('.holderCVC');
const form = document.querySelector('.form');
const complete = document.querySelector('.complete');

// Card displays
const cardNumber = document.querySelector('.card__number');
const cardName = document.querySelector('.card__name');
const cardCV = document.querySelector('.card__cv');
const backNumber = document.querySelector('.back__number');

// Errors
const nameError = document.querySelector('.name__error');
const numberError = document.querySelector('.number__error');
const myError = document.querySelector('.my__error');
const cvcError = document.querySelector('.cvc__error');

// Complete display
const completeBtn = document.querySelector('.complete__button');

// onclick make the display back to normal
completeBtn.addEventListener('click', () => {
    complete.style.display = 'none';
    form.style.display = 'flex';
})

// Form submission
form.addEventListener('submit', (e) => {
    // REGEX
    let letters = /^[A-Za-z]+$/;
    e.preventDefault();

    // check if all inputs are filled
    if(holderName.value !== '' && holderNumber.value !== '' && holderMonth.value !== '' && holderYear.value !== '' && holderCvc.value !== '') {
        form.style.display = 'none';
        complete.style.display = 'flex';
    }

    // For name
    if(holderName.value === '') {
        holderName.style.border = '1px solid hsl(0,100%,66%)';
        nameError.innerHTML = 'Can\'t be blank';
        setTimeout(() => {
            nameError.innerHTML = '';
            holderName.style.border = '1px solid hsl(270, 3%, 87%)'
        },1000);
    } else {
        cardName.innerHTML = holderName.value.toUpperCase();
    }

    // for expirations
    if(holderMonth.value === '' || holderYear.value === '') {
        myError.innerHTML = 'Can\'t be blank';
        holderMonth.value === '' ? holderMonth.style.border = '1px solid hsl(0,100%,66%)' : holderMonth.style.border = '1px solid hsl(270, 3%, 87%)';
        holderYear.value === '' ? holderYear.style.border = '1px solid hsl(0,100%,66%)' : holderYear.style.border = '1px solid hsl(270, 3%, 87%)';
        setTimeout(() => {
            myError.innerHTML = '';
            holderMonth.value === '' ? holderMonth.style.border = '1px solid hsl(270, 3%, 87%)' : holderMonth.style.border = '1px solid hsl(270, 3%, 87%)';
            holderYear.value === '' ? holderYear.style.border = '1px solid hsl(270, 3%, 87%)' : holderYear.style.border = '1px solid hsl(270, 3%, 87%)';
        },1000)
    } else {
        // Month should be only up to 12 and Year should be only up to 22
        if(holderMonth.value < 13 && holderMonth.value > 0 && holderYear.value < 23 && holderYear.value > 0) {
            cardCV.innerHTML = (holderMonth.value < 10 ? `0${holderMonth.value}` : holderMonth.value) + '/' + (holderYear.value < 10 ? `0${holderYear.value}` : holderYear.value);
        } else {
            myError.innerHTML = 'Invalid date';
            setTimeout(() => {
                myError.innerHTML = '';
            },1000)
        }
    }

    // for cvc value
    if(holderCvc.value === '') {
        cvcError.innerHTML = 'Can\'t be blank';
        holderCvc.style.border = '1px solid hsl(0,100%,66%)';
        setTimeout(() => {
            cvcError.innerHTML = '';
            holderCvc.style.border = '1px solid hsl(270, 3%, 87%)';
        },1000);
    } else {
        if(holderCvc.value.length === 3) {
            backNumber.innerHTML = holderCvc.value;
        } else {
            holderCvc.style.border = '1px solid hsl(0,100%,66%)';
            cvcError.innerHTML = 'Invalid CVC';
            setTimeout(() => {
                cvcError.innerHTML = '';
                holderCvc.style.border = '1px solid hsl(270, 3%, 87%)';
            },1000)
        }
    }

    // if the input has a letter in a number value field, show the errors
    if(holderNumber.value.match(letters)) {
        holderNumber.style.border = '1px solid hsl(0,100%,66%)';
        numberError.innerHTML = 'Wrong format, numbers only';
        // After 1 second, remove the error message
        setTimeout(() => {
            numberError.innerHTML = '';
            holderNumber.style.border = '1px solid hsl(270, 3%, 87%)';
        },1000)
    } else if(holderNumber.value === '') {
        holderNumber.style.border = '1px solid hsl(0,100%,66%)';
        numberError.innerHTML = 'Can\'t be blank';
        setTimeout(() => {
            numberError.innerHTML = '';
            holderNumber.style.border = '1px solid hsl(270, 3%, 87%)'
        },1000);
    } else {
        if(holderNumber.value.length === 16) {
            cardNumber.innerHTML = holderNumber.value.replace(/(.{4})/g, '$1 ');
        } else {
            holderNumber.style.border = '1px solid hsl(0,100%,66%)';
            numberError.innerHTML = 'Can\'t be less than 16 digits';
            setTimeout(() => {
                numberError.innerHTML = '';
                holderNumber.style.border = '1px solid hsl(270, 3%, 87%)';
            },1000)
        }
    }

})