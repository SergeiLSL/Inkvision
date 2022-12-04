// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================
// .gender
// ? Группа радио кнопок Определяем пол человека
let all = document.querySelectorAll(".r-all");

for (let a = 0; a < all.length; a++) {
    let radios = all[a].querySelectorAll(".r-input");
    let i = 1;
    all[a].style.setProperty("--options", radios.length);
    radios.forEach((input) => {
        input.setAttribute("data-pos", i);
        input.addEventListener("click", (e) => {
        all[a].style.setProperty(
            "--options-active",
            e.target.getAttribute("data-pos")
        );
        });
        i++;
    });
}
//========================================================================================================================================================
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    sliderPerView: 1,
    spaceBetween: 10,

    navigation: {
        nextE1: "swiper-button-next",
        prevE1: "swiper-button-prev",
    },
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа
    touchФтпду: 45,
    // Курсор перетаскивания
    grabCursor: true,
    // переключение при клике на слайд
    slideClickedSlide: true,

});
