// 20은 숫자 리터럴
var 변수하나 = 20;
// var num = new Number(20); => 생성자 함수

// 원시 자료형 vs 객체 자료형

/* 원시자료형이 저장된 변수를 다른 변수에 할당하면 값자체가 복사되고 
복사된 변수를 변경해도 원래 변수는 변하지 않습니다. */

// NaN도 숫자형이다.
var 변수둘 = 10;
var 변수셋 = 2;

document.write('변수하나 : ', 변수하나);
document.write('<br>');
document.write('변수둘 : ', 변수둘);
document.write('<br>');
document.write('변수셋 : ', 변수셋);
document.write('<br>');
document.write('변수하나+변수둘 : ', 변수하나+변수둘);
document.write('<br>');
document.write('변수하나-변수둘 : ', 변수하나-변수둘);
document.write('<br>');
document.write('변수하나/변수둘 : ', 변수하나/변수둘);
document.write('<br>');
document.write('변수하나*변수둘 : ', 변수하나*변수둘);
document.write('<br>');
document.write('변수하나**변수셋 : ', 변수하나**변수셋);
document.write('<br>');
document.write('변수하나%변수셋 : ', 변수하나%변수셋);

//숫자형 (Number)
var num = 10;

document.write(num, '<br>');  // 10
document.write(num/3, '<br>');  // 3.3333..
document.write(parseInt(num/3), '<br>');  // 3

/* 숫자형의 사칙연산 */
document.write("더하기 : ", 2 + 2.5, '<br>');  // 4.5
document.write("빼기 : ", 5 - 7, '<br>');  // -2
document.write("곱하기 : ", 3 * 2, '<br>');  // 6
document.write("나누기 : ", 2/2, '<br>'); // 1

/*특수 숫자 값*/
document.write("무한대 : ", 1/0,'<br>'); // Infinity
document.write( "숫자가 아님" / 2 , '<br>'); 
// NaN, 문자열을 숫자로 나누면 오류가 발생합니다.

document.write(0.1 + 0.2 == 0.3, '<br>');
document.write(9999999999999999999, '<br>');