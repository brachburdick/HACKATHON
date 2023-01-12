// const path = require('path');
// const express = require('express');
// const fs = require('fs');
// const e = require('express');

// const app = express();

const PORT = 5502;

let song = new Audio('./assets/song.mp3')
song.isplaying = false;

let flipImage = 1;
let interaction = false;
//numSegments something needs to fix
let numSegments = 3;
let direction = 'HALT';

const xStart = 0; //starting x coordinate for snake
const yStart = 250; //starting y coordinate for snake
const diff = 10;

let xCor = [];
let yCor = [];

let xFruit = 0;
let yFruit = 0;
let scoreElem;

const HEIGHT = 600
const LENGTH = 800

var bgImg;
var charImg;
var backgroundXStart1 = 0;
var backgroundXStart2;
var backgroundMove = +1
var scrollSpeed = 4;

function preload(){
  bgImg = loadImage('./assets/background.png');
  charImg = loadImage('./assets/sprite.gif');
}


function setup() {
  //backgroundXStart1 defaults to 0; backgroundXStart2 will define where the next scroll image will begin.
  backgroundXStart2 = LENGTH;
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');

  createCanvas(LENGTH, HEIGHT);

  frameRate(30);
  stroke(255);
  strokeWeight(10);
}


function draw() {


  image(bgImg, backgroundXStart1, 0, width, height);
  image(bgImg, backgroundXStart2, 0, width, height);
  //where change the circle into a character picture that loaded before
  image(charImg, (LENGTH/2)-20, HEIGHT*.85, 80, 80);
  
  if (Math.abs(backgroundXStart1 - backgroundXStart2) !== 800) console.log("WHOOP WHOOP!", Math.abs(backgroundXStart1 - backgroundXStart2))
  backgroundXStart1 -= scrollSpeed*backgroundMove;
  backgroundXStart2 -= scrollSpeed*backgroundMove;
  



  //catch cases for new image render start position
  //if image start position is 1 width left of (0,0) set it to be (length, 0)
  if (backgroundXStart1 < -LENGTH + scrollSpeed){
    backgroundXStart1 = LENGTH;
  }
  if (backgroundXStart2 < -LENGTH + scrollSpeed){
    backgroundXStart2 = LENGTH;
  }
  if(backgroundXStart2 > LENGTH) {
    backgroundXStart2 = - LENGTH+scrollSpeed;
  }
  if(backgroundXStart1 > LENGTH) {
    backgroundXStart1 = - LENGTH+scrollSpeed;
  }
 if (direction != "HALT") console.log(backgroundXStart1, backgroundXStart2);
  updateDirection();


}



function mouseReleased(){//update each click
 console.log(direction);
}



function updateDirection() {
  switch (direction) {
    case 'right':
      console.log('RIGHT_ARROW')
      //xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      //yCor[numSegments - 1] = yCor[numSegments - 2];
      backgroundMove = +1;
      break;
    // case 'up':
    //   xCor[numSegments - 1] = xCor[numSegments - 2];
    //   yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      //break;
    case 'left':
      console.log('LEFT_ARROW')
      //xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      //yCor[numSegments - 1] = yCor[numSegments - 2];
      backgroundMove = -1;
      break;
    case 'HALT':
      backgroundMove = 0;
      break;
  }
}





function keyPressed() {
  if (interaction === false){
    song.play();
    interaction = true;
  }
  if (keyCode === LEFT_ARROW) {
    direction = 'left';
  } else if (keyCode === RIGHT_ARROW) {
    direction = 'right';
  } else if (keyCode === RETURN){
    direction = 'HALT';
    song.pause();
    interaction = false
  }
}

