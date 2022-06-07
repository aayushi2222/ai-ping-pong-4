rightwristX ="";
rightwristY ="";
scorerightwrist = "";

function setup(){
  canvas = createCanvas(500,400);
  canvas.center();
  canvas.position(440,200);

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet is initialized!");
}

function gotPoses(results){
if(results.length > 0){
   console.log(results);
   rightwristX = results[0].pose.rightWrist.x;
   rightwristY = results[0].pose.rightWrist.y;
   console.log("RightWristX ="+ rightwristX + "RightWristY ="+ rightwristY);

   scorerightwrist = results[0].pose.keypoints[10].score;
   console.log("score right wrist is "+ scorerightwrist);
}
}
function draw(){
   image(video,0,0,500,400);

   fill('red');
   stroke('red'); 

   if(scorerightwrist > 0.2){

   circle(rightwristX,rightwristY,15);
   }
  }
