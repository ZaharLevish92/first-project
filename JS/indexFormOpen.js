(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),

    backdrop: document.querySelector("[data-backdrop]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.backdrop.addEventListener("click", logBackDropClick);

  function toggleModal() {
    document.body.classList.toggle ("modal-open")
    refs.backdrop.classList.toggle("is-hidden");
  }
  function logBackDropClick() {
    console.log("Это клик в бекдроп");
  }
})();