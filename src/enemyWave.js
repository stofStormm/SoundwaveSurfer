var _eW;

var rowRate=1200;
var curRow=0;

var dX=1500;
var dY=50;

EnemyWave=function(game){
    
        Phaser.Group.call(this, game);

        _eW=this;
        
        spwanRow();
        curRow=0;
        this.enableBody = true;
        this.physicsBodyType = Phaser.Physics.ARCADE;
        game.add.existing(this);

    }

EnemyWave.prototype = Object.create(Phaser.Group.prototype);
EnemyWave.prototype.constructor =EnemyWave;

function spwanRow(){
    for(var i =0;i<wave[waveNumber].length;i++){
        for(var j=0;j<wave[waveNumber][1].length;j++){
            
            if(wave[waveNumber][i][j]==1){
                e1=new Enemy2(game,dX+(j*128),dY+(i*145),'ed',moves[waveNumber][i][j],3,20);
                e1.animations.add('dance', [0, 1, 0, 2], 3, true);
                e1.animations.play('dance');
                _eW.add(e1);
            }
            else if(wave[waveNumber][i][j]==2){
                e1=new EnemyShoots(game,dX+(j*128),dY+(i*145),'enemy1',moves[waveNumber][i][j],2,1000,'enemy1_shoot','eb1',30);
                _eW.add(e1);
            }
            else if(wave[waveNumber][i][j]==3){
                e1=new EnemyShoots(game,dX+(j*128),dY+(i*145),'enemy_cd',moves[waveNumber][i][j],2,1000,'enemy_cd','eb2',25);
                _eW.add(e1);
            }
        }
    }
    waveActive=true;
}

function createRowTimer()
{
    rowTimer=game.time.create(false);
    rowTimer.add(rowRate,spwanRow,this);
    rowTimer.start();
}
    

