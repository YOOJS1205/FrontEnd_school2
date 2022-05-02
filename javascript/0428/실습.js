const GenerateButton = document.querySelector('.generator');
const Text = document.querySelector('.text');

GenerateButton.addEventListener('click', () => {
    const num = Math.ceil(Math.random() * 31);
    if (num >= 13) {
        Text.innerText = num;
    }
    else {
        Text.innerText = '다시 숫자를 생성하세요!'
    }
})