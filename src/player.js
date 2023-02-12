var _p;
var canShoot;
var shootRate=200;
var shootTimer;


Player=function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,'player');
    this.anchor.setTo(0.5,0.5);
    this.speed=600;
    _p=this;
    canShoot=true;
    this.bulletGroup=new bulletGroup(this.game);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
    this.dirX=0;
    this.dirY=0;

    //Emitter
    this.emOffsetX=-1*this.width/2;
    this.emOffsetY=this.height/2;
    this.emitter=game.add.emitter(this.x+this.emOffsetX,_p.y+this.emOffsetY,400);
    this.emitter.makeParticles('particle');
    this.emitter.start(false, 250,2);
    this.emitter.setYSpeed(0,0);
    this.emitter.setXSpeed(-100,-200);
    this.body.width=this.width*0.6;
    this.body.height=this.height*0.8;
    

}

Player.prototype=Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor=Player;

Player.prototype.update=function(){

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)){
        this.moveX(-1);
        this.dirX=-1;
        this.moving=true;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)|| game.input.keyboard.isDown(Phaser.Keyboard.D)){
        this.moveX(1);
        this.dirX=1;
        this.loadTexture('pf');
    }
    else{
        this.dirX=0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W)){
        this.moveY(-1);
        this.dirY=-1;
        this.moving=true;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)|| game.input.keyboard.isDown(Phaser.Keyboard.S)){
        this.moveY(1);
        this.dirY=1;
        this.moving=true;
    }
    else
    {
        this.dirY=0;
    }

    this.animate(this.dirX,this.dirY);

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && canShoot){
        this.shoot();
    }

}

Player.prototype.moveX=function(dir){
    if((dir<0 && this.x+dir-(this.width/2)>=5)||(dir>0&&this.x+dir+(this.width/2)<=ws.x))
    {
    this.x+=dir*this.speed*(game.time.elapsed/1000);
    }
};
Player.prototype.moveY=function(dir){
    if((dir<0 && this.y+dir-(this.height/2)>=0)||(dir>0&&this.y+dir+(this.height/2)<=ws.y))
    {
    this.y+=dir*this.speed*(game.time.elapsed/1000);
    }
};
Player.prototype.shoot=function(){
    this.bulletGroup.add(new PlayerBullet(this.game,_p.x,_p.y+5,1,800,'bullet','player'));
    shootTimer=game.time.create(false);
    shootTimer.add(shootRate,function(){
        canShoot=true;
    },this);
    shootTimer.start();
    canShoot=false;
};
Player.prototype.animate=function(dX, dY){
    if(dY>0){
        this.loadTexture('pd');
        this.emitFollow(-1*this.width/2,0.25*this.height);
        this.body.offset.y=this.height*.2;
    }
    else if(dY<0){
        this.loadTexture('pu');
        this.emitFollow(1*this.width/2,0.15*this.height);
        this.body.offset.y=this.height*-.2;
    }
    else if(dX>0){
        this.loadTexture('pf');
        this.emitFollow(1.05*this.width/2,.5*this.height);
        this.body.offset.x=this.width*.4;
    }
    else if(dX<0){
        this.loadTexture('pb');
        this.emitFollow(-1.1*this.width/2,.5*this.height);
        this.body.offset.x=this.width*-.1;
    }
    else{
        this.loadTexture('player');
        this.emitFollow(this.emOffsetX,this.emOffsetY);
        this.body.offset.x=this.width*.15;
        this.body.offset.y=this.height*.1;
    }
};
Player.prototype.emitFollow=function(dX,dY){
    this.emitter.x=this.x+dX;
    this.emitter.y=this.y+dY;
};
