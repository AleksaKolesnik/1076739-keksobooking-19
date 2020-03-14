'use strict';

(function () {
var mapBlock = document.querySelector('.map');
var mapCard = mapBlock.querySelector('.map__card');
var cardClose = mapCard.querySelector('.popup__close');

var pins = document.querySelectorAll('.map__pin');
var adPins = [];
for (var pinNumber = 0; pinNumber < pins.length; pinNumber++) {
  if(!pins[pinNumber].classList.contains('map__pin--main')) {
    adPins.push(pins[pinNumber]);
  }
}// массив меток исключающий первую

var onCloseClick = function () {
  var mapCard = mapBlock.querySelector('.map__card');
  var cardClose = mapBlock.querySelector('.popup__close');
  cardClose.addEventListener( 'click', function () {
  mapBlock.removeChild(mapCard);
  })
}
onCloseClick();

var onAdPinClick = function (numCards) {
  adPins[numCards].addEventListener('click', function () {
      var mapCard = mapBlock.querySelector('.map__card');
      if (mapCard){mapBlock.removeChild(mapCard);}
      window.card.cardDraw(numCards);
      onCloseClick();
      onCloseEsc();
  })
};// клик по метке c отрисовкой карточки


var onAdPinEnterDown = function (numCards) {
  adPins[numCards].addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      var mapCard = mapBlock.querySelector('.map__card');
      if (mapCard){mapBlock.removeChild(mapCard);}
      window.card.cardDraw(numCards);
      onCloseClick();
      onCloseEsc();
    }
})
}

var onCloseClick = function () {
  var mapCard = mapBlock.querySelector('.map__card');
  var cardClose = mapBlock.querySelector('.popup__close');
  cardClose.addEventListener( 'click', function () {
  mapBlock.removeChild(mapCard);
  })
}
var onCloseEsc = function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      var mapCard = mapBlock.querySelector('.map__card');
      mapBlock.removeChild(mapCard);
    }
  })
  }

onCloseEsc();
  for (var numCards = 0; numCards < adPins.length; numCards++) {
    onAdPinClick(numCards);
    onAdPinEnterDown(numCards);
  }// вещаем функию обработчик на каждую метку

  window.map = {
    mapBlock: mapBlock,
    onCloseEsc: function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      var mapCard = mapBlock.querySelector('.map__card');
      mapBlock.removeChild(mapCard);
    }
  });
  },
  };
})();
