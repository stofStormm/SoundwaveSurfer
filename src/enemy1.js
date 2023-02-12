var _e;

Enemy1=function(game,x,y,key,speed){
    Phaser.Sprite.call(this,game,x,y,key);
    _e=this;
    this.anchor.setTo(0.5,0.5);
    this.speed=speed;
    this.inWorld=false;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(this);
    this.body.collideWorldBounds =true;
    game.add.existing(this);
}

Enemy1.prototype = Object.create(Phaser.Sprite.prototype);
Enemy1.prototype.constructor = Enemy1;

Enemy1.prototype.update = function() {

    if(!this.inWorld){
        if(this.x<ws.x && this.y<ws.y){
            this.inWorld=true;
        }
    }
    if(this.body.checkWorldBounds() && this.inWorld)
    {
        this.destroy();
    }
    this.x-=this.speed*(game.time.elapsed/1000);

};
