//var SS = {};
var wNum=0;;
/*var ws={
    x:800,
    y:600
}
var c={
    x:ws.x/2,
    y:ws.y/2
}*/

var title;

var p;
var score=[0,0,0];
var highscore=[0,0,0];

SS.menu=function(){};

SS.menu.prototype={
    preload: function(){
        
    },

    create: function(){
        console.log('MENU');
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;

        game.world.setBounds(0,0,ws.x,ws.y);

        playButton=new myButton(game,0.5*c.x,1.25*c.y,'play-button',function(){
            waveNumber=0;
            game.state.start('level-select');},0.8);
        game.stage.backgroundColor='#08354f';

        pbig=game.add.sprite(1.5*c.x,c.y,'pbig');
        pbig.anchor.setTo(0.5,0.5);
        title=game.add.sprite(0.6*c.x,0.5*c.y,'title');
        title.anchor.setTo(0.5,0.5);
        titleSquish=game.add.tween(title.scale).to({x:1.1},1000,"Linear",true,0,-1,true);
        
        rock1=game.add.audio('b1');
        rock1.play();

        //SCORES
        for(var i =0;i<score.length;i++){
            if(localStorage.getItem("score"+i)!=null){
                    highscore[i]=JSON.parse(localStorage.getItem("score"+i));
            }
            else
            {
                localStorage.setItem("score"+i, JSON.stringify(0));
            }
        }
    },

    update:function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
            game.state.start('level-select');
        }
    }
}
