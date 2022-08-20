// /* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром. */

// function f1 (a1, b1, c1) {
//     return (a1-b1) / c1
// }

// let res1 = f1(20, 8, 4);
// console.log (res1);


// /* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром. */

// function f2 (a2) {
//     return 'Квадрат числа: ' + Math.pow(a2, 2) + ';' + ' ' + 'Куб числа: ' + Math.pow(a2, 3) + ';'
// }

// let res2 = f2(6);
// console.log (res2);


// /* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b. */

// function FMinMax (a3, b3) {
//     var a3 = +prompt ('Введите первое число: ');
//     var b3 = +prompt ('Введите второе число: ');
//     if (a3 < b3) {
//         document.write ('Min:' + a3 + '</br>' + 'Max:' + b3 + '</br>');
//     } else {
//         document.write ('Max:' + a3 + '</br>' + 'Min:' + b3 + '</br>');
//     }
// }

// FMinMax();


// /* 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив. */

// let arr4 = [];

// let arr4_1 = function() {
//     let arrStart = +prompt('Первое число массива:');
//     let arrFinish = +prompt('Последнее число массива:');
    
//     for (arrStart; arrStart <= arrFinish; arrStart++) {
//             arr4.push(arrStart);
//     }
//         return(arr4);
// }

// let arr4_2 = function() {
//         return(document.write(arr4 + '</br>' + '</br>'));
// }

// console.log(arr4_1()); 
// arr4_2();


// /* 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false. */

// function isEven () {
//     let a5 = +prompt('Введите число:');
//     if (a5 % 2 === 0) {
//         return (console.log(true))
//     } else {
//         return (console.log(false))
//     }
// }

// isEven();


// /* 6. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи. */




// /* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом. */

// function pyramid () {
//     for (var i = 1; i <= 9; i++) {
// 	for (var j = 1; j <= i; j++) {
// 		document.write(i);
// 	}
// 	document.write('<br>');
//     }
// }
// pyramid ();


// /* 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

// *
// ***
// *****
// *******
// *********

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник. */

// function treug(num, reverse = false) {
//     let initialValue = reverse ? num : 1,
//     stobValue = reverse ? 0 : num;

//     for (let i = initialValue; (reverse ? i > stobValue : i < stobValue); (reverse ? i-- : i++)){
//         document.write('<pre>' + ' '.repeat(num - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(num - i) + '</pre>');
//     }
// }


// /* 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000. */

// function fib (num){
//     return num <= 1 ? num : fib(num - 1) + fib(num - 2)
// }

// function fibArr() {
//     let rez = [];
//     for (let i = 0; i < 1000; i++) {
//         rez.push(fib(i));
//     }
//     console.log(rez);
// }



/* 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся */

function f12(name, surName, lastName, groupNum) {
    let title = `Домашняя работа: «Функции»`;
    let subTitle = `Выполнил: студент гр. ${groupNum}`;
    let nameText = `${lastName} ${name} ${surName}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subTitle.length > maxStr) maxStr = subTitle.length;
    if (nameText.length > maxStr) maxStr = nameText.length;

    title = f12_2(title, maxStr);
    subTitle = f12_2(subTitle, maxStr);
    nameText = f12_2(nameText, maxStr);

    let ramka = '*';

    for (let i = 0; i < maxStr + 3; i++){
        ramka += '*';
    }

    console.log (`
    ${ramka}
    ${title}
    ${subTitle}
    ${nameText}
    ${ramka}`);
}

function f12_2(str, l){
    for (let  i = str.length; i < l; i++) {
        str += ' ';
    }
    str = '* ' + str + ' *';
    return str;
}


// /* 13. Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. */

function mail(str) {
    let point = str.lastIndexOf('.');

    if (point === str.length - 1 || point === -1 || point === 0) return 'Неправильный ввод эл. адреса';

    let dog = str.lastIndexOf('@');
    if (dog !== str.indexOf('@')) return 'Неправильный ввод эл. адреса';
    if (dog === str.length - 1 || dog === -1 || dog === 0 || dog < 3) return 'Неправильный ввод эл. адреса';

    let defis = str.lastIndexOf('-');
    if (defis === str.length - 1 || defis === 0) return 'Неправильный ввод эл. адреса';
    let n = str.lastIndexOf('_');
    if (n === str.length - 1 || n === 0) return 'Неправильный ввод эл. адреса';

    let symbols = 'абвгдеёжзиклмнопрстуфхцчшщъьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЬЭЮЯ!"#$%&()*+,-.`/:;<=>?@][^|}{~';
    let nameSymbols = '!#$%&)(*+,-/:;<=>?@][^`{|}~';
    let nums = '1234567890.';

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === '.' && str[i + 1] === '.' || 
        str[i] === '@' && str[i + 1] === '.' ||
        str[i] === '.' && str[i + 1] === '@' ||
        str[i] === '@' && str[i + 1] === '@' ||
        str[i] === '_' && str[i + 1] === '@' ||
        str[i] === '@' && str[i + 1] === '-' ||
        str[i] === '-' && str[i + 1] === '-' ||
        str[i] === '_' && str[i + 1] === '_' ) return 'Неправильный ввод эл. адреса';
        if (symbols.includes(str[i])) return 'Неправильный ввод эл. адреса';
    }

    let name = str.slice(0, dog);

    if (nums.includes(name[0])) return 'Неправильный ввод эл. адреса';
    for (let i = 0; i < name.length; i++){
        if (nameSymbols.includes(name[i])) return 'Неправильный ввод эл. адреса';
    }

    let domain = str.slice(point);
    let domainName = str.slice(dog, point);

    if (domain.length < 2 || domain.length > 11) return 'Неправильный ввод эл. адреса';
    if (domainName.length < 2 || domainName.length > 11) return 'Неправильный ввод эл. адреса';

    return 'Почтовый адресс верен!';
}
