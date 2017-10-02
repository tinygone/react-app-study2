# React学习项目2·
经过这两周的摸索和学习，也陆续建立了几个项目，对React有一定的了解。故重新起个项目，将学习的过程记录下来。

## 开始学习React之前，需要了解哪些内容
因为React首先是一种前端（准确的说是Javascript）MVC框架中一部分，所以在学习React过程中，不可避免的要了解一些其他的MVC框架，如Backbone.js，Angular.js。我并未花太多时间，仅百度了一些差异。在此也建议不必特别深究。

我理解的前端一直是H5，但接触React后才发现不是这样。真正精髓的是Javascript，当然也是难懂的。

### 工具篇：
Webstorm：开发工具，IDE，当然也可以使用Atom或其他文本编辑器
Node.js：前端开发的基础运行环境，配合先进的NPM包管理器，有非常多的工具可供使用
NPM：包管理工具（Package Manager），类似的还有Bower, Component, Spm, yarn，好用的就是NPM
Webpack：模块打包工具(Bundler)，类似的有browerity
Gulp：任务流工具(Task Runner)，解决一次性要执行多条命令的问题，类似的工具还有Grunt
Babel：
还有其他非常多的插件，用到的时候再往上补

### 概念篇：
ES6：Javascript的一种最新标准，全称不ECMAScript2015，最新的还有ES7
JSX：React的一种Javascript扩展语法

## React Demo
为了了解React，建议先参考阮一峰都是的博客，并手工完成这些项目，有利于加深对React的了解。

## 搭建开发环境
这是基于Node.js, Webstorm的开发环境，同时使用Webpack+Babel等强大的工具。也就是本项目。

### Webpack相关
#### loader
style-loader和css-loader
npm install style-loader css-loader --save-dev

#### plugin
HtmlWebpackPlugin,自动生成项目的HTML页面，名称为html-webpack-plugin
EnvironmentPlugin,向构建过程中注入环境变量，webpack内置
BannerPlugin，向块(chunk)的结果文件中添加注释信息，webpack内置

###
本项目暂停，国庆期间，有更多更重要的事情要做。
