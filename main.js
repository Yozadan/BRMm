function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose X = " +results[0].pose.nose.x);
        console.log("Nose Y = " +results[0].pose.nose.y);
    }
}
function modelLoaded(){
console.log("PoseNet Is Initialized");    
}
function draw(){

}

function take_snapshot(){
save('myfilteredimage.png');
}