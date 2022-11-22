/* Календарь */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';
const inputResult = document.querySelectorAll("input")

function inputDatapicker (inputResult)  {
	if (inputResult) {
		inputResult.forEach((inputItem) => {
			const datapicker = inputItem.hasAttribute("data-datepicker")
			if (datapicker) {
				return true
			}
		})
	}
}

let picker = null
if (inputDatapicker(inputResult)) {
	picker =
		datepicker('[data-datepicker]', {
			customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
			customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			overlayButton: 'Применить',
			overlayPlaceholder: 'Год (4 цифры)',
			startDay: 1,
			formatter: (input, date, instance) => {
				const value = date.toLocaleDateString()
				input.value = value
			},
			onSelect: function (input, instance, date) {

			}
		});
}
flsModules.datepicker = picker;
