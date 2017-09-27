/*!
 * Author : yes man
 * es6版本
 */

let isTimeOut = false;//全局计时标识

class CircleProgress{
	constructor(opts) {
	 	this.defaults = {
			progressWidth:"2px",//进度条宽度
			progressColor:"#fff",//进度条颜色
			circleBgColor:"rgba(0,0,0,.2)",//圆形底部颜色
			countdown:61,//倒计时时间
		}
		this.opts = this.extend(this.defaults, opts);
		this.init();
	}
	extend(defaults,src){
		for (let prop in src) {
	        if (src.hasOwnProperty(prop)) {
	            defaults[prop] = src[prop];
	        }
	    }
    	return defaults;
	}
	template(){
		const circleBox = '   <div id="circleProgress" class="circle_process">'+
						'		<div class="wrapper right">'+
						'			<div class="rightcircle"></div>'+
						'		</div>'+
						'		<div class="wrapper left">'+
						'		    <div class="leftcircle"></div>'+
						'		</div>'+
						'		<div id="circle-timer"><span>00:00</span></div>'+
						'	</div>';
		return circleBox;
	}
	countDown(){
		const that = this;
		let interval;//计时器 
		let countdownTime = this.opts.countdown;
		$("#circleProgress .wrapper>div").css("animation-duration",countdownTime+"s").addClass("circle");
		$("#circle-timer>span").html(format_time(countdownTime));
		interval = setInterval(function(){
			countdownTime--;
			$("#circle-timer>span").html(format_time(countdownTime));
			if(countdownTime <= 0){
				isTimeOut = true;
				console.log(isTimeOut);
				clearInterval(interval);
			}
		},1000)
		function getzf(n){
			return n<10?"0"+n:n;
		};
		function format_time(time){
			const mm=getzf(parseInt(time/60,10));
			const ss=getzf(parseInt(time%60,10));
			if(time >= 60){
				return mm+":"+ss;
			}else{
				return "00:" + ss;
			}
			return "00:00";
		};
	}
	init(){
		$("#circleWrapper").html(this.template());
		this.countDown();
		//设置外层盒子的样式
		$(".circle_process").css({
			"background":this.opts.circleBgColor
		})
		//设置内部需要旋转的样式
		$("#circleProgress .rightcircle").css({
			"border-width":this.opts.progressWidth,
			"border-top-color":this.opts.progressColor,
			"border-right-color":this.opts.progressColor
		});
		$("#circleProgress .leftcircle").css({
			"border-width":this.opts.progressWidth,
			"border-bottom-color":this.opts.progressColor,
			"border-left-color":this.opts.progressColor
		});
		
	}
}
/*!
 
 * ----------------------分割线---------------------------
 * es5版本
 * */

//圆形计时器组件
/*function CircleProgress(opts){
	//可选参数（默认参数）
	this.defaults = {
		progressWidth:"2px",//进度条宽度
		progressColor:"#fff",//进度条颜色
		circleBgColor:"rgba(0,0,0,.2)",//圆形底部颜色
		countdown:61,//倒计时时间
	}
	this.opts = $.extend(this.defaults, opts,true);
	this.init();
}*/
/*CircleProgress.prototype.extend = function(dest, src) {
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dest[prop] = src[prop];
        }
    }
    return dest;
}; //原生extend,*/
/*CircleProgress.prototype = {
	//模板
	template(){
		var circleBox = '   <div id="circleProgress" class="circle_process">'+
						'		<div class="wrapper right">'+
						'			<div class="rightcircle"></div>'+
						'		</div>'+
						'		<div class="wrapper left">'+
						'		    <div class="leftcircle"></div>'+
						'		</div>'+
						'		<div id="circle-timer"><span>00:00</span></div>'+
						'	</div>';
		return circleBox;
	},
	//创建圆形
	countDown(){
		var that = this;
		var interval;//计时器 
		var countdownTime = this.opts.countdown;
		$("#circleProgress .wrapper>div").css("animation-duration",countdownTime+"s").addClass("circle");
		$("#circle-timer>span").html(format_time(countdownTime));
		interval = setInterval(function(){
			countdownTime--;
			$("#circle-timer>span").html(format_time(countdownTime));
			if(countdownTime <= 0){
				isTimeOut = true;
				console.log(isTimeOut);
				clearInterval(interval);
			}
		},1000)
		function getzf(n){
			return n<10?"0"+n:n;
		};
		function format_time(time){
			var mm=getzf(parseInt(time/60,10));
			var ss=getzf(parseInt(time%60,10));
			if(time >= 60){
				return mm+":"+ss;
			}else{
				return "00:" + ss;
			}
			return "00:00";
		};
	},
	init(){
		$("#circleWrapper").html(this.template());
		this.countDown();
		//设置外层盒子的样式
		$(".circle_process").css({
			"background":this.opts.circleBgColor
		})
		//设置内部需要旋转的样式
		$("#circleProgress .rightcircle").css({
			"border-width":this.opts.progressWidth,
			"border-top-color":this.opts.progressColor,
			"border-right-color":this.opts.progressColor
		});
		$("#circleProgress .leftcircle").css({
			"border-width":this.opts.progressWidth,
			"border-bottom-color":this.opts.progressColor,
			"border-left-color":this.opts.progressColor
		});
		
	}
	
}*/