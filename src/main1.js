var game = new Phaser.Game(ws.x,ws.y ,Phaser.AUTO,'Soundwave Surfers',null,false,false);

game.state.add('boot',SS.Boot);
game.state.add('preload',SS.Preload);
game.state.add('menu',SS.menu);
game.state.add('level-select',SS.level_select);
game.state.add('game-state',SS.gameState);
game.state.start('boot');
