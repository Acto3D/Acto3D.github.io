document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const descriptionDiv = document.querySelector('.image-description');

    const images = [
        './imgs/screen/sc1.png',
        './imgs/screen/sc2.png',
        './imgs/screen/sc3.png',
        './imgs/screen/sc4.png',
        './imgs/screen/sc5.png'
    ];

    const descriptions = [
        "Acto3D: Turn fluorescent images into 3D on your laptop.",
        "Adjust color and transparency at will. See fluorescence come alive!",
        "Tissue-clearing meets light-sheet microscopy: A 3D view of the entire embryo.",
        "Efficiently map 3D lumen structures.",
        "Visualize fluorescence and vascular structures together, in real-time."
    ];
    

    

    let currentIndex = 0;

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.objectFit = 'contain';
        img.classList.add('carousel-image');
        if (index !== 0) {
            img.style.opacity = 0;
            img.style.transform = 'translate(100%, -50%)';
        } else {
            img.style.opacity = 1;
            img.style.transform = 'translate(-50%, -50%)';
        }
        carousel.appendChild(img);
    })
    // 最初の画像に対応する説明文をセット
    descriptionDiv.textContent = descriptions[0];
    descriptionDiv.style.opacity = 1;

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % images.length;

        carousel.children[currentIndex].style.opacity = 0;
        carousel.children[currentIndex].style.transform = 'translate(-150%, -50%)';

        descriptionDiv.textContent = descriptions[nextIndex];  // 新しい説明文をセット
        descriptionDiv.style.opacity = 1;  
        // descriptionDiv.innerHTML = descriptions[nextIndex].replace(/\n/g, '<br>');


        setTimeout(() => {
            carousel.children[nextIndex].style.opacity = 1;
            carousel.children[nextIndex].style.transform = 'translate(-50%, -50%)';


        }, 100);

        let moveRightIndex = currentIndex;
        setTimeout(() => {
            carousel.children[moveRightIndex].style.transform = 'translate(100%, -50%)';
        }, 2000);

        currentIndex = nextIndex;
    }, 4000);
    
    // carousel.addEventListener('click', () => {
    //     let nextIndex = (currentIndex + 1) % images.length;
    
    //     carousel.children[currentIndex].style.opacity = 0;
    //     carousel.children[currentIndex].style.left = '-100%';
    
    //     setTimeout(() => {
    //         carousel.children[currentIndex].style.left = '90%'; // 画像が左に完全に移動した後、非表示のまま右側に移動する
    //     }, 10);
    
    //     setTimeout(() => {
    //         carousel.children[nextIndex].style.opacity = 1;
    //         carousel.children[nextIndex].style.left = '0';
    //     }, 1000);
    //     currentIndex = nextIndex;
    // });
    

});
