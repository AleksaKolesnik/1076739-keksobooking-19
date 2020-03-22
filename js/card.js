'use strict';

(function () {
  var mapBlock = document.querySelector('.map');
  var pinMain = document.querySelector('.map__pin--main');
  var cardTemplate = document.querySelector('#card').content;
  var mapFilters = document.querySelector('.map__filters-container');
  // функция отрисовки карточки обьекта

 
  
  
  window.card = {
    pinMain: pinMain,
    cardDraw: function (arrayData) {
      var cloneCardTemplate = cardTemplate.cloneNode(true);
      var popopTitle = cloneCardTemplate.querySelector('.popup__title');
      popopTitle.textContent = arrayData.offer.title;
      var popupTextAdress = cloneCardTemplate.querySelector('.popup__text--address');
      popupTextAdress.textContent = arrayData.offer.address;
      var popupTextPrice = cloneCardTemplate.querySelector('.popup__text--price');
      popupTextPrice.textContent = arrayData.offer.price + ' руб/ночь';
      var popupType = cloneCardTemplate.querySelector('.popup__type');
      popupType.value = arrayData.offer.type;
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
      popupTextCapacity.textContent = arrayData.offer.rooms + ' комнаты для ' + arrayData.offer.guests + ' гостей.';
      var popupTextTime = cloneCardTemplate.querySelector('.popup__text--time');
      popupTextTime.textContent = 'Заезд после ' + arrayData.offer.checkin + ', выезд до' + arrayData.offer.checkout + '.';
      var popupFeatures = cloneCardTemplate.querySelector('.popup__features');
      var popupFeaturesItem = popupFeatures.querySelectorAll('li');
      for (var a = arrayData.offer.features.length; a < popupFeaturesItem.length; a++) {
        popupFeaturesItem[a].classList.remove('popup__feature');
      }
      var popupDescription = cloneCardTemplate.querySelector('.popup__description');
      popupDescription.textContent = arrayData.offer.description;
      var avatar = cloneCardTemplate.querySelector('.popup__avatar');
      avatar.src = arrayData.author.avatar;
      var popupPhotos = cloneCardTemplate.querySelector('.popup__photos');
      var popupPhotosImg = popupPhotos.querySelector('img');
      popupPhotosImg.src = arrayData.offer.photos[0];
      if (arrayData.offer.photos.length > 1) {
        for (var l = 1; l < arrayData.offer.photos.length; l++) {
          var Img = document.createElement('img');
          Img.classList.add('popup__photo');
          Img.src = arrayData.offer.photos[l];
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
