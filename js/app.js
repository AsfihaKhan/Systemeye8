const form = document.querySelector('form'),
  nextBtn = form.querySelector('.nextBtn'),
  backBtn = form.querySelector('.backBtn'),
  allInput = form.querySelectorAll('.first input');

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  allInput.forEach((input) => {
    if (input.value != '') {
      form.classList.add('secActive');
    } else {
      form.classList.remove('secActive');
    }
  });
});

backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.remove('secActive');
});
