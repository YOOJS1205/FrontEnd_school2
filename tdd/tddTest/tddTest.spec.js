// describe => 테스트 유닛들의 모음
// 인자 1. unit test의 제목, 2. 콜백함수
describe('자스민 테스트 입니다.', () => {
    // it => 개별 테스트 유닛
    it('1씩 더해주는 함수입니다.', () => {
        let num = 30;

        // expect: 기대식, 실행할 함수의 결과값을 인수로 전달합니다.
        // toBe: 매치함수, 내가 기대한 결과와 일치하는지 판단하는 함수
        expect(plusOne(num)).toBe(num + 1);
    })
})