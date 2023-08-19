document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');

    const images = [
        './imgs/screen/sc1.png',
        './imgs/screen/sc2.png',
        './imgs/screen/sc3.png',
        './imgs/screen/sc4.png'
    ];

    let currentIndex = 0;

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.height = '400px';
        img.style.objectFit = 'cover';
        img.classList.add('carousel-image');
        if (index !== 0) {
            img.style.opacity = 0;
            img.style.left = '100%';
        } else {
            img.style.opacity = 1;  // 一枚目の画像のopacityを1に設定
            img.style.left = '0';   // 一枚目の画像のleftを0に設定
        }
        carousel.appendChild(img);
    })

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % images.length;
    
        carousel.children[currentIndex].style.opacity = 0;
        carousel.children[currentIndex].style.left = '-100%';  
    
        setTimeout(() => {
            carousel.children[currentIndex].style.left = '90%'; // 画像が左に完全に移動した後、非表示のまま右側に移動する
        }, 500); // 1秒後（トランジション終了後）
    
        setTimeout(() => {
            carousel.children[nextIndex].style.opacity = 1;
            carousel.children[nextIndex].style.left = '0';  
        }, 1000); // 1秒後に次の画像を中央に表示
        currentIndex = nextIndex;
    }, 3500); // 2秒のトランジション時間と5秒の表示時間を合わせて7秒に設定
    
    carousel.addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % images.length;
    
        carousel.children[currentIndex].style.opacity = 0;
        carousel.children[currentIndex].style.left = '-100%';
    
        setTimeout(() => {
            carousel.children[currentIndex].style.left = '90%'; // 画像が左に完全に移動した後、非表示のまま右側に移動する
        }, 10);
    
        setTimeout(() => {
            carousel.children[nextIndex].style.opacity = 1;
            carousel.children[nextIndex].style.left = '0';
        }, 1000);
        currentIndex = nextIndex;
    });
    

});
