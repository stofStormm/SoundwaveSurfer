PlayerBullet=function(game,x,y,dir,speed,key,shooter){
    Phaser.Sprite.call(this,game,x,y,key);
    this.anchor.setTo(0.5,0.5);
    this.speed=speed*dir;

    this.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(this);

    this.body.collideWorldBounds =true;
    this.shooter=shooter;
    game.add.existing(this);
    
    if(shooter=='player'){
        this.body.offset.x=this.width*.5;
    }
    else{
        this.body.width=this.width*0.8;
        this.body.height=this.height*0.8;
        this.body.offset.x=-this.width*.5+this.width*.2;
        this.body.offset.y=this.width*.1;
    }
}

PlayerBullet.prototype = Object.create(Phaser.Sprite.prototype);
PlayerBullet.prototype.constructor = PlayerBullet;

PlayerBullet.prototype.update = function() {
    this.move();
    if(this.body.checkWorldBounds()){
        if(this.shooter=='player'){score_adjust(-5);
        this.missText=game.add.bitmapText(this.x-ws.x*.05,this.y-ws.y*.06,'sr','Miss -5');
        this.missText.scale.setTo(0.5,0.5)
        this.missTextTween=game.add.tween(this.missText).to({alpha:0.1},1000,'Linear',true);
        this.missTextTween2=game.add.tween(this.missText.position).to({y:this.y-ws.y*0.12},1000,'Linear',true);
        this.missTextTween.onComplete.add(function(){
            this.missText.destroy();
        },this);
                                  }
        this.destroy();
    }
   if(!this.alive)
    {
        this.destroy();
    }
};

PlayerBullet.prototype.move=function(){
    this.x+=this.speed*(game.time.elapsed/1000);
}
