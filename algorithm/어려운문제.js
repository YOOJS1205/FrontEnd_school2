// 카카오 2020 공개채용 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

// 효율성 테스트는 대부분 클래스와 트리로 구현해야 한다.

words: ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao']
queries: ['fro??', '????o', 'fr???', 'fro???', 'pro?']
result: [3, 2, 4, 1, 0]

'fro??' -> 3
'????o' -> 2
'fr???' -> 4

// 1. 정규표현식 사용
'frodo'.match(/fro../g);

const 패턴 = new RegExp('fro..', 'g');
패턴.test('frodo');

const 패턴 = new RegExp('fro..', 'g');
패턴.test('frodod');

const 패턴 = new RegExp('fro..', 'g');
패턴.test('aafaraoddddod');

////////////////// section - 2 ////////////////////

let words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
let queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?']

let q = queries[3].replaceAll('?', '.'); // replaceAll 일부러 사용

const 패턴 = new RegExp(q, 'g');
console.log(패턴.test(words[0]));
console.log(패턴.test(words[1]));
console.log(패턴.test(words[2]));
console.log(패턴.test(words[3])); // frozen만 true
console.log(패턴.test(words[4]));
console.log(패턴.test(words[5]));

for (s of words) {
    let 매칭카운트 = 0;
    console.log(패턴.test(s));
}