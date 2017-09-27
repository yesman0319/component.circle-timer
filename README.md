# component.circle-timer
	one jquery circle progress timer component
# Description
    基于jquery的组件，圆形进度条计时器。
## 演示
   [demo地址](https://yesman0319.github.io/component.circle-timer/circle-timer.html)
## 使用
####	1.先在body里添加一个div#circleWrapper的盒子节点;
####	2.然后指定该外层盒子的宽高;
####	3.然后 new CircleProgress() 实例.
### 可选参数
	opts = {
		progressWidth:"2px",//进度条宽度
		progressColor:"#fff",//进度条颜色
		circleBgColor:"rgba(0,0,0,.2)",//圆形底部颜色
		countdown:61,//倒计时时间
	}
### change log 2017-09-27
* js采用es6重写
