function preload(){

}
function setup(){
    canvas=createCanvas(500,500)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()
    
}
function draw(){
    image(video,0,0,500,500)
    fill("red")
    stroke("blue")
    rect(30,40,400,15)
    rect(30,425,400,15)
    rect(30,40,15,400)
    rect(420,40,15,400)
    fill("aqua")
    stroke("white")
    circle(50,50,50)
    circle(425,50,50)
    circle(50,425,50)
    circle(425,425,50)
}

function takesnapeshot(){
    save("selfe.png")
}