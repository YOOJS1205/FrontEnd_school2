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

// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

// 연결리스트 기본 형태
// next가 값이 아닌 노드를 가리키는 것
const list = {
    head: {
        value: 12,
        next: {
            value: 99,
            next: {
                value: 37,
                next: null
            }
    }}
}

const list2 = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: {
                        value: 21,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(list2.head.next.next.next.value);

// 클래스로 구현
// step 1 노드 생성
// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// 노드1 = new Node(10);
// 노드2 = new Node(20);
// 노드3 = new Node(30);

// 노드1.next = 노드2;
// 노드2.next = 노드3;

// step 2 자동으로 다음 노드가 연결되는 linked list 구현
// head -> ['head', next]
//                ^
//                |
//              tail
// head -> ['init', next] -> [90, next]
//                               ^
//                               |
//                             tail
// class LinkedList {
//     constructor() {
//         let init = new Node('init');
//         this.head = init;
//         this.tail = init;
//     }

//     append(data) {
//         let newNode = new Node(data);
//         // 마지막 값(null)은 새로운 노드가 됨
//         this.tail.next = newNode;
//         // 마지막 노드는 새로운 노드가 됨
//         this.tail = newNode;
//     }
// }

// l = new LinkedList();
// l.append(1);
// l.append(2);
// l.append(3);
// l.append(10);
// l.append(20);
// l.append(30);

// console.log(l.head);
// console.log(l.head.next.data);
// console.log(l.head.next.next.data);

// step 3 Length 구현
// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         let init = new Node('init')
//         this.head = init
//         this.tail = init

//         this.데이터수 = 0;
//         this.데이터들 = [];
//     }

//     length() {
//         return this.데이터수;
//     }

//     toString() {
//         // 삭제할 때 어려울듯..
//         return '[' + this.데이터들.toString() + ']';
//     }
    
//     append(data){
//         let 새로운노드 = new Node(data)
//         this.tail.next = 새로운노드
//         this.tail = 새로운노드

//         this.데이터수++;
//         this.데이터들.push(data);
//     }
// }

// l = new LinkedList()
// l.append(1)
// l.append(2)
// l.append(3)
// l.append(10)
// l.append(20)
// l.append(30)
// l.length();

// l.head
// l.head.next.data
// l.head.next.next.data
// l.head.next.next.next.data

// step 4 (중요) 데이터를 순회하면서 추가!!
// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         let init = new Node('init')
//         this.head = init
//         this.tail = init

//         this.데이터수 = 0;
//     }

//     length() {
//         return this.데이터수;
//     }

//     toString() {
//         let 순회용현재노드 = this.head;
//         순회용현재노드 = 순회용현재노드.next;

//         let 데이터들 = '';
//         for (let i = 0; i < this.데이터수; i++) {
//             데이터들 += `${순회용현재노드.data}, `;
//         }

//         return '[' + 데이터들.slice(0, -2) + ']';
//     }

//     // data를 얻기 위한 메서드, data 넣기 위한 메서드 => getter, setter
//     fullData() {
//         return JSON.parse(this.toString());
//     }
    
//     append(data){
//         let 새로운노드 = new Node(data)
//         this.tail.next = 새로운노드
//         this.tail = 새로운노드

//         this.데이터수++;
//         this.데이터들.push(data);
//     }
// }

// l = new LinkedList()
// l.append(1)
// l.append(2)
// l.append(3)
// l.append(10)
// l.append(20)
// l.append(30)
// l.length();

// // node 삽입하기
// class LinkedList {
//     constructor(){
//         let init = new Node('init')
//         this.head = init
//         this.tail = init

//         this.데이터수 = 0;
//     }

//     length() {
//         return this.데이터수;
//     }

//     toString() {
//         let 순회용현재노드 = this.head;
//         순회용현재노드 = 순회용현재노드.next;

//         let 데이터들 = '';
//         for (let i = 0; i < this.데이터수; i++) {
//             데이터들 += `${순회용현재노드.data}, `;
//         }

//         return '[' + 데이터들.slice(0, -2) + ']';
//     }

//     // data를 얻기 위한 메서드, data 넣기 위한 메서드 => getter, setter
//     fullData() {
//         return JSON.parse(this.toString());
//     }
    
//     append(data){
//         let 새로운노드 = new Node(data)
//         this.tail.next = 새로운노드
//         this.tail = 새로운노드

//         this.데이터수++;
//         this.데이터들.push(data);
//     }

//     insert(index, data) {
//         let 순회용현재노드 = this.head;
//         순회용현재노드 = 순회용현재노드.next;

//         for (let i = 0; i < index - 1; i++) {
//             순회용현재노드 = 순회용현재노드.next
//         }

//         let 새로운노드 = new Node(data);
//         새로운노드.next = 순회용현재노드.next;

//         this.데이터수++;
//     }
// }

// 최종
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }

    toString(){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        let 데이터들 = ''
        for (let i = 0; i < this.데이터수; i++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return '[' + 데이터들.slice(0, -2) + ']'
    }

    // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
    fullData(){
        return JSON.parse(this.toString())
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }

    insert(index, data){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next
        }

        let 새로운노드 = new Node(data)
        새로운노드.next = 순회용현재노드.next
        순회용현재노드.next = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
console.log(l.fullData())
l.insert(3, 1000)
console.log(l.fullData())

// 3. 정렬
// 3.1 선택 정렬

// step 1
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

// [199, 22, 33, 32, 64, 72, 222, 233]
// [12]

// [199, 33, 32, 64, 72, 222, 233]
// [12, 22]

// [199, 33, 64, 72, 222, 233]
// [12, 22, 32]

// [199, 64, 72, 222, 233]
// [12, 22, 32, 33]

// [199, 72, 222, 233]
// [12, 22, 32, 33, 64]

// [199, 222, 233]
// [12, 22, 32, 33, 64, 72]

let 길이 = 입력값.length;

for (let i = 0; i < 길이; i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1);
}

