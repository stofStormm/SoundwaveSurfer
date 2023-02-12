class Bullet2 extends PlayerBullet{
    constructor(game,x,y,dir,speed,key,shooter){
        super(game,x,y,dir,speed,key,shooter);
        this.dY=this.y+ws.y*.1;
        this.tweenSpeed=200;
        this.yD=game.add.tween(this.position).to({y:this.dY},this.tweenSpeed,"Linear",true,0);
        this.yD.onComplete.add(this.tweenLoop,this);
    }

    update(){
        super.update();
    }

    tweenLoop(){
        this.dY=this.y+ws.y*-.2;
        this.yD=game.add.tween(this.position).to({y:this.dY},this.tweenSpeed*2,"Linear",true,0,-1,true);
        this.yD.onComplete.remove(this.tweenLoop);
    }
}
