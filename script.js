// В этом коде: преобразуем строку в массив только чисел
// Определяем два минимальных числа и складываем их


document.querySelector("button").onclick = function (){
	let data = document.querySelector("#expression").value; // Записываем строку с исходными данными
	
	let dataArr = transferToArr(data); // Преобразует строку в массив чисел
	
	alert(func1(dataArr)) // определить сумму и вывести её во всплывающем окне
}




function transferToArr(str){
	return str.split(",").map(Number); //получить только числа из массива
}

function func1(arr) {
	let newArr = arr.filter(element => (typeof element) === 'number' && !(Number.isNaN(element))); //рассматривае только числа
	
	if(newArr.length < 2){
		return "Нельзя определить сумму двух наименьших чисел из массива т.к. в масиве не набирается чисел в количестве двух штук.";
	}
	
	let min1 = minNum(newArr, newArr.length, newArr[newArr.length-1]); //найти первое наименьшее
	
	newArr.splice(arr.indexOf(min1), 1); //исключаем из рассматрения первое наименьшее исло
	
	let min2 = minNum(newArr, newArr.length, newArr[newArr.length-1]); //найти второе наименьшее
	
	return(min1+min2); // вернуть сумму
}

function minNum(arr, count, min1){
	//функция для определения минимального числа в массиве, начинат с конца - если конечное число наименьшее то иго и вернет, иначепройдет по всем элементам массива
	if(count < 0){
		return min1;
	}
	if(arr[count]<min1){
		min1 = arr[count];
	}
	count-=1;
	
	return minNum(arr, count, min1);
}

//console.log(func1([1,2,-3,3,10,7,14,7,'sdf','-259',{nkvd: "Анатолий"}, []]));
//console.log(func1([]));
//console.log(func1([-259, 4729, 8392392348, 3]));
//			
//// шаблон для массива с большим количеством данных
//    var start = 1000;
//    var result = [];
//    while (start >= 0) {
//      result.push(start--);
//    }
//console.log(func1(result));
// alert(func1([1,2,-3,3,10,7,14,7,'sdf','-259',{nkvd: "Анатолий"}, NaN]))





//let stringgggg = "1, 2, 3, 56, 0.1, Барсук, -12, ложка"
//
//// преобразоваить строку в массив:
//
//var string = "1,2,-3,3,10,7,14,7,fff";
//var array = [string];
//alert(array[0]);
//
//var array = string.split(",").map(Number); //получить только числа из массива
//
//alert(array);
//
//
//alert(func1(array))




//let var1 = transferToArr("1,2,-3,3,10,7,14,7,'sdf','-259', NaN");
//
//
//alert(func1(var1))
//
//alert(func1([1,2,-3,3,10,7,14,7,'sdf','-259',{nkvd: "Анатолий"}, NaN]))