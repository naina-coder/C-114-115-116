 noseX = 0;
 noseY = 0;
 
 
 function preload()
 {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
 }

 function setup()
 {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
     video.hide();


     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotposes);

 }

function modelLoaded()
{
    console.log("Pose is Intialized");
}

 function draw()
 {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);

 }

 function take_snapshot()
 {
     save('you_look_like_a_🤡.png');
     
 }

 function gotposes(results)
 {
     if (results.length > 0)
     {
         console.log(results);
         noseX = results[0].pose.nose.x-15;
         noseY = results[0].pose.nose.y-15;

         console.log("Nose X  = " +results[0].pose.nose.x);
         console.log("Nose Y  = " +results[0].pose.nose.y);

        }
 }