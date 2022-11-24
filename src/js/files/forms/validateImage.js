//слушатель загрузки файла-фото
export const validateImage = () => {
	document.addEventListener("DOMContentLoaded", function () {


		//! Выбор файла фотографии
		//Получаем инпут file в переменную
		const formImage = document.getElementById("formImage");
		//Получаем див для превью в переменную
		const formPreview = document.getElementById("formPreview");

		//Слушаем изменения в инпуте file
		formImage && formImage.addEventListener("change", () => {
			uploadFile(formImage.files[0])
		});

		//Функция выбора файла фотографии
		function uploadFile(file) {
			// провераяем тип файла
			if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
				alert("Разрешены только изображения.");
				formImage.value = "";
				return;
			}
			// проверим размер файла (<2 Мб)
			if (file.size > 2 * 1024 * 1024) {
				alert("Файл должен быть менее 2 МБ.");
				return;
			}
			var reader = new FileReader();
			reader.onload = function (e) {
				formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
			};
			reader.onerror = function (e) {
				alert("Ошибка");
			};
			reader.readAsDataURL(file);
		}
	});
}