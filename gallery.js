import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#main-gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
    imageClickAction: (releasePoint, e) => { playpause() },
    tapAction: (pt, evt) => {
        if (evt.target.classList.contains('pswp__img')) {
            if (isImage) playpause();
        } else {
            pswp.close();
        }
    }
});
lightbox.init();