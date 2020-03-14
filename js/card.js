'use strict';

(function () {
  var mapBlock = document.querySelector('.map');
  var pinMain = document.querySelector('.map__pin--main');
  var cardTemplate = document.querySelector('#card').content;
  var mapFilters = document.querySelector('.map__filters-container');
    var cardDraw = function (number) {
  var cloneCardTemplate = cardTemplate.cloneNode(true);
  var popopTitle = cloneCardTemplate.querySelector('.popup__title');
  popopTitle.textContent = window.data.arrayMocks[number].offer.title;
  var popupTextAdress = cloneCardTemplate.querySelector('.popup__text--address');
  popupTextAdress.textContent = window.data.arrayMocks[number].offer.address;
  var popupTextPrice = cloneCardTemplate.querySelector('.popup__text--price');
  popupTextPrice.textContent = window.data.arrayMocks[number].offer.price + ' руб/ночь';
  var popupType = cloneCardTemplate.querySelector('.popup__type');
  popupType.value = window.data.arrayMocks[number].offer.type;
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
  popupTextCapacity.textContent = window.data.arrayMocks[number].offer.rooms + ' комнаты для ' + window.data.arrayMocks[number].offer.guests + ' гостей.';
  var popupTextTime = cloneCardTemplate.querySelector('.popup__text--time');
  popupTextTime.textContent = 'Заезд после ' + window.data.arrayMocks[number].offer.checkin + ', выезд до' + window.data.arrayMocks[number].offer.checkout + '.';
  var popupFeatures = cloneCardTemplate.querySelector('.popup__features');
  var popupFeaturesItem = popupFeatures.querySelectorAll('li');
  for (var a = window.data.arrayMocks[number].offer.features.length; a < popupFeaturesItem.length; a++) {
    popupFeaturesItem[a].classList.remove('popup__feature');
  };
  var popupDescription = cloneCardTemplate.querySelector('.popup__description');
  popupDescription.textContent = window.data.arrayMocks[number].offer.description;
  var avatar = cloneCardTemplate.querySelector('.popup__avatar');
  avatar.src = window.data.arrayMocks[number].author.avatar;
  var popupPhotos = cloneCardTemplate.querySelector('.popup__photos');
  var popupPhotosImg = popupPhotos.querySelector('img');
  popupPhotosImg.src = window.data.arrayMocks[number].offer.photos[0];
  if (window.data.arrayMocks[number].offer.photos.length > 1) {
    for (var l = 1; l < window.data.arrayMocks[number].offer.photos.length; l++) {
      var Img = document.createElement('img');
      Img.classList.add('popup__photo');
      Img.src = window.data.arrayMocks[number].offer.photos[l];
      Img.alt = "Фотография жилья";
      Img.style.width = "45px";
      Img.style.height = "40px";
      popupPhotos.appendChild(Img);
  }
  }
  mapBlock.insertBefore(cloneCardTemplate,mapFilters);
};// функция отрисовки карточки обьекта

cardDraw(0);

  window.card = {
    pinMain: pinMain,
    cardDraw: function (number) {
  var cloneCardTemplate = cardTemplate.cloneNode(true);
  var popopTitle = cloneCardTemplate.querySelector('.popup__title');
  popopTitle.textContent = window.data.arrayMocks[number].offer.title;
  var popupTextAdress = cloneCardTemplate.querySelector('.popup__text--address');
  popupTextAdress.textContent = window.data.arrayMocks[number].offer.address;
  var popupTextPrice = cloneCardTemplate.querySelector('.popup__text--price');
  popupTextPrice.textContent = window.data.arrayMocks[number].offer.price + ' руб/ночь';
  var popupType = cloneCardTemplate.querySelector('.popup__type');
  popupType.value = window.data.arrayMocks[number].offer.type;
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
  popupTextCapacity.textContent = window.data.arrayMocks[number].offer.rooms + ' комнаты для ' + window.data.arrayMocks[number].offer.guests + ' гостей.';
  var popupTextTime = cloneCardTemplate.querySelector('.popup__text--time');
  popupTextTime.textContent = 'Заезд после ' + window.data.arrayMocks[number].offer.checkin + ', выезд до' + window.data.arrayMocks[number].offer.checkout + '.';
  var popupFeatures = cloneCardTemplate.querySelector('.popup__features');
  var popupFeaturesItem = popupFeatures.querySelectorAll('li');
  for (var a = window.data.arrayMocks[number].offer.features.length; a < popupFeaturesItem.length; a++) {
    popupFeaturesItem[a].classList.remove('popup__feature');
  };
  var popupDescription = cloneCardTemplate.querySelector('.popup__description');
  popupDescription.textContent = window.data.arrayMocks[number].offer.description;
  var avatar = cloneCardTemplate.querySelector('.popup__avatar');
  avatar.src = window.data.arrayMocks[number].author.avatar;
  var popupPhotos = cloneCardTemplate.querySelector('.popup__photos');
  var popupPhotosImg = popupPhotos.querySelector('img');
  popupPhotosImg.src = window.data.arrayMocks[number].offer.photos[0];
  if (window.data.arrayMocks[number].offer.photos.length > 1) {
    for (var l = 1; l < window.data.arrayMocks[number].offer.photos.length; l++) {
      var Img = document.createElement('img');
      Img.classList.add('popup__photo');
      Img.src = window.data.arrayMocks[number].offer.photos[l];
      Img.alt = "Фотография жилья";
      Img.style.width = "45px";
      Img.style.height = "40px";
      popupPhotos.appendChild(Img);
  }
  }
  mapBlock.insertBefore(cloneCardTemplate,mapFilters);
}
  };
})();
