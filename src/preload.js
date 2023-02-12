SS.Preload=function(){};

SS.Preload.prototype={
    preload: function(){

        loadText=game.add.bitmapText(c.x,c.y,'sr','Loading...');
        loadText.anchor.setTo(0.5,0.5);
        this.blip=false;
        
        game.load.spritesheet('play-button','assets/sprites/play_button.png',217,120)
        game.load.image('pbig','assets/sprites/player-menu.png')
        game.load.image('title','assets/sprites/title.png')
        game.load.audio('b1','assets/sound/rock1.wav')
        game.load.spritesheet('b1','assets/sprites/but1.png',131.5,131);
        game.load.spritesheet('b2','assets/sprites/but2.png',131.5,131);
        game.load.spritesheet('b3','assets/sprites/but3.png',131.5,131);
        
        
        game.load.image('player','assets/sprites/player.png');
        game.load.image('pf','assets/sprites/player_forward.png');
        game.load.image('pb','assets/sprites/player_back.png');
        game.load.image('pu','assets/sprites/player_up.png');
        game.load.image('pd','assets/sprites/player_down.png');
        game.load.bitmapFont('sr', 'assets/font/font.png', 'assets/font/font.fnt');
        //Rest
        game.load.image('enemy1','assets/sprites/enemy1.png');
        game.load.image('enemy1_shoot','assets/sprites/enemy1_shoot.png');
        game.load.image('enemy_cd','assets/sprites/enemy3.png');
        game.load.image('enemy_cds','assets/sprites/enemy3_shoot.png');
        game.load.image('eb1','assets/sprites/enemy1_bullet.png')
        game.load.image('eb2','assets/sprites/disc_bullet.png')
        game.load.spritesheet('ed','assets/sprites/enemy_dance.png',50,72);
        game.load.image('bullet','assets/sprites/bullet.png');
        game.load.image('particle','assets/sprites/particle.png');
        game.load.image('bg1','assets/sprites/background1.png');
        game.load.image('bg2','assets/sprites/background2.png');
        game.load.image('bg3','assets/sprites/background3.png');
        game.load.image('bg4','assets/sprites/background4.png');
        game.load.image('bg8','assets/sprites/background8.png');
    },
    
    loadUpdate: function(){
        if(!this.blip){
            console.log("loading");
            this.blip=true;
        }
    },

    create: function(){
        game.state.start('menu');
    },
}
