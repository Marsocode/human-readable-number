// jshint esversion:6
module.exports = function toReadable (number) {
    var resultStr = '';
    const first = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const second = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (Number.isNaN(parseInt(number))) return "Value is not a number";
    if (number === 0)  return "zero";
    if (number === 100)  return "one hundred";

    number = number.toString();

    // разбиваем число с помощью match на массив, таким образом можем брать индексы и от массива и от str числа
    // делим на сотые и десятые
    let numArray = ('000' + number).substr(-3);
    numArray = numArray.match(/^(\d{1})(\d{2})$/);
    // console.log(numArray[0], numArray[1], numArray[2]);
    if (numArray[1] != 0) {
        resultStr += (first[Number(numArray[1])] + " " || second[numArray[2][0]] + " " + first[numArray[2][1]]) + 'hundred ';
    }

    if (numArray[2] != 0) {
        resultStr += (first[Number(numArray[2])] || second[numArray[2][0]] + ' ' + first[numArray[2][1]]);
    }

    return resultStr.trim();
}
