
difference=0;





function setup(){

    video=createCapture(VIDEO);
    video.size(450,400);
    video.position(50,135);


    Canvas=createCanvas(450,340);
    Canvas.position(660,170);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('white');
    textSize(difference);
    fill("black");
    text('Siddhant',50,200);
}
function modelLoaded(){
    console.log("Model is Initailized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

