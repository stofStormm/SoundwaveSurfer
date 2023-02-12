
var player;
var debug=false;
var enemies;
var enemyBullets;
var debugEnemies=false;
var waveActive=false;
var waveNumber=0;
var started=false;

SS.gameState=function(){};

SS.gameState.prototype={
    preload:function(){

    },
    create:function(){
        waveActive=false;
        game.stage.backgroundColor='#2c131d';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0,ws.x,ws.y);

        //Backrground
        createScrollBG(game,'bg2',ws.y-10,150);
        createScrollBG(game,'bg2',0,150);
        bg=game.add.sprite(c.x,c.y,'bg8');
        bg.anchor.setTo(0.5,0.5);
        bg.alpha=0.5;
        rock1=game.add.audio('b1');
        rock1.play();
        this.cleared=false;

        //SCORE_HUD
        scoreText=game.add.bitmapText(c.x,0,'sr','Score: '+score);
        scoreText.anchor.setTo(0.5,0);
        
        //Player
        player=new Player(game,100,c.y);

        //Enemies
        enemies=new EnemyWave(game);
        enemyBullets=new bulletGroup(game);

    },
    update:function(){
        game.physics.arcade.overlap(player.bulletGroup, enemies, enemyHit, null, this);
        game.physics.arcade.overlap(enemies, player, playerHit, null, this);
        game.physics.arcade.overlap(enemyBullets, player, playerHit_Bullet, null, this);

            if(enemies.children.length==0)
            {

                if(score[waveNumber]>JSON.parse(localStorage.getItem("score"+waveNumber))){
                    localStorage.setItem("score"+waveNumber,JSON.stringify(score[waveNumber]));
                }
                if(!this.cleared){
                    levelClear();
                    this.cleared=true;
                }

        }
        scoreText.text='Score: '+score[waveNumber];

    },
    render:function(){
        if(debug){game.debug.body(player);}
        if(debug){
           enemies.forEach(function(child){
               game.debug.body(child)
           },this);
            
            enemyBullets.forEach(function(child){
               game.debug.body(child)
           },this);
            
            player.bulletGroup.forEach(function(child){
               game.debug.body(child)
           },this);
        };
    }
}

function enemyHit(bullet, enemy){

    enemy.hurt(1);
    //score_adjust(5);
    bullet.kill();
}

function playerHit(player, enemy1){
    enemy1.die();
    game.camera.shake(0.01, 200);
    score_adjust(-20);
    playerDamageText(-20);
}
function playerHit_Bullet(player, enemy1){
    enemy1.kill();
    game.camera.shake(0.01, 200);
    score_adjust(-5);
    playerDamageText(-5);
}

//SCORE

function score_adjust(val){
    score[waveNumber]+=val;
}

function levelClear(){
    this.clearText=game.add.bitmapText(c.x,c.y,'sr','Level Over!');
    this.clearText.anchor.setTo(0.5,0.5);
    this.clearTween=game.add.tween(this.clearText.scale).to({x:1.5,y:1.5},3000,"Linear",true,0);
    this.clearTween.onComplete.add(function(){
        game.state.start('level-select');
    },this)
}
var test;
function playerDamageText(val){
        this.missText=game.add.bitmapText(player.x-ws.y*.03,player.y-ws.y*.06,'sr',val);
        this.missText.scale.setTo(0.5,0.5)
        this.missTextTween=game.add.tween(this.missText).to({alpha:0.1},1000,'Linear',true);
        this.missTextTween2=game.add.tween(this.missText.position).to({y:player.y-ws.y*0.12},1000,'Linear',true);
        this.missTextTween.onComplete.add(function(){
            //this.missText.destroy();
        },this);
    test=this.missText;
}