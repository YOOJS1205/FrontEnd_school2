// 캐러셀 이미지 src
const imgSrc = ['images/cute.png', 'images/gary.png',
                'images/licat.png', 'images/mouse.png',
                'images/rabbit.png',];

const carousel = document.querySelector('.carousel');
// const content = document.createElement('div');


// for (let i = 0; i < imgSrc.length; i++) {
//     const content = document.createElement('div');
//     carousel.appendChild(content);
//     content.style.backgroundImage = `url(${imgSrc[i]})`;
// }

imgSrc.forEach(itemSrc => {
    const content = document.createElement('div');
    carousel.appendChild(content);
    content.classList.add('item');
    content.style.backgroundImage = `url('${itemSrc}')`;
})