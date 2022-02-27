'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  function toggle(btn) {
    btn.addEventListener('click', () => {
      modal.classList.toggle('hidden');
      mask.classList.toggle('hidden');
    });
  }
  toggle(open);
  toggle(close);
  toggle(mask);


  // open.addEventListener('click', () => {
  //   modal.classList.remove('hidden');
  //   mask.classList.remove('hidden');
  // });
  // close.addEventListener('click', () => {
  //   modal.classList.add('hidden');
  //   mask.classList.add('hidden');
  // });
  // mask.addEventListener('click', () => {
  //   // modal.classList.add('hidden');
  //   // mask.classList.add('hidden');
  //   close.click();
  // });


}