//*************驾驶台画表盘
printPanel(250, 280, 150, 130, 'bCanvas');
printPanel(680, 225, 120, 100, 'bCanvas');
printPanel(680, 470, 120, 100, 'bCanvas');
printScale(250, 280, 150, -120, 120, 'bCanvas');
printScale(680, 225, 117, 0, 40, 'bCanvas');
printScale(680, 470, 117, 0, 100, 'bCanvas');

var bc = document.getElementById('bCanvas');
var bctx = bc.getContext("2d");
bctx.font = "25px Arial ";
bctx.fontWeight = 300;
bctx.fillStyle = "white"
bctx.fillText("ME RPM", 215, 80);
bctx.fillText("START AIR PRESS", 600, 50);
bctx.fillText("Actuator pos feedback", 580, 300);

/***********************临时*************/
pointerRotate(-90, 'bStartAirPressPointer');
pointerRotate(-90, 'bActuatorPosFeedbackPointer');
pointerRotate(-90, 'cStartAirPressPointer');
pointerRotate(-90, 'cActuatorPosFeedbackPointer');

/**********************驾驶台电报系统加车钟**************/
var btled1 = document.getElementsByClassName('btelegraph1Led1');
for (var i = 0; i < 5; i++) {
	btled1[i].style.background = '#006400';
}
btled1[5].style.background = 'yellow';
var btled2 = document.getElementsByClassName('btelegraph1Led2');
for (var i = 0; i < 5; i++) {
	btled2[i].style.background = '#006400';
}
btled2[5].style.background = 'yellow';

/************************电报系统杠杆设置**************************/
var bstate = document.getElementById('bState');
var btelegraph1lever = document.getElementById('btelegraph1lever'); //btelegraph1lever为驾控台车钟界面的方向杠杆
var btext1 = document.getElementById('btelegraph1Text1');
var disY = 0;
var brmp = 0;

