"use strict";

var OFFSET_X = 25;
var OFFSET_Y = 70;
var COUNT_PINS = 8;
var titleTypes = ["Рэддисон Измайлово", "Отель Мария", "Гостиница Брусника", "BAKUNIN Apartment", "Гостиница Охотник", "Гостиница Москвич"];
var featuresVariant = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var times = ["12:00", "13:00", "14:00"];
var photosAll = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var roomTypes = ["palace", "flat", "house", "bungalo"];


var arrayRandomToCreate = function (arrayParametrs) {
  var p = 0;
  var arrayData = [];
  for (p < Math.ceil(Math.random() * arrayParametrs.length); p++;) {
    arrayData[i] = arrayParametrs[i];
  }
  return arrayData;
}// генератор случайных массивов

var stringRandomToCreate = function (arrayStrings) {
  var f = 0;
  var string = arrayStrings[Math.floor(Math.random() * arrayStrings.length)];
  return string
}//генератор строк

var mapPins = document.querySelector('.map__pins')
var mapPinsWidth = mapPins.offsetWidth;

var arrayMocks = [];// массив куда соберем сгенерировнные обьекты

var mokiToGenerate = function () {
  for (var g = 0; g < COUNT_PINS; g++){
    arrayMocks[g] = { "author": {"avatar": "img/avatars/user" + "0" + (g+1) + ".png" },
                      "offer":
                        { "title": stringRandomToCreate(titleTypes),
                       "address": Math.floor(Math.random() * document.documentElement.clientWidth) + "," + (130 + Math.floor(Math.random() * (630 - 130))),
                       "price": 1000 + Math.floor(Math.random() * 3000),
                       "type": stringRandomToCreate(roomTypes),
                       "rooms": Math.ceil(Math.random() * 3),
                       "guests": Math.ceil(Math.random() * 5),
                       "checkin": stringRandomToCreate(times),
                       "checkout": stringRandomToCreate(times),
                       "features": arrayRandomToCreate(featuresVariant),
                        "description": "Тра ля ля",
                       "photos": arrayRandomToCreate(photosAll)},
                "location": {
                            "x": OFFSET_X + Math.floor(Math.random() * (mapPinsWidth - OFFSET_X*2)),
                            "y": 130 + Math.floor(Math.random() * (500))
             }};
  }
};

mokiToGenerate();// генератор обьектов

var mapBlock = document.querySelector(".map");
var adForm = document.querySelector('.ad-form');
var mapFilters = document.querySelector('.map__filters')
//mapBlock.classList.remove("map--faded");


/*var pinTemplate = document.querySelector("#pin").content;
var mapPins = document.querySelector(".map__pins");

var pinsDraw = function(){
  for(var j = 0 ; j < COUNT_PINS; j++){
var clonePinTemplate = pinTemplate.cloneNode(true);
var pinButton = clonePinTemplate.querySelector("button");
var pinButtonLocationX = arrayMocks[j].location.x - OFFSET_X;
var pinButtonLocationY = arrayMocks[j].location.y - OFFSET_Y;
pinButton.style.left = pinButtonLocationX + "px";
pinButton.style.top = pinButtonLocationY + "px";
var pinButtonImage = pinButton.querySelector("img");
pinButtonImage.src = arrayMocks[j].author.avatar;
pinButtonImage.alt = arrayMocks[j].offer.title;
mapPins.appendChild(clonePinTemplate);}};

pinsDraw();//функция отрисовки обьектов*/

var fieldsets = document.querySelectorAll('fieldset');
for (var k = 0;k<fieldsets.length; k++ ) {
  fieldsets[k].setAttribute("disabled","disabled");
};
var inputAddress = document.querySelector('#address');
var pinKeks = document.querySelector('.map__pin--main');

var onPinButtonClick = function () {
  for (var k = 0;k<fieldsets.length; k++ ) {
  fieldsets[k].removeAttribute("disabled","disabled");
};
  mapBlock.classList.remove("map--faded");
  adForm.classList.remove('ad-form--disabled');
  inputAddress.value = (parseInt(pinKeks.style.top,10) + OFFSET_X) + ';' + (parseInt(pinKeks.style.left,10) + OFFSET_Y);
 };

var pinMain = document.querySelector(".map__pin--main");

pinMain.addEventListener("mousedown", function (evt){
 if(evt.button == "0"){ onPinButtonClick();}
})

pinMain.addEventListener("keydown", function (evt){
 if(evt.key === "Enter"){ onPinButtonClick();}
});

var capacity = document.querySelector('#capacity');// количество гостей
var roomNumber = document.querySelector('#room_number');// количество комнат


capacity.addEventListener ('change', function () {
 if ((roomNumber.value === '1') && (capacity.value !== '1')){
 capacity.setCustomValidity('одна комната может вместить только одного гостя');
} else if ((roomNumber.value === '100') && (capacity.value !== '0')){
 capacity.setCustomValidity('данный тип размещения не предусмотрен для гостей');
} else if ((roomNumber.value === '3') && (capacity.value === '0')){
 capacity.setCustomValidity('данный тип размещения только для гостей');
} else if ((roomNumber.value === '2') && (capacity.value === '3')){
 capacity.setCustomValidity('слишком много');
} else if ((roomNumber.value === '2') && (capacity.value === '0')){
 capacity.setCustomValidity('только для гостей');
}else {
  capacity.setCustomValidity('');
  }
});

adForm.addEventListener('submit', function (evt) {
 if ((roomNumber.value === '1') && (capacity.value !== '1')){
 evt.preventDefault();
 capacity.setCustomValidity('одна комната может вместить только одного гостя');
} else if ((roomNumber.value === '100') && (capacity.value !== '0')){
  evt.preventDefault();
 capacity.setCustomValidity('данный тип размещения не предусмотрен для гостей');
} else if ((roomNumber.value === '3') && (capacity.value === '0')){
 evt.preventDefault();
 capacity.setCustomValidity('данный тип размещения только для гостей');
} else if ((roomNumber.value === '2') && (capacity.value === '3')){
 evt.preventDefault();
 capacity.setCustomValidity('слишком много');
} else if ((roomNumber.value === '2') && (capacity.value === '0')){
 evt.preventDefault();
 capacity.setCustomValidity('только для гостей');
}else {
  capacity.setCustomValidity('');
  }
})






