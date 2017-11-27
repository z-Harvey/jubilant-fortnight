/**
 * Created by Administrator on 2017/9/2.
 */
var momOBJ=function () {
    this.x;
    this.y;
    this.angle;
    this.bigEye=new Image();
    this.bigBody=new Image();
    this.bigTail=new Image();
};
momOBJ.prototype.init=function () {
    this.angle=0;
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.bigEye.src="./src/bigEye0.png";
    this.bigBody.src="./src/bigSwim0.png";
    this.bigTail.src="./src/bigTail0.png";
};
momOBJ.prototype.draw=function () {

    this.x=lerpDistance(mx,this.x,0.9);
    this.y=lerpDistance(my,this.y,0.9);

    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(-deltaY,-deltaX);

    this.angle=lerpAngle(beta,this.angle,0.9);

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);

    ctx1.restore()
};
function lerpDistance(aim,cur,ratio) {
    var delta=cur-aim;
    return aim+delta*ratio;
}
function lerpAngle(a,b,t) {
    var d=b-a;
    if(d>Math.PI) d=d-2*Math.PI;
    if(d<-Math.PI) d=d+2*Math.PI;
    return a+d*t;
}













