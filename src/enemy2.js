var _e;

Enemy2=function(game,x,y,key,moves,health,score){
    Phaser.Sprite.call(this,game,x,y,key);
    _e=this;
    this.anchor.setTo(0.5,0.5);
    this.moves=moves;
    this.inWorld=false;
    this.curMove=-1;
    this.dirX=1;
    this.dirY=0;
    this.speed=300;
    this.health=health;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(this);
    game.add.existing(this);
    this.move();
    this.score=JSON.parse(score);
    //this.body.width=this.width*1.1;
    this.body.offset.x=-5;
}

Enemy2.prototype = Object.create(Phaser.Sprite.prototype);
Enemy2.prototype.constructor = Enemy2;

Enemy2.prototype.update = function() {

    if(this.x<0){
        this.destroy();
    }
    this.x-=this.speed*this.dirX*(game.time.elapsed/1000);
    this.y-=this.speed*this.dirY*(game.time.elapsed/1000);

    if(!this.alive)
    {
        //this.destroy();
    }
};

Enemy2.prototype.move = function(){
    if(this.curMove<this.moves.length-1){
        this.curMove++;
    } else{
        this.curMove=0;
    }
    this.speed=this.moves[this.curMove][1];
    this.dirX=this.moves[this.curMove][2];
    this.dirY=this.moves[this.curMove][3];

    this.moveTimer=game.time.create(true);
    this.moveTimer.add(this.moves[this.curMove][0],function(){
       this.move();
    },this);
    this.moveTimer.start();
}

Enemy2.prototype.hurt=function(damage){
    this.health-=damage;
    this.alpha=0.5;
    this.damTimer=game.time.create(false);
    this.damTimer.add(100,function(){
        this.alpha=1;
    },this);
    this.damTimer.start();
    if(this.health<=0){
        score_adjust(this.score);
        this.die();
    }
}

Enemy2.prototype.die=function(){
    this.kill();
}
