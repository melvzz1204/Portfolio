const lazyImg = () => {


    const lazyImage = document.querySelectorAll('.lazy-loading');
    
    const observer = new IntersectionObserver((entry, observer) => {
        entry.forEach(entries => {
            if (entries.isIntersecting) {
                let img = entries.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
            }
        });
    
    });
    
    lazyImage.forEach(img => {
    observer.observe(img);
    });

}
export default lazyImg;