
img="";
objects=[];
status="";

function back(){
    window.location= "index.html";
    }
    

function preload(){
img = loadImage("bed.jfif");
}


function setup(){
canvas=createCanvas(640,300);
canvas.center();
objectDetector=ml5.objectDetector('CocoSsd',modelLoaded);
 document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("ModelLoaded");
    status=true;
    objectDetector.detect( img, gotResult);
    }

function gotResult(error,results){
    if(error){
    console.log(error);
    }
    console.log(results);
    objects=results;
    }

function draw(){
image(img,0,0,640,300);

if(status !="")
{
for(i=0;i<objects.length;i++)
{
document.getElementById("status").innerHTML="Status: Object Detected";
fill("#FF0000");
percent=floor(objects[i].confidence*100);
text(objects[i].label+ ""+ percent+"%",objects[i].x+30,objects[i].y+30);
noFill();
stroke("#FF0000");
rect(objects[i].x+30,objects[i].y+30,objects[i].width,objects[i].height);
}
}
}
 