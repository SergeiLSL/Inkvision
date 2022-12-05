// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//=======================================================================
//========================================================================================================================================================
// ? Группа радио кнопок шаблон
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

// let gender = document.querySelectorAll('.group-all');
// for (let a = 0; a < all.length; a++){ 
//     let radios = group-all[a].querySelectorAll('.check-box__input');    
//     let i = 1;
//     group-all[a].style.setProperty('--options',radios.length);
//     radios.forEach((input)=>{
//         input.setAttribute('data-pos',i);
//         input.addEventListener('click',(e)=>{
//             group-all[a].style.setProperty('--options-active',e.target.getAttribute('data-pos'));
//         });
//         i++;
//     });
// };    

//========================================================================================================================================================

// function show_hide_password(target){
// 	var input = document.getElementById('password1-input');
// 	console.log("!!!!!!!")
// 	if (input.getAttribute('type') == 'password') {
// 		target.classList.add('view');
// 		input.setAttribute('type', 'text');
// 	} else {
// 		target.classList.remove('view');
// 		input.setAttribute('type', 'password');
// 	}
// 	return false;
// }
// //=======================================================================
// "form-pass"
// document.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById('form-pass');
// 	form.addEventListener('submit', formSend);

// 	async function formSend(e) {
// 		e.preventDefault();

// 		let error = formValidate(form);

// 		if (error === 0) {

// 		} else {
// 			alert('Заполните обязательные поля');
// 		}

// 	}

// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll('._req');

// 		for (let index = 0; index < formReq.length; index++) {
// 			const input = formReq[index];
// 			formRemoveError(input);

// 			if (input.classList.contains('_email')) {
// 				if (emailTest(input)) {
// 					formAddError(input);
// 					error++;
// 				}
// 			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
// 				formAddError(input);
// 				error++;
// 			} else {
// 				if (input.value === '') {
// 					formAddError(input);
// 					error++;
// 				}
// 			}
			
// 		}
// 		return error;
// 	}

// 	function formAddError(input) {
// 		input.parentElement.classList.add('_error');
// 		input.classList.add('_error');
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove('_error');
// 		input.classList.remove('_error');
// 	}
// 	//Функция текста email
// 	// function emailTest(input) {
// 	// 	//return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);		 
// 	// 	//Должно содержать не менее одной цифры и одной прописной и строчной буквы, а также не менее 8 и более символов" 
// 	// }

// });