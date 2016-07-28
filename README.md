# pixi-h5
主要处理pixi游戏，用ES6开发
* **es6**
* **pixi**
* **less**
* **sprite**
* and so so on

****
#使用方法
1. 安装最新版node 我这是6.4.3
2. npm install -g gulp
3. npm install
4. gulp serve
如果浏览器没有自动打开，手动打开localhost:5000


##开发

*这次集成了sprite雪碧图制作*

>**sprite**

* git pull origin master
* npm install
* gulp sprite 会生成雪碧图和sprite.less文件
* 关于使用sprite.less见style.less文件
* 成功后gulp serve 再打开localhost:5000看效果


*生成pixi等库使用的sprite.json文件，与textruepacker类似
>**textruepacker**
*运行gulp pixi
*img目录下会有sprite.json的文件

> **preset.less**
>> *所有人都可把常用到的css封装到preset.less里，上传到master*