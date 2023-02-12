var _e;

EnemyShoots=function(game,x,y,key,moves,health,shootRate,shoot_key,bullet_key,score){
    Enemy2.call(this,game,x,y,key,moves,health,score);
    _e=this;
    this.anchor.setTo(0.5,0.5);
    this.speed=200;
    this.shootRate=shootRate;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(this);
    this.k=key;
    this.sk=shoot_key;
    this.bk=bullet_key;
    this.canShoot=true;
    game.add.existing(this);
    this.score=score
}

EnemyShoots.prototype = Object.create(Enemy2.prototype);
EnemyShoots.prototype.constructor = EnemyShoots;

EnemyShoots.prototype.update = function() {
    Enemy2.prototype.update.call(this);
    if(this.canShoot){
        if(this.alive){
            this.shoot(this);
        }
        else{
            this.destroy();
        }
    }

};

EnemyShoots.prototype.shoot=function(e_this){
    this.loadTexture(this.sk);
    this.animTimer=game.time.create(false);
    this.animTimer.add(300,function(){
        try {
            e_this.loadTexture(e_this.k);
        } catch (e) {
            //Catch Statement
        }
    });
    this.animTimer.start();
    if(this.bk=="eb1"){
        enemyBullets.add(new PlayerBullet(this.game,this.x-10,this.y+5,-1,400,this.bk,'e'));
    }
    else{
        enemyBullets.add(new Bullet2(this.game,this.x-10,this.y+5,-1,400,this.bk,'e'));
    }
    this.shootTimer=game.time.create(false);
    this.shootTimer.add(1500,function(){
        e_this.canShoot=true;
    });
    this.shootTimer.start();
    this.canShoot=false;
}

EnemyShoots.prototype.die=function(){
    this.animTimer.destroy();
    this.shootTimer.destroy();
    Enemy2.prototype.die.call(this);
}
