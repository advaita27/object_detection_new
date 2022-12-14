img="";
status="";
objects=[];

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modalloaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function preload(){
img=loadImage("dog_cat.jpg");
}
function modalloaded(){
console.log("modal is loaded");
status=true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){console.log(error);}
console.log(results);
objects=results;
}
function draw(){
image(img,0,0,640,420);

if(status!=""){

}
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="status:objects detected";
fill("blue");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
noFill();
stroke("yellow");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}