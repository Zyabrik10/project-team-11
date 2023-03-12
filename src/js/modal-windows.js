const room_buttons = document.querySelectorAll("[data-model-window=room]");
const table_buttons = document.querySelectorAll("[data-model-window=table]");

const room_window = document.querySelector("[data-modal-window=room]");
const table_window = document.querySelector("[data-modal-window=table]");

const close_modal_room = document.querySelector("[data-modal-button=close_room]");
const close_modal_table = document.querySelector("[data-modal-button=close_table]");

close_modal_room.onclick = () => {
    room_window.classList.add("is-hidden");
}

close_modal_table.onclick = () => {
    table_window.classList.add("is-hidden");
}

room_buttons.forEach((button) => {
    button.onclick = () => {
        room_window.classList.remove("is-hidden");
    };
})

table_buttons.forEach((button) => {
    button.onclick = () => {
        table_window.classList.remove("is-hidden");
    };
});