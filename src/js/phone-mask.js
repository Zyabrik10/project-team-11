const selector = document.querySelector('.book-form-field[type="tel"]');
console.log(selector);
const im = new Inputmask("+38(099) 999-99-99");
im.mask(selector);
