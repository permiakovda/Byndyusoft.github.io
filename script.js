function sum(data) {

	let arr = data.filter(element => (typeof element) === 'number' && !(Number.isNaN(element))); // из элементов массива оставить только числа

	try {

		if (arr.length < 2) {
			throw new Error('Необходимо ввести как минимум два числа, разделенных запятой'); //Формируем свою собственную ошибку
		}

		let min1 = arr[0];
		let min2 = arr[1];

		for (let i = 0; i <= arr.length; i++) {
			if (min1 > arr[i]) {
				min2 = min1;
				min1 = arr[i];
			} else if ((min2 > arr[i]) && (i != 0)) {
				min2 = arr[i];
			}
		}

		return min1 + min2; // если данные введены ыерно вернуть сумму наименьших чисел

	} catch (e) {
		alert("Извините, в данных ошибка");
		throw e;
	}

}

alert("Тест - ввод набора чисел (должно быть 10): " + sum([14, 15, 16, 17, 8, 9, 10, 11, 2]))
alert("Тест - ввод набора чисел и строк (должно быть 56): " + sum(["aaa", "hye, sk???", "5", 1, 55]))
alert("Тест - ввод набора отрицательных чисел (должно быть -5): " + sum([-3, -2, -1, 0, 1, 2, 3]))
//alert("Тест - ввод набора строк (должна быть ошибка): " + sum(["aaa", "hye, sk???", "5"]))


document.querySelector("button").onclick = function () {
	let data = document.querySelector("#expression").value; // Записываем строку с исходными данными

	data = data.split(",").map(Number); // преобразование строки в массив данных разделителем выступает запятая

	alert(sum(data));
}
