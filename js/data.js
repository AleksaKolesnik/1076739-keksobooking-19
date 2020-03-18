'use strict';

(function () {
  var OFFSET_X = 31;
  var OFFSET_Y = 70;
  var COUNT_PINS = 8;

  var roomTypes = ['palace', 'flat', 'house', 'bungalo'];
  var titleTypes = ['Рэддисон Измайлово', 'Отель Мария', 'Гостиница Брусника', 'BAKUNIN Apartment', 'Гостиница Охотник', 'Гостиница Москвич'];
  var descriptions = ['Превосходно', 'Выше ожидаемого', 'Великолепно', 'Хорошо', 'Не плохо'];
  var featuresVariant = ['popup__feature--wifi', 'popup__feature--dishwasher', 'popup__feature--parking', 'popup__feature--washer', 'popup__feature--elevator', 'popup__feature--conditioner'];
  var times = ['12:00', '13:00', '14:00'];
  var photosAll = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  var arrayRandomToCreate = function (arrayParametrs) {
    var arrayData = [];
    for (var p = 0; p < Math.ceil(Math.random() * arrayParametrs.length); p++) {
      arrayData[p] = arrayParametrs[p];
    }
    return arrayData;
  };

  var stringRandomToCreate = function (arraySrings) {
    var string = arraySrings[Math.floor(Math.random() * arraySrings.length)];
    return string;
  };

  var mapPins = document.querySelector('.map__pins');
  var mapPinsWidth = mapPins.offsetWidth;

  var arrayMocks = [];// массив куда соберем сгенерировнные обьекты

  var mokiToGenerate = function () {
    for (var g = 0; g < COUNT_PINS; g++) {
      arrayMocks[g] = {'author': {'avatar': 'img/avatars/user' + '0' + (g + 1) + '.png'},
        'offer':
                          {'title': stringRandomToCreate(titleTypes),
                            'address': OFFSET_X + Math.floor(Math.random() * (mapPinsWidth - OFFSET_X * 2)) + ',' + (130 + Math.floor(Math.random() * (630 - 130))),
                            'price': 1000 + Math.floor(Math.random() * 3000),
                            'type': stringRandomToCreate(roomTypes),
                            'rooms': Math.ceil(Math.random() * 3),
                            'guests': Math.ceil(Math.random() * 5),
                            'checkin': stringRandomToCreate(times),
                            'checkout': stringRandomToCreate(times),
                            'features': arrayRandomToCreate(featuresVariant),
                            'description': stringRandomToCreate(descriptions),
                            'photos': arrayRandomToCreate(photosAll)},
        'location': {
          'x': Math.floor(Math.random() * (mapPinsWidth)),
          'y': 130 + Math.floor(Math.random() * (500))
        }};
    }
  };
  mokiToGenerate();
  window.data = {
    OFFSET_X: OFFSET_X,
    OFFSET_Y: OFFSET_Y,
    COUNT_PINS: COUNT_PINS,
    mapPins: mapPins,
    arrayMocks: arrayMocks,
    mapPinsWidth: mapPinsWidth
  };
})();
