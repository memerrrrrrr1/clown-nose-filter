nose_x=0
nose_y=0

function preload(){
 clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup(){
    canvas1=createCanvas(450,400)
    canvas1.center()
    imgholder = createCapture(VIDEO)
    imgholder.size(300,300) 
    imgholder.hide()

poseinfo = ml5.poseNet(imgholder,model_loader)
poseinfo.on("pose",gotresult)
}
function model_loader(){
    console.log("model has loaded")

}
function gotresult(result){
    console.log(result)

    if(result.length > 0){
        nose_x=result[0].pose.nose.x;
        nose_y=result[0].pose.nose.y;
    }

    
}

function draw(){
    image(imgholder,0,0,450,450)
    //fill("red")
    //circle(nose_x,nose_y,20)
    image(clown_nose,nose_x+50,nose_y+70,40,40)
   
}
function take_snap(){
    save("my_clown_nose.png")
}
