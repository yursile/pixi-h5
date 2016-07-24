
//  pixi所需库
var PIXI = require('pixi.js');

//引入MainPlayer对象
var MainPlayer = require("./modules/MainPlayer.js")

var all  = document.getElementById("canvas");


// 定义canvas画布的宽高
const WIDTH = window.SCREEN_WIDTH =  all.getBoundingClientRect().width/ window.pas.scaleNum;
const HEIGHT = window.SCREEN_HEIGHT = all.getBoundingClientRect().height / window.pas.scaleNum;




function Main(){
  //canvas 要渲染的舞台
  this.stage = new PIXI.Container(0xF0F0F0);

  //canvas的renderer  相当于画布
  this.renderer = new PIXI.CanvasRenderer(WIDTH, HEIGHT);

  this.renderer.backgroundColor = 0xF0F0F0;

  //把canvas添加到dom中
  all.appendChild(this.renderer.view);


  //开始加载所需文件
  this.loadSpriteSheet();
}


Main.prototype.loadSpriteSheet = function(){
  //图片的配置文件,
  // 加载此文件后会读取与文件对应的图片
  var assetsToLoad = ["img/players.json"];

  //实例化一个加载器
  var loader = new PIXI.loaders.Loader();

  //将配置文件放入加载器中
  loader.add(assetsToLoad);



  //在加载过程中执行的函数
  // loader.on("progress",this.loading);


  //加载完成的回调函数
  loader.once("complete",this.spriteSheetLoaded.bind(this));


  //开始加载
  loader.load();
  
}

/**
 * [loading description]
 * @Author   yursile
 * @DateTime 2016-07-15T16:16:43+0800
 * @return   {[type]}                 [description]
 */     
Main.prototype.loading = function(data){
  console.log(data);
}


Main.prototype.spriteSheetLoaded = function(){
  this.showNavigator();

  // this.setupGame();

}


Main.prototype.showNavigator = function(){
  // var textrue = PIXI.Texture.fromImage("main_player2");
  // var player = new Player(textrue);


  var mainPlayer = new MainPlayer();

  this.stage.addChild(mainPlayer)
  this.renderer.render(this.stage);
  mainPlayer.toString();
}
window.main = new Main();





