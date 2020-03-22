'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin').content;
  window.pin.toDraw = function (arrayData) {
    var clonePinTemplate = pinTemplate.cloneNode(true);
    var pinButton = clonePinTemplate.querySelector('button');
    var pinButtonLocationX = arrayData.location.x - window.data.OFFSET_X;
    var pinButtonLocationY = arrayData.location.y - window.data.OFFSET_Y;
    pinButton.style.left = pinButtonLocationX + 'px';
    pinButton.style.top = pinButtonLocationY + 'px';
    var pinButtonImage = pinButton.querySelector('img');
    pinButtonImage.src = arrayData.author.avatar;
    pinButtonImage.alt = arrayData.offer.title;
    return clonePinTemplate;
  };// функция отрисовки обьектов*/
})();