btelegraph1lever.onmousedown = function (ev) {
	var oEvent = ev || event;
	disY = oEvent.clientY - btelegraph1lever.offsetTop;

	document.onmousemove = function (ev) {
		var oEvent = ev || event;

		var t = oEvent.clientY - disY;

		if (t < -45) {
			t = -45;
		} else if (t > 275) {
			t = 275;
		}

		btelegraph1lever.style.top = t - 450 + 'px';

		if (lhandle1x % 2 == 0) {
			if (thandlex % 2 == 0) {
				var a = 0; //计算油门速度
				if (t >= -45 && t < 95) {
					a = (95 - t) * 82 / 140;
				}
				if (t > 125 && t > 275) {
					a = 82 - (t - 125) * 82 / 150;
					a = -a;
				}

				brmp = a;

				if (t >= -45 && t < -25) {
					if (schematicX == 2) {
						schematicX = 1; //空气启动结束
					}
					btext1.innerHTML = 'Nav.Full';
					LED(); //LED为led初始化函数
					ttled1[0].style.background = '#00FF00';
					ttled2[0].style.background = '#00FF00';
					btled1[0].style.background = '#00FF00';
					btled2[0].style.background = '#00FF00';
					sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
					sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
					sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
				}
				if (t >= -25 && t < 5) {
					if (schematicX == 2) {
						schematicX = 1; //空气启动结束
					}
					btext1.innerHTML = 'Full';
					LED();
					ttled1[1].style.background = '#00FF00';
					ttled2[1].style.background = '#00FF00';
					btled1[1].style.background = '#00FF00';
					btled2[1].style.background = '#00FF00';
					sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
					sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
					sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
				}
				if (t >= 5 && t < 35) {
					btext1.innerHTML = 'Half';
					LED();
					ttled1[2].style.background = '#00FF00';
					ttled2[2].style.background = '#00FF00';
					btled1[2].style.background = '#00FF00';
					btled2[2].style.background = '#00FF00';
					sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
					sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
					sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
				}
				if (t >= 35 && t < 65) {
					if (schematicX == 2) {
						schematicX = 1; //空气启动结束
					}
					btext1.innerHTML = 'Slow';
					LED();
					ttled1[3].style.background = '#00FF00';
					ttled2[3].style.background = '#00FF00';
					btled1[3].style.background = '#00FF00';
					btled2[3].style.background = '#00FF00';
					sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
					sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
					sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
				}
				if (t >= 65 && t < 95) {
					if (schematicX >= 1) {
						schematicX = 2; //空气启动
					}
					btext1.innerHTML = 'Dead Slow';
					LED();
					ttled1[4].style.background = '#00FF00';
					ttled2[4].style.background = '#00FF00';
					btled1[4].style.background = '#00FF00';
					btled2[4].style.background = '#00FF00';
					sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
					sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
					sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭

				}
				if (t >= 95 && t < 125) {
					btext1.innerHTML = 'Stop';
					LED();
					sdctx.drawImage(picMap, 60, 520, 57, 62, 320, 524, 72, 70); //方向车钟stop位置
					sdctx.drawImage(picMap, 610, 145, 10, 18, 537, 726, 10, 20); //方向车钟stop阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭

					sdctx.drawImage(picMap, 605, 738, 220, 14, 490, 754, 280, 16);
					//方向车钟stop两位三通阀门通路，方向车钟ahead两位三通阀门关闭，方向车钟start两位三通阀门关闭，方向车钟astern两位三通阀门关闭	
				}
				if (t >= 125 && t < 155) {
					if (schematicX >= 1) {
						schematicX = 2; //空气启动
					}
					btext1.innerHTML = 'D.Slow AST';
					LED();
					ttled1[6].style.background = '#E40000';
					ttled2[6].style.background = '#E40000';
					btled1[6].style.background = '#E40000';
					btled2[6].style.background = '#E40000';
					sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
					sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
					sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭

					sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
				}
				if (t >= 155 && t < 185) {
					if (schematicX == 2) {
						schematicX = 1; //空气启动结束
					}
					btext1.innerHTML = 'Slow AST';
					LED();
					ttled1[7].style.background = '#E40000';
					ttled2[7].style.background = '#E40000';
					btled1[7].style.background = '#E40000';
					btled2[7].style.background = '#E40000';
					sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
					sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
					sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
				}
				if (t >= 185 && t < 215) {
					if (schematicX == 2) {
						schematicX = 1; //空气启动结束
					}
					btext1.innerHTML = 'Half AST';
					LED();
					ttled1[8].style.background = '#E40000';
					ttled2[8].style.background = '#E40000';
					btled1[8].style.background = '#E40000';
					btled2[8].style.background = '#E40000';
					sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
					sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
					sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
				}
				if (t >= 215 && t < 245) {
					if (schematicX == 2) {
						schematicX = 1; //空气启动结束
					}
					btext1.innerHTML = 'Full AST';
					LED();
					ttled1[9].style.background = '#E40000';
					ttled2[9].style.background = '#E40000';
					btled1[9].style.background = '#E40000';
					btled2[9].style.background = '#E40000';
					sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
					sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
					sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
				}
				if (t >= 245 && t < 275) {
					if (schematicX == 2) {
						schematicX = 1; //空气启动结束
					}
					btext1.innerHTML = 'Nav.Full AST';
					LED();
					ttled1[10].style.background = '#E40000';
					ttled2[10].style.background = '#E40000';
					btled1[10].style.background = '#E40000';
					btled2[10].style.background = '#E40000';
					sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
					sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
					sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
					sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
					sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
					sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
					//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
				}
			}
		}

	};

	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	};

	return false;
};

/*菜单弹出及隐藏*/
var bLimitersMenu = document.getElementById('bLimitersMenu');
var bLimiters = document.getElementById('bLimiters');
bLimiters.onclick = function () {
	bLimitersMenu.style.display = "block";
}
var bLimitersHomeButton = document.getElementById("bLimitersHomeButton");
bLimitersHomeButton.onclick = function () {
	bLimitersMenu.style.display = "none";
}

