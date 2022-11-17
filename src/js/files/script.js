// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================
// .gender
// ? Группа радио кнопок Определяем пол человека
let all = document.querySelectorAll('.r-all');
for (let a = 0; a < all.length; a++){ 
    let radios = all[a].querySelectorAll('.r-input');
    let i = 1;
    all[a].style.setProperty('--options',radios.length);
    radios.forEach((input)=>{
        input.setAttribute('data-pos',i);
        input.addEventListener('click',(e)=>{
            all[a].style.setProperty('--options-active',e.target.getAttribute('data-pos'));
        });
        i++;
    });
};
//========================================================================================================================================================
