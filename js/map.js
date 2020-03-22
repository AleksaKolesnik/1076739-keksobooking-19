'use strict';

(function () {
  var mapBlock = document.querySelector('.map');
  var mapFilters = mapBlock.querySelector('.map__filters-container');
  var onSuccess = function (arrays) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arrays.length; i++) {
      fragment.appendChild(window.pin.toDraw(arrays[i]));
    }
    window.data.mapPins.appendChild(fragment);
    var pinMain = document.querySelector('.map__pins');
    var pins = pinMain.querySelectorAll('.map__pin');
    var adPins = [];
    for (var pinNumber = 0; pinNumber < pins.length; pinNumber++) {
      if (!pins[pinNumber].classList.contains('map__pin--main')) {
        adPins.push(pins[pinNumber]);
      }
    }// массив меток исключающий первую 
    var onPinClickOpenCard = function (num) {
      adPins[num].addEventListener('click', function () {
        var onSuccessCard = function (arraysData) {
          var fragmentCard = document.createDocumentFragment();
          fragmentCard.appendChild(window.card.cardDraw(arraysData[num]));
          mapBlock.insertBefore(fragmentCard, mapFilters);
          onCloseEsc();
          onCloseClick();
        };
        window.load(onSuccessCard); 
      });
    };   
    var onAdPinClick = function (numCard) {
      adPins[numCard].addEventListener('click', function () {
        //var cards = document.querySelectorAll('.map__card');
        var mapCard = mapBlock.querySelector('.map__card');
        if (mapCard) {
          mapBlock.removeChild(mapCard);
        }
      });
    };
    var onAdPinEnterDown = function (numCards) {
      adPins[numCards].addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          var mapCard = mapBlock.querySelector('.map__card');
          if (mapCard) {
            mapBlock.removeChild(mapCard);
          }
          onCloseClick();
          onCloseEsc();
        }
      });
    };
    var onCloseEsc = function () {
      document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
          var mapCard = mapBlock.querySelector('.map__card');
          mapBlock.removeChild(mapCard);
        }
      });
    };
    for (var numCards = 0; numCards < adPins.length; numCards++) {
      onAdPinClick(numCards);
      onAdPinEnterDown(numCards);
      onPinClickOpenCard(numCards);
    }// вещаем функию обработчик на каждую метку

    var onCloseClick = function () {
      var mapCard = mapBlock.querySelector('.map__card');
      var cardClose = mapBlock.querySelector('.popup__close');
      cardClose.addEventListener('click', function () {
        mapBlock.removeChild(mapCard);
      });
    };// функция обработчик закрывашка для карточки     
  };
  var onErorr = function (erorrMessage) {
    var hint = document.createElement('div');
    hint.style = 'z-index: 100; text-align: center; background-color: #FF6600;';
    hint.style.position = 'absolute';
    hint.style.left = 0;
    hint.style.right = 0;
    hint.style.fontSize = '30px';
    hint.textContent = erorrMessage; 
    document.body.insertAdjacentElement('afterbegin', hint);
  };
  window.load(onSuccess, onErorr);
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
