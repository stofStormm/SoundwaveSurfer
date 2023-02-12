
myButton=function(game,x,y,key,func,val,level){
    Phaser.Button.call(this,game,x,y,key,function(){
        if(level!=null){
            waveNumber=level;
        }
        func();
    },this, 1, 0, 1);
    this.anchor.setTo(0.5,0.5);
    this.anim=game.add.tween(this.scale).to({x:val,y:val},1000,"Linear",false,0,-1,true);
    this.anim.start();
    this.val=val;
    this.level=level;
    game.add.existing(this);
 }
    
 myButton.prototype=Object.create(Phaser.Button.prototype);
 myButton.prototype.constructor=myButton;