// 3.1 선택정렬 (메서드 최소화) - 다른 풀이
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }

        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// 3.2 삽입정렬 (자기가 들어갈 위치를 찾아간다. 복잡도 n**2)
let 입력값2 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열2 = [];
let 배열의길이 = 입력값2.length;

// [22, 33, 12, 32, 64, 72, 222, 233]
// [199]

// [33, 12, 32, 64, 72, 222, 233]
// [22, 199]

// [12, 32, 64, 72, 222, 233]
// [22, 33, 199]

// [32, 64, 72, 222, 233]
// [12, 22, 33, 199]

// [64, 72, 222, 233]
// [12, 22, 32, 33, 199]

// [72, 222, 233]
// [12, 22, 32, 33, 64, 199]

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값) {
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]) {
            return i
        }
    }
    return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift();
    let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열2, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값);
}

console.log(정렬된배열2);

function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let [value, ...arr2] = arr;
        arr = arr2
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
// const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// console.log(insertSort(arr));

// 3.3 병합정렬 (분할 정복)
let before = [5, 10, 66, 77, 54, 32, 11, 15];
let after = [];

// [5, 10, 66, 77], [54, 32, 11, 15]
// [5, 10], [66, 77], [54, 32], [11, 15];
// [5]. [10], [66], [77], [54], [32], [11], [15]
// 0번째 끼리 비교 => 이게 핵심

let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    let 결과값 = []

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    let 중간값 = parseInt(입력배열의길이 / 2)
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    
    while (그룹하나.length != 0 && 그룹둘.length != 0){
        if (그룹하나[0] < 그룹둘[0]){
            결과값.push(그룹하나.shift())
        } else {
            결과값.push(그룹둘.shift())
        }
    }

    while (그룹하나.length != 0){
        결과값.push(그룹하나.shift())
    }

    while (그룹둘.length != 0){
        결과값.push(그룹둘.shift())
    }

    return 결과값
    
}

console.log(병합정렬(입력값))