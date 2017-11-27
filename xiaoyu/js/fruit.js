var fruitObj=function () {
    this.alive=[];
    this.x=[];
    this.y=[];
    this.l=[];
    this.spd=[];
    this.fruitType=[];
    this.run=[];
    this.orange=new Image();
    this.blue=new Image();
};
fruitObj.prototype.num=15;
fruitObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.x[i]=0;
        this.y[i]=0;
        this.fruitType=[];
        this.spd[i]=Math.random()*0.005+0.005;//[0.01,0.02)
        this.born(i);
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
};
fruitObj.prototype.draw=function () {
    var pic;
    for(var i=0;i<this.num;i++){
        //draw
        //find an ane ,grow,fly up
        if(this.alive[i]){
            if(this.fruitType[i] === "blue"){
                pic=this.blue;
            }else {
                pic=this.orange;
            }
            if(this.l[i]<=17){
                this.run[i]=false;
                this.l[i]+=this.spd[i]*daltaTime;
            }else {
                this.run[i]=true;
                this.y[i]-=this.spd[i]*10*daltaTime;
            }
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            if(this.y[i]<0){
                this.alive[i]=false;
            }
        }

    }
};
fruitObj.prototype.born=function (i) {
    var aneID=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.x[aneID];
    this.y[i]=canHeight-ane.len[aneID];
    this.l[i]=0;
    this.alive[i]=true;
    var ran=Math.random();
    if(ran<0.2){
        this.fruitType[i]="blue";
    }else {
        this.fruitType[i]="orange";
    }
};
fruitObj.prototype.dead=function (i) {
    this.alive[i]=false;
    this.run[i]=false;
};
function fruitMonitor() {
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) num++;
    }
    if(num<15){
        sendFruit();
        return;
    }
}
function sendFruit() {
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}