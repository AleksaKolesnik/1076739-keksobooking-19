'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin').content;
  var pinsDraw = function () {
    for (var j = 0; j < window.data.COUNT_PINS; j++) {
      var clonePinTemplate = pinTemplate.cloneNode(true);
      var pinButton = clonePinTemplate.querySelector('button');
      var pinButtonLocationX = window.data.arrayMocks[j].location.x - window.data.OFFSET_X;
      var pinButtonLocationY = window.data.arrayMocks[j].location.y - window.data.OFFSET_Y;
      pinButton.style.left = pinButtonLocationX + 'px';
      pinButton.style.top = pinButtonLocationY + 'px';
      var pinButtonImage = pinButton.querySelector('img');
      pinButtonImage.src = window.data.arrayMocks[j].author.avatar;
      pinButtonImage.alt = window.data.arrayMocks[j].offer.title;
      window.data.mapPins.appendChild(clonePinTemplate);
    }
  };
  pinsDraw();// функция отрисовки обьектов*/
})();