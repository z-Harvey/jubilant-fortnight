var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;
var daltaTime;

var bgPic=new Image();

var ane;
var fruit;
var mom;

var babyTail=[];

document.body.onload=main;
function main() {
    init();
    lastTime=Date.now();
    daltaTime=0;
    gameloop();
}
function init() {
    //获取canvas context
    can1=document.getElementById("canvas1");
    ctx1=can1.getContext("2d");
    can2=document.getElementById("canvas2");
    ctx2=can1.getContext("2d");

    can1.addEventListener('mousemove',onMouseMove,false)
    bgPic.src="./src/background.jpg";

    canWidth=can1.width;
    canHeight=can1.height;

    ane=new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();

    mom=new momOBJ();
    mom.init();

    baby=new babyObj();
    baby.init();

    mx=canWidth*0.5;
    my=canHeight*0.5;

    for(var i=0;i<8;i++){
        babyTail[i]=new Image();
        babyTail[i].src="./src/babyTail"+i+".png";
    }
}
function gameloop() {

    requestAnimFrame(gameloop);
    var now=Date.now();
    daltaTime=now-lastTime;
    lastTime=now;
    ctx1.clearRect(0,0,canWidth,canHeight);

    if(daltaTime>50) daltaTime=50;

    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();

    mom.draw();
    momFruitsCollision();

    baby.draw();
}
function onMouseMove(e) {
    if(e.offSetX||e.layerX){
        mx=e.offSetX===undefined?e.layerX:e.offSetX;
        my=e.offSetY===undefined?e.layerY:e.offSetY;
        console.log(mx);
    }
}























