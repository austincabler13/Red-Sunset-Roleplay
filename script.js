document.addEventListener('DOMContentLoaded', function() {
    const scrollable = document.querySelector('.scrollable');
    const scrollContainer = document.querySelector('.scrollable');
    const scrollLeftBtn = document.querySelector('.scroll-btn.left');
    const scrollRightBtn = document.querySelector('.scroll-btn.right');

    let currentIndex = 0;
    const imageWidth = scrollable.querySelector('img').offsetWidth + 10;
    const scrollableWidth = scrollable.offsetWidth;
    const numImages = scrollable.childElementCount;
    const maxScrollOffset = (numImages - 1) * imageWidth;

    scrollLeftBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            const scrollOffset = currentIndex * imageWidth;
            scrollContainer.style.transform = `translateX(-${scrollOffset}px)`;
        }
    });

    scrollRightBtn.addEventListener('click', function() {
        if (currentIndex < numImages - 1) {
            currentIndex++;
            const scrollOffset = currentIndex * imageWidth;
            scrollContainer.style.transform = `translateX(-${scrollOffset}px)`;
        }
    });

    scrollContainer.addEventListener('scroll', function() {
        const scrollOffset = scrollContainer.scrollLeft;
        currentIndex = Math.round(scrollOffset / imageWidth);
    });
});
