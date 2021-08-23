
let first = prompt('Введите свой возраст в цифрах')

if(first <= 18){
    console.log('Вы ещё молоды, вам нужно учиться');
}else if(first <= 50) {
    console.log('Вам нужно работать');
}else if(first <= 59) {
    console.log('Вам скоро на пенсию');
}else if(first <= 150) {
    console.log('Вы пенсионер')
}else  {
    console.log('Что-то пошло не так')
    alert('Что-то пошло не так')
}

let second = +prompt('Сколько у вас времени ?')

switch (second) {
    case 1:
        alert('1 am');
        break;
    case 2:
        alert('2 am');
        break;
    case 3:
        alert('3 am');
        break;
    case 4:
        alert('4 am')
        break;
    case 5:
        alert('5 am')
        break;
    case 6:
        alert('6 am')
        break;
    case 7:
        alert('7 am')
        break;
    case 8:
        alert('8 am')
        break;
    case 9:
        alert('9 am')
        break;
    case 10:
        alert('10 am')
        break;
    case 11:
        alert('11 am')
        break;
    case 12:
        alert('12 am')
        break;
    case 13:
        alert('1 pm')
        break;
    case 14:
        alert('2 pm')
        break;
    case 15:
        alert('3 pm')
        break;
    case 16:
        alert('4 pm')
        break;
    case 17:
        alert('5 pm')
        break;
    case 18:
        alert('6 pm')
        break;
    case 19:
        alert('7 pm')
        break;
    case 20:
        alert('8 pm')
        break;
    case 21:
        alert('9 pm')
        break;
    case 22:
        alert('10 pm')
        break;
    case 23:
        alert('11 pm')
        break;
    case 24:
        alert('12 pm')
        break;
    default:
        alert('Вы ввели неправильное время')
        break;
}