/**rpm  limiters菜单*/
var bMenuLi = bLimitersMenu.getElementsByTagName('li');
bMenuLi[4].onclick = function () { //pid参数设定
	pidBox.style.display = "block";
}
bMenuLi[0].onclick = function () { //最大转速手动限制
	setManualRpmLimit.style.display = "block";
}
bMenuLi[1].onclick = function () { //负荷限制
	setLoadProgram.style.display = "block";
}
bMenuLi[2].onclick = function () { //临界转速
	setCriticalRPM.style.display = "block";
}
bMenuLi[3].onclick = function () { //临界转速
	setMinimumRpmLimit.style.display = "block";
}



var pidBox = document.getElementById('pidParameter');
var pidClose = document.getElementById('pidClose');

var setManualRpmLimit = document.getElementById('setManualRpmLimit');
var ManualRpmLimiClose = document.getElementById('ManualRpmLimiClose');

var setLoadProgram = document.getElementById('setLoadProgram');
var loadProgramX = 0; //负荷限制计数器 0为未开启 1位开启

var setCriticalRPM = document.getElementById('setCriticalRPM');


/*pid参数设定*/
var kpx = document.getElementById('Kpx');
var kix = document.getElementById('Kix');
var kdx = document.getElementById('Kdx');
var pidSure = document.getElementById('pidSure');
var pidClose = document.getElementById('pidClose');
pidSure.onclick = function () {
	Kp = kpx.value;
	Ki = kix.value;
	Kd = kdx.value;
	alert("参数设定成功");
}
pidClose.onclick = function () {
	pidBox.style.display = "none";
}


/**临界转速限制 */
var CriticalRPMSure = document.getElementById('CriticalRPMSure');
var CriticalRPMClose = document.getElementById('CriticalRPMClose');
var CriticalRPMmax = document.getElementById('CriticalRPMmax');
var CriticalRPMmin = document.getElementById('CriticalRPMmin');
var CriticalRPMX = 0 //临界转速计数器0为关闭 1为开启
CriticalRPMSure.onclick = function () {
	if (CriticalRPMmax.value <= CriticalRPMmin.value || CriticalRPMmin.value <= 0) {
		alert('输入错误，请重新输入')
	} else {
		alert('临界转速设置成功')
		CriticalRPMX = 1;
	}
}
CriticalRPMClose.onclick = function () {
	setCriticalRPM.style.display = "none";
}

/** 最大转速手动设置*/
var ManualRpmLimit = document.getElementById('ManualRpmLimit');
var ManualRpmLimitX = 0; //最大转速手动限制计数器 0为关闭 1为开启
var ManualRpmLimitSure = document.getElementById('ManualRpmLimitSure');
var ManualRpmLimiClose = document.getElementById('ManualRpmLimiClose');
ManualRpmLimitSure.onclick = function () {
	rmpMaxli = ManualRpmLimit.value;
	alert("参数设定成功");
}
ManualRpmLimiClose.onclick = function () {
	setManualRpmLimit.style.display = "none";
}

/** 最小转速手动设置*/
var MinimunlRpmLimit = document.getElementById('MinimunlRpmLimit');
var MinimunlRpmLimitX = 0; //最小转速手动限制计数器 0为关闭 1为开启
var MinimumRpmLimitSure = document.getElementById('MinimumRpmLimitSure');
var MinimumRpmLimitClose = document.getElementById('MinimumRpmLimitClose');
MinimumRpmLimitSure.onclick = function () {
	//rmpMaxli = ManualRpmLimit.value;
	alert("参数设定成功");
}
MinimumRpmLimitClose.onclick = function () {
	setMinimumRpmLimit.style.display = "none";
}

/**负荷限制设定 */
var setLoadProgramSure = document.getElementById('setLoadProgramSure');
var setLoadProgramClose = document.getElementById('setLoadProgramClose');
setLoadProgramSure.onclick = function () {
	loadProgramX = 1;
	alert("负荷限制启动成功");
}
setLoadProgramClose.onclick = function () {
	setLoadProgram.style.display = "none";
}

