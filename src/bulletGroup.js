bulletGroup=function(game){

    Phaser.Group.call(this, game);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    game.add.existing(this);
}

bulletGroup.prototype = Object.create(Phaser.Group.prototype);
bulletGroup.prototype.constructor =bulletGroup;