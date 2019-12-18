var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".modal-close");

function openModal(n) {
  modal = document.querySelector("#pub-modal-" + n );
  modal.classList.toggle("show-modal");
}

function closeModal(n) {
  modal = document.querySelector("#pub-modal-" + n );
  modal.classList.toggle("show-modal");
}
