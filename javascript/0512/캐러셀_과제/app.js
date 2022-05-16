// 캐러셀 이미지 src
const imgSrc = ['images/cute.png', 'images/gary.png',
                'images/licat.png', 'images/mouse.png',
                'images/rabbit.png'];

const container = document.querySelector('.container');
const carousel = document.createElement('div');
container.appendChild(carousel);
carousel.classList.add('carousel');

// container.addEventListener('click', e => {
//     console.log(e.target);
//     carousel.style.transform = 'rotateY(40deg)'
// })


imgSrc.forEach(itemSrc => {
    const content = document.createElement('div');
    carousel.appendChild(content);
    content.classList.add('item');
    content.style.backgroundImage = `url('${itemSrc}')`;
})