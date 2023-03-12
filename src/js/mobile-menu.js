const mobile_menu_button_open = document.querySelector("[data-model-button=mobile_open]");
const mobile_menu_button_close = document.querySelector("[data-model-button=mobile_close]");

const mobile_menu = document.querySelector("#mobile-menu");

mobile_menu_button_open.onclick = () => {
  mobile_menu.classList.add("is-open");
}

mobile_menu_button_close.onclick = () => {
  mobile_menu.classList.remove("is-open");
}

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobile_menu.classList.remove("is-open");
  bodyScrollLock.enableBodyScroll(document.body);
});
