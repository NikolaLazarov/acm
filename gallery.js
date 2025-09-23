import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#main-gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
    bgClickAction: 'close',
    bgMobileClickAction: 'close'
});
lightbox.init();
lightbox.on('bindEvents', () => {
  lightbox.pswp.on('bgClick', () => {
    lightbox.pswp.close();
  });
});