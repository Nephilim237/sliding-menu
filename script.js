const hamburger = document.querySelector('#toggle');
const sign = document.querySelector('#sign');
const closeModal = document.querySelector('#closeBtn');
const modal = document.querySelector('#modalContainer');

hamburger.addEventListener('click', () => document.body.classList.toggle('nav-show'));

sign.addEventListener('click', () => modal.classList.add('modal-show'));

closeModal.addEventListener('click', () => modal.classList.remove('modal-show'));

window.addEventListener('click', (e) => {
	e.stopPropagation();
	if (e.target == modal) {
		modal.classList.remove('modal-show');
	} else {
		return false;
	}
});