var bSeqDiagram = document.getElementById("bSeqDiagram");
var bseqBox = document.getElementById("bseq");
bSeqDiagram.onclick = function () {
	bseqBox.style.display = "block";
}
var bseqHomeButton = document.getElementById("bseqHomeButton");
bseqHomeButton.onclick = function () {
	bseqBox.style.display = "none";
}

//菜单弹出及隐藏
var bEngineStateBox = document.getElementById('bEngineStateBox');
var bEngineState = document.getElementById('bEngineState');
bEngineState.onclick = function () {
	bEngineStateBox.style.display = "block";
	engineNotReadyCheck()
}
document.getElementById('bEngineStateHomeButton').onclick = function () {
	bEngineStateBox.style.display = "none";
}


document.getElementById('bControlPos').onclick = function () {
	document.getElementById('bcontrolPosBox').style.display = 'block';
}
document.getElementById('bcpHomeButton').onclick = function () {
	document.getElementById('bcontrolPosBox').style.display = 'none';
}


//检测气动逻辑阀门状态，匹配ENGINE STATE原因
var bECRengine = document.getElementById('bECRengine')
var bECRengines = bECRengine.getElementsByTagName('li')

function engineNotReadyCheck() {
	if (value16x % 2 == 0) { //主气动阀
		bECRengines[1].style.color = 'red'
	} else {
		bECRengines[1].style.color = 'white'
	}

	if (value116x % 2 == 0) { //盘车机
		bECRengines[2].style.color = 'red'
	} else {
		bECRengines[2].style.color = 'white'
	}

	if (value118x % 2 == 0) { //空气分配器
		bECRengines[0].style.color = 'red'
	} else {
		bECRengines[0].style.color = 'white'
	}
}

var bcancelLim = document.getElementById('bcancelLim'); //cancel lim按钮
bcancelLim.onclick = function () {
	loadProgramX = 0;
	MinimunlRpmLimitX = 0;
	ManualRpmLimitX = 0;
	CriticalRPMX = 0
}

var bemergencyStop = document.getElementById('bemergencyStop'); //紧急停车
var bcancelSHD = document.getElementById('bcancelSHD'); //取消紧急停车按钮
var bcancelSHDx = 0;
bemergencyStop.onmouseover = function () {
	this.style.backgroundColor = '#DD001B'
}
bemergencyStop.onmouseleave = function () {
	this.style.backgroundColor = 'red'
}
bemergencyStop.onclick = function () {
	var a = 1;
	clearInterval(cancel)
	var cancel = setInterval(() => { //取消紧急停车按钮闪烁
		if (a % 2 == 1) {
			bcancelSHD.style.borderColor = "red"
			a++
		} else {
			bcancelSHD.style.borderColor = "white"
			a++
		}
		if (bcancelSHDx == 1) {
			clearInterval(cancel)
			bcancelSHD.style.borderColor = "white"
		}
	}, 300);

	setTimeout(() => {
		clearInterval(cancel)
		bcancelSHD.style.borderColor = "white"
		if (bcancelSHDx == 0) {
			yd = 0;
			ydx = 0;
			rmp = 0;
			rmpx = 0;
			brmp = 0;
			trmp = 0;
			lrmp = 0;
		}
	}, 5000);
}
bcancelSHD.onclick = function () {
	bcancelSHDx = 1;
	setTimeout(() => {
		bcancelSHDx = 0;
	}, 7000);
}



var bcpc = document.getElementById('bcontrolPosCanvas');
var bcpctx = bcpc.getContext('2d');
bcpctx.font = '30px"微软雅黑';
bcpctx.fillStyle = "white";
bcpctx.textBaseline = "top";
bcpctx.fillText("Control Position", 530, 20);
bcpctx.fillText("PORT WING", 150, 150);
bcpctx.fillText("STB. WING", 950, 150);
bcpctx.fillText("BRIDGE", 560, 300);
bcpctx.fillText("ECR", 380, 370);
bcpctx.fillText("ECR Manual Control", 700, 370);
bcpctx.fillText("Local Manual Control", 560, 450);