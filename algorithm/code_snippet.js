// 자료구조: 데이터를 담는 구조
// 알고리즘: 문제를 해결하는 방법(절차)
// BIG O 표기법: O(1), O(n), O(n**2), O(n**3)
// 시간복잡도(시간), 공간복잡도(메모리)

// O(n)
// while (1 < n) {
//     s += n;
//     s++;
// }

// // O(n**2)
// while (1 < n) {
//     s += n;
//     n++
//     while (1 < m) {
//         s += m;
//         m++;
//     }
// }

// 배열 시간복잡도
// 1. push() - 1
// 2. pop() - 1
// 3. shift() - n => 인덱스가 당겨진다.
// 4. unshift() - n => 인덱스가 밀린다.
// 5. fotEach, map, filter - n
// 6. find - n (하나만 찾지만 최악의 경우는 n이다.)

// 1. 예제 1~10000까지 8은 몇 번 나오는가?
const ary = Array(10000).fill(0).map((index, item) => index + item + 1);
const ary2 = [...Array(10000)].map((_, i) => i + 1);
console.log(ary);

const eightNum = (Array(100).fill(1).map((value, index) => value + index) + '').split('8').length - 1;
// 정규표현식
'12872634972836489237'.split(/8/g);

// 2. 예제 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오.
// S = {1, 3, 4, 8, 13, 17, 20} => (3, 4)
let s = [1, 3, 4, 8, 13, 17, 20];

let arr = [];
for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i-1]);
}
// JS에서는 s.length - 1 안 해도 에러 안남.
for (let i = 0; i < s.length; i++) {
    console.log(s[i + 1] - s[i]);
}

let index = arr.indexOf(Math.min(...arr));
console.log(s[index], s[index + 1]);

// zip 기능 만들기
const zip = (a, b) => a.map((value, index) => [value, b[index]]);
zip([10, 20, 30], [1, 2, 3]);

// 쌍 짓기
let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1;
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1;
    }
    return 0;
}

//////// 쉬운 풀이 /////////

// let s  = [1, 3, 4, 8, 13, 17, 20];

// const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
// let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// // 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// // MAX_SAFE_INTEGER를 주로 사용합니다!
// // let init = Number.MAX_SAFE_INTEGER;
// // let init = Number.MIN_SAFE_INTEGER;
// let init = pairs[0][1] - pairs[0][0];
// // result는 최종 결과값
// let result = [];

// for (let i of pairs) {
//     // console.log(i);
//     if (init > i[1] - i[0]) {
//         init = i[1] - i[0]
//         result = i;
//     }
// }

// console.log(result)

// map의 인수
// 1. 각 요소의 값
// 2. 각 요소의 index
// 3. 배열 자체

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트
// 3. 정렬
// 3.1 선택정렬
// 3.2 삽입정렬
// 3.3 병합정렬
// 3.4 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 1. 스택과 큐

// 스택: JS에서는 push, pop으로 구현 가능 (LIFO)

// 간편한 메서드를 만들기 위해서 클래스로
class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop(index) {
        if (index > this.arr.length - 1) {
            return this.arr.pop();
        }
        let result = this.arr.splice(index, 1);
        return result;
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    bottom() {
        return this.arr[0];
    }
}

let stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack);
stack.pop(1);
console.log(stack);