SS.Boot=function(){};

SS.Boot.prototype={
    preload: function(){
        
        game.load.bitmapFont('sr', 'assets/font/font.png', 'assets/font/font.fnt');       

    },

    create: function(){
        game.state.start('preload');
    },
}
