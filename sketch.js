

const HEIGHT = 500
const LENGTH = 1000

function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');


  createCanvas(LENGTH,HEIGHT);
  frameRate(15);
  stroke(255);
  strokeWeight(10);
  // for (let i = 0; i < numSegments; i++) {
  //   xCor.push(xStart + i * diff);
  //   yCor.push(yStart);
  // }
}
function draw() {
  background(150);
  textSize(32);

}



function mouseReleased(){//update each click
 redraw()
}

function keyPressed() {//quit with left arrow
  if (keyCode === LEFT_ARROW) {
    noLoop();

  }
}






// colorSliderR = createSlider(0,255)
  // colorSliderR.position(100, 500);
  // colorSliderR.style('width', '50px');

  // colorSliderG = createSlider(0,255)
  // colorSliderG.position(150, 500);
  // colorSliderG.style('width', '50px');

  // colorSliderB = createSlider(0,255)
  // colorSliderB.position(200, 500);
  // colorSliderB.style('width', '50px');

  // moverProjectionSlider = createSlider(0,255)
  // moverProjectionSlider.position(10,520)
  // moverProjectionSlider.style('width','100px')

  // moverAngleSlider = createSlider(0,255)
  // moverAngleSlider.position(110,520)
  // moverAngleSlider.style('width','100px')

  // button = createButton('Pars');
  // button.position(10, 550);
  // button.mousePressed(()=>{
  //  colorSliderR.value(groupPars.rgbFunction[0])
  // colorSliderG.value(groupPars.rgbFunction[1])
  //  colorSliderB.value(groupPars.rgbFunction[2])
  //   buttonSelection = groupPars
  //   console.log(`button selection = ${buttonSelection}`)

  // })

  // button = createButton('Movers');
  // button.position(110, 550);
  // button.mousePressed(()=>{
  //   colorSliderR.value(groupMovers.rgbFunction[0])
  //   colorSliderG.value(groupMovers.rgbFunction[1])
  //    colorSliderB.value(groupMovers.rgbFunction[2])
  //   buttonSelection = groupMovers
  //   console.log(`button selection = ${buttonSelection}`)
  // })
  ;








