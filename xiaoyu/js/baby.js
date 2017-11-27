/**
 * Created by Administrator on 2017/9/3.
 */
var babyObj=function () {
    this.x;
    this.y;
    this.angle;
    this.babyEye=new Image();
    this.babyBody=new Image();
    this.babyTail=new Image();

    this.babyTailTimer=0;
    this.babyTailCount=0;
};
babyObj.prototype.init=function () {
    this.x=canWidth*0.5-50;
    this.y=canHeight*0.5+50;
    this.angle=0;
    this.babyEye.src="./src/babyEye0.png";
    this.babyBody.src="./src/baby.png";
    this.babyTail.src="./src/babyTail0.png";


};
babyObj.prototype.draw=function () {

    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);

    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
    var beta=Math.atan2(-deltaY,-deltaX);

    this.angle=lerpAngle(beta,this.angle,0.9);
    this.babyTailTimer+=daltaTime;
    if(this.babyTailTimer>50){
        this.babyTailCount=(this.babyTailCount+1)%8;
        this.babyTailTimer%=50;
    }
    ctx1.save();

    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);

    // var babyTailCount=this.babyTailCount;
    ctx1.drawImage(this.babyTail,-this.babyEye.width*0.5+32,-this.babyEye.height*0.5+5);
    ctx1.drawImage(this.babyBody,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
    ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5+15,-this.babyEye.height*0.5+18);

    ctx1.restore();
}