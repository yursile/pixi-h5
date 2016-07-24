var Player = require("./Player.js");



class MainPlayer extends Player{
	constructor(){
		super();
		this.texture = PIXI.Texture.fromImage("main_player2");
	}


	toString(){
		console.log("mainPlayer");
	}
}





module.exports = MainPlayer;