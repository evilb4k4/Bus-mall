'use strict';

var picInfoArray = [];
var totalClicks = 0;
var pictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'drangon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var img1 = document.getElementById('Picture1');
var img2 = document.getElementById('Picture2');
var img3 = document.getElementById('Picture3');

function itemPic(itemName, imagePath){
  this.itemName = itemName;
  this.imagePath = imagePath;
  this.imageClick = 0;
  this.imageShown = 0;
  picInfoArray.push(this);
};

for (var i = 0; i < imageArray.length; i++) {
  var filePath = 'images/' + imageArray[i];
  new itemPic(pictureNames[i], filePath);
}

function randomImgIndex(){
  return Math.floor(Math.random() * imageArray.length);
};

var prevImgIndexes = [];
function randomImage(){
  var currentImgIndexes = [];
  while (currentImgIndexes.length < 3) {
    var imgSelector = randomImgIndex();
    if (!currentImgIndexes.includes(imgSelector) && !prevImgIndexes.includes(imgSelector)) {
      currentImgIndexes.push(imgSelector);
    }
  }
  var prod1 = picInfoArray[currentImgIndexes[0]];
  var prod2 = picInfoArray[currentImgIndexes[1]];
  var prod3 = picInfoArray[currentImgIndexes[2]];
  img1.src = prod1.imagePath;
  img2.src = prod2.imagePath;
  img3.src = prod3.imagePath;
  img1.alt = currentImgIndexes[0];
  img2.alt = currentImgIndexes[1];
  img3.alt = currentImgIndexes[2];
  prevImgIndexes = currentImgIndexes;
  prod1.imageShown++;
  prod2.imageShown++;
  prod3.imageShown++;
};
randomImage();
function updatedTotal() {
  if(localStorage.sumOfDataArray){
    var someNewArray = JSON.parse(localStorage.sumOfDataArray);
    for(var i = 0; i < someNewArray.length; i++){
      picInfoArray[i].imageClick += someNewArray[i].imageClick;
    }
  }
  if(localStorage.sumOfDataArray){
    var someNewArray = JSON.parse(localStorage.sumOfDataArray);
    for(var i = 0; i < someNewArray.length; i++){
      picInfoArray[i].imageShown += someNewArray[i].imageShown;
    }
  }
}
updatedTotal();
var clickLimit = 25;
function onClick(event) {
  randomImage();
  totalClicks++;
  var productIdx = this.alt;
  picInfoArray[productIdx].imageClick++;
  if (totalClicks === clickLimit){
    localStorage.sumOfDataArray = JSON.stringify(picInfoArray);
    Picture1.removeEventListener('click', onClick);
    Picture2.removeEventListener('click', onClick);
    Picture3.removeEventListener('click', onClick);
    productClicks();
    showChart();
  }
}
var clickResults = [];
var productShowResults = [];
function productClicks() {
  for(var i = 0; i < picInfoArray.length; i++){
    clickResults.push(picInfoArray[i].imageClick);
  };
  for (var i = 0; i < picInfoArray.length; i++) {
    productShowResults.push(picInfoArray[i].imageShown);
  }
};
function showChart() {
  var ctx = canvas.getContext('2d');
  var data = {
    labels: pictureNames,
    datasets: [{
      label: 'Favorite Items',
      data: clickResults,
      backgroundColor: 'red'
    }, {
      label: 'Times Shown',
      data: productShowResults,
      backgroundColor: 'green'
    }],
  };
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            // max: 100
          }
        }]
      }
    }
  });
};

Picture1.addEventListener('click', onClick);
Picture2.addEventListener('click', onClick);
Picture3.addEventListener('click', onClick);
