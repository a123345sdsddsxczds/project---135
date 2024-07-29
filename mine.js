status = "";
Video = "";

function Preloed() {
    video = createVideo('video.mp4');
  video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true
    video.loop
    video.speed
    video.volume
}

function draw() {
  image(video, 0, 0, 480, 380);
  if (status != "") {
    objectDetector.Detect(video, gotResult);
    for (i = 0; i < object.length; i++) {
      document.getElementById("status").innerHTML = "Status : Detecting Objects";
      document.getElementById("status").innerHTML = "Number of objects detected are : ";+ object.length;

      fill("#FF0000")
      percent = floor(objects[i].confidence * 100)
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15)
      nofill()
      stroke("#FF0000")
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
  }
}

function gotResult(error, result) {
  if (error) {
    console.log(error)
  }
  console.log(result)
}