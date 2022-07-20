// for(let i = 1; i <= 10; i++){
//     console.log(`number ${i}`)
// }

// let i = 0;
// while(i<20){
//     console.log(i)
//     i++
// }

// 
// 90 excelent
// 80 very good
// 50 average
// 30 fail
// let score = 80 ;

// if(score >= 70){
//     console.log('Distinction')
// }else if(score >= 60 && score < 70){
//     console.log('Very Good')
// }else if(score >= 50 && score < 60){
//     console.log('credit')
// }else if(score >= 40 && score < 50){
//     console.log('pass')
// }else{
//     console.log('Fail')
// }
// function addNum(a, b){
//     return a + b;
// }
// console.log(addNum(3, 2));

// function divideNum(a, b){
//     return a/b;
// }

// function subtractNum(a, b){
//     return a - b;
// }

// const squareNum = (a) => a**2;

// console.log(squareNum(3));

// const numMod = (n) => n%2;
// console.log(numMod(5))

// for(let i =2; i<=20; i+=2){
//     console.log(i)
// }
let someWord = 'Adamu';
console.log(someWord.split(''));
let someArray = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(someArray.reverse(someArray))

function strToArr(str){
    return str.split('').reverse().join('');
}

console.log(strToArr('favour'));

function isPalindrome(str){
    let x = str.toLowerCase();
    let y = str.toLowerCase().split('').reverse().join('');
    if(x === y){
        return true;
    }else{
        return false;
    }
}function intPalindrome(int){
    return isPalindrome(int.toString());
}

console.log(isPalindrome('monday'));
console.log(intPalindrome(11));