  noseX = 0;
  noseY = 0;
  difference = 0;
  leftWristX = 0;
  rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(350, 350);

    canvas = createCanvas(550, 500)
    canvas.position(500, 60);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded() {
    console.log('Nothing To See Here Move On');
  }

  function draw() {
     image(video, 0, 0, 100, 100);
     background('#ff0000');
  }

function gotPoses (results) 
{
    if(results.length > 0)
    {
      if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX+ "noseY = " +noseY)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
      }
        

    }
}

function draw()
{
  background("#FFFFFF");
  textSize(difference);
  fill("#03aa91")
  text("!!!Pizza Day!!!" , 50, 400);
}