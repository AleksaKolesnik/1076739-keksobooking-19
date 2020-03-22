'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var fieldsets = document.querySelectorAll('fieldset');
  for (var k = 0; k < fieldsets.length; k++) {
    fieldsets[k].setAttribute('disabled', 'disabled');
  } // делаем элементы на странице не активными
  var inputAddress = document.querySelector('#address');
  var pinKeks = document.querySelector('.map__pin--main');

  var onPinButtonClick = function () {
    for (var c = 0; c < fieldsets.length; c++) {
      fieldsets[c].removeAttribute('disabled', 'disabled');
    }
    window.map.mapBlock.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    inputAdressToCalculate();
  }; // функция обработчик при клике на метку включается содержимое и в поле адрес показываются текущие координаты метки
  var inputAdressToCalculate = function () {
    inputAddress.value = (parseInt(pinKeks.style.left, 10) + window.data.OFFSET_X) + ';' + (parseInt(pinKeks.style.top, 10) + window.data.OFFSET_Y);
    console.log(window.data.OFFSET_X)
  }
  window.card.pinMain.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      onPinButtonClick();
    }
  });
  window.card.pinMain.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      onPinButtonClick();
    }
  });

  var capacity = document.querySelector('#capacity');// количество гостей
  var roomNumber = document.querySelector('#room_number');// количество комнат
  var typeRoom = document.querySelector('#type');
  var price = document.querySelector('#price');
  var timeIn = document.querySelector('#timein');
  var timeOut = document.querySelector('#timeout');

  timeOut.addEventListener('change', function () {
    if (timeIn.value !== timeOut.value) {
      timeOut.setCustomValidity('время должны совпадать');
    } else {
      timeOut.setCustomValidity('');
    }
  });

  timeIn.addEventListener('change', function () {
    if (timeIn.value !== timeOut.value) {
      timeIn.setCustomValidity('время должны совпадать');
    } else {
      timeIn.setCustomValidity('');
    }
  });

  typeRoom.addEventListener('change', function () {
    if (typeRoom.value === 'bungalo') {
      price.setAttribute('min', '0');
      price.placeholder = '0';
    } else if (typeRoom.value === 'flat') {
      price.setAttribute('min', '1000');
      price.placeholder = '1000';
    } else if (typeRoom.value === 'house') {
      price.setAttribute('min', '5000');
      price.placeholder = '5000';
    } else if (typeRoom.value === 'palace') {
      price.setAttribute('min', '10000');
      price.placeholder = '10000';
    }
  });

  capacity.addEventListener('change', function () {
    if ((roomNumber.value === '1') && (capacity.value !== '1')) {
      capacity.setCustomValidity('одна комната может вместить только одного гостя');
    } else if ((roomNumber.value === '100') && (capacity.value !== '0')) {
      capacity.setCustomValidity('данный тип размещения не предусмотрен для гостей');
    } else if ((roomNumber.value === '3') && (capacity.value === '0')) {
      capacity.setCustomValidity('данный тип размещения только для гостей');
    } else if ((roomNumber.value === '2') && (capacity.value === '3')) {
      capacity.setCustomValidity('слишком много');
    } else if ((roomNumber.value === '2') && (capacity.value === '0')) {
      capacity.setCustomValidity('только для гостей');
    } else {
      capacity.setCustomValidity('');
    }
  });

  adForm.addEventListener('submit', function (evt) {
    if ((roomNumber.value === '1') && (capacity.value !== '1')) {
      evt.preventDefault();
      capacity.setCustomValidity('одна комната может вместить только одного гостя');
    } else if ((roomNumber.value === '100') && (capacity.value !== '0')) {
      evt.preventDefault();
      capacity.setCustomValidity('данный тип размещения не предусмотрен для гостей');
    } else if ((roomNumber.value === '3') && (capacity.value === '0')) {
      evt.preventDefault();
      capacity.setCustomValidity('данный тип размещения только для гостей');
    } else if ((roomNumber.value === '2') && (capacity.value === '3')) {
      evt.preventDefault();
      capacity.setCustomValidity('слишком много');
    } else if ((roomNumber.value === '2') && (capacity.value === '0')) {
      evt.preventDefault();
      capacity.setCustomValidity('только для гостей');
    } else {
      capacity.setCustomValidity('');
    }
  });

  window.main = {
    pinKeks: pinKeks,
    inputAdressToCalculate: function () {
      inputAddress.value = (parseInt(pinKeks.style.left, 10) + window.data.OFFSET_X) + ';' + (parseInt(pinKeks.style.top, 10) + window.data.OFFSET_Y);
    }
  }

})();
