const inputNumber = document.querySelectorAll('.book-form-field[type="tel"]');
const im = new Inputmask("+ 38 (099) 999-99-99");

inputNumber.forEach((selector) => {
    im.mask(selector);
});

