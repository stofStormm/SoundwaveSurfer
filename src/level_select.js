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
playButton=[];
SS.level_select=function(){};

SS.level_select.prototype={
    preload: function(){

    },

    create: function(){
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;

        game.world.setBounds(0,0,ws.x,ws.y);
                //SCORES
        for(var i =0;i<score.length;i++){
            if(score[i]>highscore[i]){
                highscore[i]=score[i];
                localStorage.setItem('score'+(i),JSON.stringify(highscore[i]));
            }
        }
        for(var i=0;i<wave.length;i++){
            playButton[i]=new myButton(game,0.15*c.x+(c.x*0.3*i),1.25*c.y,'b'+(i+1),function(){
                game.state.start('game-state');},0.8,i);
            levelScore=game.add.bitmapText(0.15*c.x+(c.x*0.3*i),1.35*c.y,'sr','HS: '+highscore[i]);
            levelScore.anchor.setTo(0.5,0);
        }
        
        game.stage.backgroundColor='#08354f';

        pbig=game.add.sprite(1.5*c.x,c.y,'pbig');
        pbig.anchor.setTo(0.5,0.5);
        title=game.add.sprite(0.6*c.x,0.5*c.y,'title');
        title.anchor.setTo(0.5,0.5);
        titleSquish=game.add.tween(title.scale).to({x:1.1},1000,"Linear",true,0,-1,true);

    },
}
