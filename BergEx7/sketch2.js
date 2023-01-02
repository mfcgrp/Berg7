
//berg by mfclarke

//object
let berg;

//texture background for sphere 
let bergUV;


//timer used to change textures, speed and scales
let timer = 6600;
let nextChange = timer;

//subBottom data
let table;
let url = "DataTest8.csv";

//texture for berg

var texturesArray = [];


function preload() {
berg = loadModel("iceberg15.obj", true);
table = loadTable(url,"csv","header");

//preload for array to texture obj 
for (var i=0; i<74; i++)  {
  texturesArray[i] = loadImage("DataImg/Data"+i+".png");
}

//load background texture on sphere, good as is
 bergUV = loadImage("UV.png");



}

function setup() {
  createCanvas(770, 700, WEBGL);
  setAttributes("antialias", true)
  textureWrap(REPEAT)

}

//for data
let maxYear = 0;
  


function draw() {
  background(0);

  //interactive lighting
  var dirX = map(mouseX, 0, width, -1.0, 1.0);
  var dirY = map(mouseY, 0, height, -1.0, 1.0);
  directionalLight(255, 0, 255, dirX, dirY, 3);
  pointLight(255, 255, 255, mouseX-width/2, mouseY-height/2, 350);
 
  //scales would be better to iterate (randomly) in a loop but for now timers set, kind of ok
  scale(2.5);
 
       if (millis() > timer * 2.7) {
         scale(4);
         nextChange = millis() + timer;
       }
       if (millis() > timer * 3.7) {
         scale(2);
         nextChange = millis() + timer;
       }
   if (millis() > timer * 4.7) {
         scale(1);
         nextChange = millis() + timer;
       }
       if (millis() > timer * 5.7) {
         scale(.45);
         nextChange = millis() + timer;
       }
       if (millis() > timer * 6.7) {
         scale(6);
         nextChange = millis() + timer;
       }
       if (millis() > timer * 7.7) {
         scale(.2);
         nextChange = millis() + timer;
       }
    if (millis() > timer * 8.7) {
         scale(6);
         nextChange = millis() + timer;
       }
    if (millis() > timer * 9.7) {
         scale(.2);
         nextChange = millis() + timer;
       }
   if (millis() > timer * 11.7) {
         scale(2);
         nextChange = millis() + timer;
       }
   
       if (millis() > timer * 13.7) {
         scale(3);
         nextChange = millis() + timer;
       }
       if (millis() > timer * 16.7) {
         scale(.03);
         nextChange = millis() + timer;
       }
       if (millis() > timer * 18.7) {
         scale(8);
         nextChange = millis() + timer;
       }
       if (millis() > timer * 20.7) {
         scale(10);
         nextChange = millis() + timer;
       }
   
       if (millis() > timer * 22.7) {
         scale(.7);
         nextChange = millis() + timer;
       }
   
       if (millis() > timer * 24.7) {
         scale(.1);
         nextChange = millis() + timer;
       }
   
       if (millis() > timer * 27.7) {
         scale(.4);
         nextChange = millis() + timer;
       }
   
       if (millis() > timer * 30.7) {
         scale(7);
         nextChange = millis() + timer;
       }

       if (millis() > timer * 45.7) {
        scale(.5);
        nextChange = millis() + timer;
      }
     



//interact with scene
  orbitControl(1);

  //rotation speed (this is good as is)
  rotateY(frameCount * 0.005);
  if (millis() > timer * 4) {
   rotateY(frameCount * 0.01);
   nextChange = millis() + timer;
 }
 if (millis() > timer * 10) {
   rotateY(frameCount * 0.1);
   nextChange = millis() + timer;
 }
 if (millis() > timer * 25) {
   rotateY(frameCount * 0.2);
   nextChange = millis() + timer;
 }
 if (millis() > timer * 35) {
  rotateY(frameCount * 0.4);
  nextChange = millis() + timer;
}
if (millis() > timer * 45) {
  rotateY(frameCount * 0.6);
  nextChange = millis() + timer;
}

//for loop to texture obj from arrary
for(var i=0; i<74; i++) {
  texture(texturesArray[i]);
}

  model(berg);

  //texture & stroke for background sphere
  texture(bergUV);
  strokeWeight(0);
  translate(0, 0, 0);
  sphere(750);









    let temperatures = table.getColumn(1);
  drawColor(temperatures.slice(10,maxYear));
  
  if (maxYear < temperatures.length) {
  	maxYear = maxYear + 1; 
  } 

}

function drawColor(data) {
  let x = 0;
  
  // loop through data
  for(let t of data) {
    
    // map data to color
    let col = map(t, min(data), max(data), 30,  255);

        stroke(col, 30, 255); 
        strokeWeight(.5);
   
  }


}


