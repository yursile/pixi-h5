# pixi-h5
### 主要处理pixi游戏，用ES6开发

* **es6**
* **pixi**
* **less**
* **sprite**
* **rem**
* and so so on

****
# 使用方法
1. 安装最新版node 我这是6.4.3
2. npm install -g gulp
3. npm install
4. gulp serve
如果浏览器没有自动打开，手动打开localhost:5000


## 开发


### 这次将sprite和rem自适应整合
  以后通过设置rem来进行手机端的自适应，这样即使在PC端宽度过大也能完美展现
在生成sprite图的时候，采用的自己搭的less模板,rem.template.handlebars，有效解决了使用rem与background-position的兼容问题

gulp中配置:

	gulp.task('sprite', function () {

	  var spriteData = gulp.src('./public/img/sprites/*.png').pipe(spritesmith({
	    imgName: 'sprite.png',
	    cssName: 'sprite.less',
	    imgPath: '../img/sprite.png',
	    cssTemplate:"rem.template.handlebars"
	  }));
	 
	  // Pipe image stream through image optimizer and onto disk 
	  var imgStream = spriteData.img
	    // DEV: We must buffer our stream into a Buffer for `imagemin` 
	    // .pipe(buffer())
	    // .pipe(imagemin())
	    .pipe(gulp.dest('./public/img/'));
	 
	  // Pipe CSS stream through CSS optimizer and onto disk 
	  var cssStream = spriteData.css
	    // .pipe(csso())
	    .pipe(gulp.dest('./app/less/'));
	 
	  // Return a merged stream to handle both `end` events 
	  return merge(imgStream, cssStream);
	});

**sprite使用**

* 将小图放在sprites文件夹下
* 运行gulp sprite，会生成雪碧图和sprite.less文件
* 关于使用sprite.less见style.less文件
* 成功后gulp serve 再打开localhost:5000看效果



### 生成pixi等库使用的sprite.json文件，与textruepacker类似

*note: 与rem.template.handlebars类似，可自定义一个json格式模板,[模板参考](https://github.com/twolfson/spritesheet-templates#templates)*

****
**textruepacker**

* 运行gulp pixi
* img目录下会有sprite.json的文件
****
**preset.less**
* 所有人都可把常用到的css封装到preset.less里，上传到master

****
**rem使用**
* gulp rem 会在public下生成rem文件夹，html引入这个样式


****
**fontspider**
* 集成fontspider,在确定好文案的情况下*gulp fontspider*
* 如果生成后，文案修改，把.fontspider文件夹下的文件拷贝出来
****
**svg**
* *gulp svgmin* 处理svg压缩





---------------------------------------

#### Author *@yursile*

