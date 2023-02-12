
createScrollBG=function(game,key,y,speed){
b1=new ScrollBG(game,c.x,y,key,speed);
b2=new ScrollBG(game,ws.x+(b1.width/2),y,key,speed);
}

ScrollBG=function(game,x,y,key,speed){
    Phaser.Sprite.call(this,game,x,y,key);
    this.anchor.setTo(0.5,0.5);
    this.speed=300;
    game.add.existing(this);
}

ScrollBG.prototype=Object.create(Phaser.Sprite.prototype);
ScrollBG.prototype.constructor=ScrollBG;

ScrollBG.prototype.update=function(){

    this.x-=this.speed*(game.time.elapsed/1000);
    if(this.x<-1*(this.width/2))
    {
        this.x=ws.x+(this.width/2);
    }

}