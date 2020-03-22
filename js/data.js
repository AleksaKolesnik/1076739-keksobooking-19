'use strict';

(function () {
  var OFFSET_X = 31;
  var OFFSET_Y = 70;
  var COUNT_PINS = 8;
  var mapPins = document.querySelector('.map__pins');
  var mapPinsWidth = mapPins.offsetWidth;
  
  window.data = {
    OFFSET_X: OFFSET_X,
    OFFSET_Y: OFFSET_Y,
    COUNT_PINS: COUNT_PINS,
    mapPins: mapPins,
    mapPinsWidth: mapPinsWidth
  };
})();
