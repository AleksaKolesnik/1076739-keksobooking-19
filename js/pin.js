'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin').content;
  var pinsDraw = function (arrayData) {
    for (var j = 0; j < window.data.COUNT_PINS; j++) {
      var clonePinTemplate = pinTemplate.cloneNode(true);
      var pinButton = clonePinTemplate.querySelector('button');
      var pinButtonLocationX = arrayData[j].location.x - window.data.OFFSET_X;
      var pinButtonLocationY = arrayData[j].location.y - window.data.OFFSET_Y;
      pinButton.style.left = pinButtonLocationX + 'px';
      pinButton.style.top = pinButtonLocationY + 'px';
      var pinButtonImage = pinButton.querySelector('img');
      pinButtonImage.src = arrayData[j].author.avatar;
      pinButtonImage.alt = arrayData[j].offer.title;
      window.data.mapPins.appendChild(clonePinTemplate);
    }
  };
  window.load(function (arrays) {
    pinsDraw(arrays);  
  });// функция отрисовки обьектов*/
})();
