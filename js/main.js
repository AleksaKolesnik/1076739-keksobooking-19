"use strict";
var roomType = "";
var roomTypes = ["palace", "flat", "house", "bungalo"];
var roomTypesToGenerate = function (roomTypesPar) {roomType = roomTypesPar[Math.floor(Math.random() * roomTypesPar.length)];
  return roomType;
  };// генератор типа размещения

var titleType = "";
var titleTypes = ["Рэддисон Измайлово", "Отель Мария", "Гостиница Брусника", "BAKUNIN Apartment", "Гостиница Охотник", "Гостиница Москвич"];
var titleTypesToGenerate = function (titleTypesPar) {titleType = titleTypesPar[Math.floor(Math.random() * titleTypesPar.length)];
  return titleType;
  };

var description = "";
var descriptions = ["Превосходно", "Выше ожидаемого", "Великолепно", "Хорошо", "Не плохо"];
var descriptionsToGenerate = function (descriptionsPar) {roomType = descriptionsPar[Math.floor(Math.random() * descriptions.length)];
  return description;
  };


roomTypesToGenerate(roomTypes);// генератор заголовка

var features = [];
var featuresVariant = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var featuresGenerator = function (featuresVariantPar) {
  var f = 0;
  for (f < Math.ceil(Math.random() * featuresVariantPar.length); f++;) { features[f] = featuresVariantPar[f];
  }
  return features;};
featuresGenerator(featuresVariant);//генератор удобств

var times = ["12:00", "13:00", "14:00"];
var timesToGenerate = function (timesPar){
  var time = timesPar[Math.floor(Math.random() * times.length)];
  return time;
};
timesToGenerate(times);//генератор времен заезда и выезда

var photosAll = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var photosToGenerate = function(photosAllPar) {
  var photos = [];
  for(var i = 0; i < photosAllPar.length; i++) {
    photos[i] = photosAllPar[i];
  }
return photos;
};
photosToGenerate(photosAll);// генератор картинок


var mapWidth = 1140;//рамер блока в котором перетаскивается метка 1200-20-40

var ArrayMokis = [];// массив куда соберем сгенерировнные обьекты

var mokiToGenerate = function () {
  for (var g = 1; g < 9; g++){
    ArrayMokis[g - 1] = { "author": {"avatar": "img/avatars/user" + "0" + g + ".png" },
                      "offer":
                        { "title": titleTypesToGenerate(titleTypes),
                       "address": Math.floor(Math.random() * document.documentElement.clientWidth) + "," + (130 + Math.floor(Math.random() * (630 - 130))),
                       "price": 1000 + Math.floor(Math.random() * 3000),
                       "type": roomTypesToGenerate(roomTypes),
                       "rooms": Math.ceil(Math.random() * 3),
                       "guests": Math.ceil(Math.random() * 5),
                       "checkin": timesToGenerate(times),
                       "checkout": timesToGenerate(times),
                       "features": featuresGenerator(featuresVariant),
                        "description": descriptionsToGenerate(descriptions),
                       "photos": photosToGenerate(photosAll)},
                "location": {
                            "x": Math.floor(Math.random() * mapWidth),
                            "y": 130 + Math.floor(Math.random() * (500))
             }};
  }
};

mokiToGenerate();// генератор обьектов

var mapBlock = document.querySelector(".map");
mapBlock.classList.remove("map--faded");

var X = 20; //смещение по х от края метки до указателя
var Y = 84; //смещение по y

var pinTemplate = document.querySelector("#pin").content;
var mapPins = document.querySelector(".map__pins");

var pinsDraw = function(){
  for(var j = 0 ; j < 8; j++){
var clonePinTemplate = pinTemplate.cloneNode(true);
var pinButton = clonePinTemplate.querySelector("button");
var pinButtonLocationX = ArrayMokis[j].location.x + X;
var pinButtonLocationY = ArrayMokis[j].location.y - Y;
pinButton.style.left = pinButtonLocationX + "px";
pinButton.style.top = pinButtonLocationY + "px";
var pinButtonImage = pinButton.querySelector("img");
pinButtonImage.src = ArrayMokis[j].author.avatar;
pinButtonImage.alt = ArrayMokis[j].offer.title;
mapPins.appendChild(clonePinTemplate);}};
pinsDraw(); //функция отрисовки обьектов