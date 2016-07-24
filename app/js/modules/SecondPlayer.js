var Player = require("./Player.js");



class SecondPlayer extends Player{
	constructor(){
		super();
		this.texture = PIXI.Texture.fromImage("second_player2");
	}


	toString(){
		console.log("second player");
	}
}





module.exports = MainPlayer;