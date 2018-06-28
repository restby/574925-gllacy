var modalCallbackOpen = document.querySelector('.btn__map_open');
var modalCallback = document.querySelector('.modal-callback');
var modalCallbackClose = document.querySelector('.modal-callback__close-btn');
var modalCallbackOverlay = document.querySelector('.modal-overlay');

var staticMap = document.querySelector('.map__static');
var wrapperMap = document.querySelector('.map__inner');

var sliderControl0 = document.querySelector('.slider__controls-toggle_1');
var sliderControl1 = document.querySelector('.slider__controls-toggle_2');
var sliderControl2 = document.querySelector('.slider__controls-toggle_3');
var slider0 = document.querySelector('.slider__item_slide1');
var slider1 = document.querySelector('.slider__item_slide2');
var slider2 = document.querySelector('.slider__item_slide3');
var index = document.querySelector('.index');

if (sliderControl0 && sliderControl1 && sliderControl2) {
  sliderControl0.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliderControl0.classList.add('slider__controls-toggle_active');
    sliderControl1.classList.remove('slider__controls-toggle_active');
    sliderControl2.classList.remove('slider__controls-toggle_active');
    slider0.classList.remove('slider__item_hidden');
    slider1.classList.add('slider__item_hidden');
    slider2.classList.add('slider__item_hidden');
    index.classList.add('index_bg-1');
    index.classList.remove('index_bg-2');
    index.classList.remove('index_bg-3');
  });
  sliderControl1.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliderControl1.classList.add('slider__controls-toggle_active');
    sliderControl2.classList.remove('slider__controls-toggle_active');
    sliderControl0.classList.remove('slider__controls-toggle_active');
    slider1.classList.remove('slider__item_hidden');
    slider2.classList.add('slider__item_hidden');
    slider0.classList.add('slider__item_hidden');
    index.classList.add('index_bg-2');
    index.classList.remove('index_bg-3');
    index.classList.remove('index_bg-1');
  });
  sliderControl2.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliderControl2.classList.add('slider__controls-toggle_active');
    sliderControl0.classList.remove('slider__controls-toggle_active');
    sliderControl1.classList.remove('slider__controls-toggle_active');
    slider2.classList.remove('slider__item_hidden');
    slider0.classList.add('slider__item_hidden');
    slider1.classList.add('slider__item_hidden');
    index.classList.add('index_bg-3');
    index.classList.remove('index_bg-1');
    index.classList.remove('index_bg-2');
  });
}

if (modalCallback) {
  modalCallbackOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalCallback.classList.add('modal-callback_show');
    modalCallbackOverlay.classList.add('modal-overlay-show');
  });

  modalCallbackClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalCallback.classList.remove('modal-callback_show');
    modalCallbackOverlay.classList.remove('modal-overlay-show');
  });
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalCallback.classList.contains('modal-callback_show')) {
      modalCallback.classList.remove('modal-callback_show');
      }
      if (modalCallbackOverlay.classList.contains('modal-overlay-show')) {
      modalCallbackOverlay.classList.remove('modal-overlay-show');
      }
    }
  });
}

if(staticMap) {
  staticMap.classList.add('map__static_hide-map');
  wrapperMap.innerHTML = '<iframe src="https://yandex.by/map-widget/v1/-/CBqqYEBmWB" width="1200" height="430" frameborder="0"></iframe>';
};
