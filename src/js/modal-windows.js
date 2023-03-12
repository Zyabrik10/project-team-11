const room_buttons = document.querySelectorAll("[data-model-window=room]");
const table_buttons = document.querySelectorAll("[data-model-window=table]");
const price_buttons = document.querySelectorAll("[data-model-window=price]");


const room_window = document.querySelector("[data-modal-window=room]");
const table_window = document.querySelector("[data-modal-window=table]");
const price_window = document.querySelector("[data-modal-window=price]");

const close_modal_room = document.querySelector("[data-modal-button=close_room]");
const close_modal_table = document.querySelector("[data-modal-button=close_table]");
const close_modal_price = document.querySelector("[data-modal-button=close_price]");

// add
if (close_modal_room) {
    close_modal_room.onclick = () => {
        room_window.classList.add("is-hidden");
    }
}

if (close_modal_table) {
    close_modal_table.onclick = () => {
        table_window.classList.add("is-hidden");
    }
}

if (close_modal_price) {
    close_modal_price.onclick = () => {
        price_window.classList.add("is-hidden");
    }
}

// remove
if (room_buttons) {
    room_buttons.forEach((button) => {
        button.onclick = () => {
            room_window.classList.remove("is-hidden");
        };
    });
}

if (table_buttons) {
    table_buttons.forEach((button) => {
        button.onclick = () => {
            table_window.classList.remove("is-hidden");
        };
    });
}

if (price_buttons) {
    price_buttons.forEach((button) => {
        button.onclick = () => {
            price_window.classList.remove("is-hidden");
        };
    });
}