const body = document.body;
const btnModalOpen = (select) => {
  const open = document.querySelector(`.modal-wrap.${select}`);
  modalClose();
  open.classList.add('active');
};
const btnModalClose = (select) => {
  const ani = document.querySelector(`.modal-wrap.${select}`);
  ani.classList.add('closeAni');
  setTimeout(() => {
    modalClose();
    ani.classList.remove('closeAni');
  }, 300);
};

function modalClose() {
  const modal = document.querySelectorAll(`.modal-wrap`);
  modal.forEach((data) => {
    data.classList.remove('active');
  });
}
