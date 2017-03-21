'use strict';
var picInfoArray = [];
var pictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'drangon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function itemPic(itemName, imagePath){
  this.itemName = itemName;
  this.imagePath = imagePath;
  this.imageClick = 0;
  this.imageShown = 0;
  picInfoArray.push(this);
};

var bag = new itemPic('bag', 'images/bag.jpg');
var banana = new itemPic('banana', 'images/banana.jpg');
var bathroom = new itemPic('bathroom', 'images/bathroom.jpg');
var boots = new itemPic('boots', 'images/boots.jpg');
var breakfast = new itemPic('breakfast', 'images/breakfast.jpg');
var bubblegum = new itemPic('bubblegum', 'images/bubblegum.jpg');
var chair = new itemPic('chair', 'images/chair.jpg');
var chtulu = new itemPic('chtulu', 'images/cthulhu.jpg');
var dog = new itemPic('dog-duck', 'images/dog-duck.jpg');
var dragon = new itemPic('dragon', 'images/dragon.jpg');
var pen = new itemPic('pen', 'images/pen.jpg');
var pet = new itemPic('pet-sweep', 'images/pet-sweep.jpg');
var scissors = new itemPic('scissors', 'images/scissors.jpg');
var shark = new itemPic('shark', 'images/shark.jpg');
var sweep = new itemPic('sweep', 'images/sweep.png');
var tauntaun = new itemPic('tauntaun', 'images/tauntaun.jpg');
var unicorn = new itemPic('unicorn', 'images/unicorn.jpg');
var usb = new itemPic('usb', 'images/usb.gif');
var water = new itemPic('water-can', 'images/water-can.jpg');
var wine = new itemPic('wine glass', 'images/wine-glass.jpg');

function choosePic() {
  var randomNum1;
  var randomNum2 = getRandom(picInfoArray);
  var randomNum3 = getRandom(picInfoArray);
  randomNum1 = getRandom(picInfoArray);
  while (randomNum2 == randomNum1){
    randomNum2 = getRandom(picInfoArray);
  }
  while (randomNum3 == randomNum2 || randomNum3 == randomNum1){
    randomNum3 = getRandom(picInfoArray);
  }
  document.getElementById('Picture1').src = picInfoArray[randomNum1].imagePath;
  document.getElementById('Picture2').src = picInfoArray[randomNum2].imagePath;
  document.getElementById('Picture3').src = picInfoArray[randomNum3].imagePath;
}
choosePic();
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
function onClick(event) {
  choosePic();
}
Picture1.addeventlistener('click', onClick);
Picture2.addeventlistener('click', onClick);
Picture3.addeventlistener('click', onClick);
