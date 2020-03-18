'use strict';

(function () {
  var mapBlock = document.querySelector('.map');
  var pinMain = document.querySelector('.map__pin--main');
  var cardTemplate = document.querySelector('#card').content;
  var mapFilters = document.querySelector('.map__filters-container');
  var cardDraw = function (number, arrayData) {
    var cloneCardTemplate = cardTemplate.cloneNode(true);
    var popopTitle = cloneCardTemplate.querySelector('.popup__title');
    popopTitle.textContent = arrayData[number].offer.title;
    var popupTextAdress = cloneCardTemplate.querySelector('.popup__text--address');
    popupTextAdress.textContent = arrayData[number].offer.address;
    var popupTextPrice = cloneCardTemplate.querySelector('.popup__text--price');
    popupTextPrice.textContent = arrayData[number].offer.price + ' руб/ночь';
    var popupType = cloneCardTemplate.querySelector('.popup__type');
    popupType.value = arrayData[number].offer.type;
    if (popupType.value === 'palace') {
      popupType.textContent = 'Дворец';
    } else if (popupType.value === 'flat') {
      popupType.textContent = 'Квартира';
    } else if (popupType.value === 'house') {
      popupType.textContent = 'Дом';
    } else if (popupType.value === 'bungalo') {
      popupType.textContent = 'Бунгало';
    }
    var popupTextCapacity = cloneCardTemplate.querySelector('.popup__text--capacity');
    popupTextCapacity.textContent = arrayData[number].offer.rooms + ' комнаты для ' + arrayData[number].offer.guests + ' гостей.';
    var popupTextTime = cloneCardTemplate.querySelector('.popup__text--time');
    popupTextTime.textContent = 'Заезд после ' + arrayData[number].offer.checkin + ', выезд до' + arrayData[number].offer.checkout + '.';
    var popupFeatures = cloneCardTemplate.querySelector('.popup__features');
    var popupFeaturesItem = popupFeatures.querySelectorAll('li');
    for (var a = arrayData[number].offer.features.length; a < popupFeaturesItem.length; a++) {
      popupFeaturesItem[a].classList.remove('popup__feature');
    }
    var popupDescription = cloneCardTemplate.querySelector('.popup__description');
    popupDescription.textContent = arrayData[number].offer.description;
    var avatar = cloneCardTemplate.querySelector('.popup__avatar');
    avatar.src = arrayData[number].author.avatar;
    var popupPhotos = cloneCardTemplate.querySelector('.popup__photos');
    var popupPhotosImg = popupPhotos.querySelector('img');
    popupPhotosImg.src = arrayData[number].offer.photos[0];
    if (arrayData[number].offer.photos.length > 1) {
      for (var l = 1; l < arrayData[number].offer.photos.length; l++) {
        var Img = document.createElement('img');
        Img.classList.add('popup__photo');
        Img.src = arrayData[number].offer.photos[l];
        Img.alt = 'Фотография жилья';
        Img.style.width = '45px';
        Img.style.height = '40px';
        popupPhotos.appendChild(Img);
      }
    }
    return cloneCardTemplate;
    //mapBlock.insertBefore(cloneCardTemplate, mapFilters);
  };// функция отрисовки карточки обьекта

  window.load(function (arrays) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(cardDraw(0, arrays));
    mapBlock.insertBefore(fragment, mapFilters);
  });
  
 //cardDraw(0, window.data.arrayMocks);
 
  window.card = {
    pinMain: pinMain,
    cardDraw: function (number, arrayData) {
      var cloneCardTemplate = cardTemplate.cloneNode(true);
      var popopTitle = cloneCardTemplate.querySelector('.popup__title');
      popopTitle.textContent = arrayData[number].offer.title;
      var popupTextAdress = cloneCardTemplate.querySelector('.popup__text--address');
      popupTextAdress.textContent = arrayData[number].offer.address;
      var popupTextPrice = cloneCardTemplate.querySelector('.popup__text--price');
      popupTextPrice.textContent = arrayData[number].offer.price + ' руб/ночь';
      var popupType = cloneCardTemplate.querySelector('.popup__type');
      popupType.value = arrayData[number].offer.type;
      if (popupType.value === 'palace') {
        popupType.textContent = 'Дворец';
      } else if (popupType.value === 'flat') {
        popupType.textContent = 'Квартира';
      } else if (popupType.value === 'house') {
        popupType.textContent = 'Дом';
      } else if (popupType.value === 'bungalo') {
        popupType.textContent = 'Бунгало';
      }
      var popupTextCapacity = cloneCardTemplate.querySelector('.popup__text--capacity');
      popupTextCapacity.textContent = arrayData[number].offer.rooms + ' комнаты для ' + arrayData[number].offer.guests + ' гостей.';
      var popupTextTime = cloneCardTemplate.querySelector('.popup__text--time');
      popupTextTime.textContent = 'Заезд после ' + arrayData[number].offer.checkin + ', выезд до' + arrayData[number].offer.checkout + '.';
      var popupFeatures = cloneCardTemplate.querySelector('.popup__features');
      var popupFeaturesItem = popupFeatures.querySelectorAll('li');
      for (var a = arrayData[number].offer.features.length; a < popupFeaturesItem.length; a++) {
        popupFeaturesItem[a].classList.remove('popup__feature');
      }
      var popupDescription = cloneCardTemplate.querySelector('.popup__description');
      popupDescription.textContent = arrayData[number].offer.description;
      var avatar = cloneCardTemplate.querySelector('.popup__avatar');
      avatar.src = arrayData[number].author.avatar;
      var popupPhotos = cloneCardTemplate.querySelector('.popup__photos');
      var popupPhotosImg = popupPhotos.querySelector('img');
      popupPhotosImg.src = arrayData[number].offer.photos[0];
      if (arrayData[number].offer.photos.length > 1) {
        for (var l = 1; l < arrayData[number].offer.photos.length; l++) {
          var Img = document.createElement('img');
          Img.classList.add('popup__photo');
          Img.src = arrayData[number].offer.photos[l];
          Img.alt = 'Фотография жилья';
          Img.style.width = '45px';
          Img.style.height = '40px';
          popupPhotos.appendChild(Img);
        }
      }
      return cloneCardTemplate;
    }
  };
})();
