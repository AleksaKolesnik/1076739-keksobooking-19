'use strict';

(function () {
  window.main.pinKeks.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    if (parseInt(window.main.pinKeks.style.left,10) < (0-window.data.OFFSET_X)) {
      window.main.pinKeks.style.left = (0 - window.data.OFFSET_X) + 'px';
    } else if (parseInt(window.main.pinKeks.style.left,10) > (window.data.mapPinsWidth - window.data.OFFSET_X )) {
      window.main.pinKeks.style.left = (window.data.mapPinsWidth - window.data.OFFSET_X) + 'px';
    } else {
      window.main.pinKeks.style.left = (window.main.pinKeks.offsetLeft - shift.x) + 'px';
    }

    if (parseInt(window.main.pinKeks.style.top,10) < (130 - window.data.OFFSET_Y)) {
      window.main.pinKeks.style.top = (130 - window.data.OFFSET_Y) + 'px';
    } else if (parseInt(window.main.pinKeks.style.top,10) > 570){
      window.main.pinKeks.style.top = 570 +'px';
    } else {
      window.main.pinKeks.style.top = (window.main.pinKeks.offsetTop - shift.y) + 'px';
    }


  };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      window.main.inputAdressToCalculate();
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }

  document.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  });


})()
