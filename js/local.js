var lrmp = 0; //机旁控制转速
var lrmpx=0;//暂存机旁控制转速
var lbox1c = document.getElementById('lbox1canvas');
var lbox1ctx = lbox1c.getContext("2d");
lbox1ctx.font = '18px Arial';
lbox1ctx.fillStyle = '#FFFF00';
lbox1ctx.fillText('AHEAD', 78, 33);
lbox1ctx.fillText('ASTERN', 235, 33);
lbox1ctx.fillText('SHUT DOWN', 78, 82);
lbox1ctx.beginPath();
lbox1ctx.font = '14px Arial';
lbox1ctx.fillStyle = '#FFFF00';
lbox1ctx.fillText('TURNING GEAR', 80, 120);
lbox1ctx.fillText('ENGAGED', 80, 135);
lbox1ctx.fillText('BRIDGE', 235, 72);
lbox1ctx.fillText('CONTROL', 235, 87);
lbox1ctx.fillText('AUX BLOWER', 80, 168);
lbox1ctx.fillText('RUNNING', 80, 183);
lbox1ctx.fillText('CONTROL ROOM', 235, 120);
lbox1ctx.fillText('CONTROL', 235, 135);
lbox1ctx.fillText('EMERGENCY', 235, 168);
lbox1ctx.fillText('CONTROL', 235, 183);
lbox1ctx.beginPath();
lbox1ctx.font = '13px Arial';
lbox1ctx.fillStyle = '#FFFFFF';
lbox1ctx.fillText('CANCEL', 91, 225);
lbox1ctx.fillText('SHUT DOWN', 77, 240);
lbox1ctx.fillText('LAMP', 219, 225);
lbox1ctx.fillText('TEST', 219, 240);


//扳手转动
var lhandle1 = document.getElementById('lhandle1');
var lhandle1x = 0; //标识位 0为REMOTE 1为LOCAL
lhandle1.onclick = function () {
	if (lhandle1x % 2 == 0) {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		lhandle1x += 1;
		controlLocation();
	} else {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		lhandle1x += 1;
		controlLocation();
	}

}

var lhandle2 = document.getElementById('lhandle2');
var lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
lhandle2.onclick = function () {
	if (lhandle2x % 2 == 0) {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		lhandle2x += 1;
	} else {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		lhandle2x += 1;
	}

}

//锁紧手柄
var lhandle3 = document.getElementById('lhandle3');
var lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
lhandle3.onclick = function () {
	if (lhandle3x % 2 == 0) {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		lhandle3x += 1;
	} else {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		lhandle3x += 1;
	}

}
//摇柄
var lwheel1 = document.getElementById('lwheel1');
var lwheel2 = document.getElementById('lwheel2');
var lwheelx1 = 0;
var lwheelx2 = 0;
var lwheelx2x = 0; //表盘刻度变化系数
var lwheelx1x = 0; //表盘刻度变化系数

function lprintPancel1(a) {
	var lw1c = document.getElementById("lwheel1canvas");
	var lw1ctx = lw1c.getContext("2d");
	lw1ctx.clearRect(0, 0, 140, 11);
	lw1ctx.beginPath();
	lw1ctx.rect(0, 0, 28 * a, 11);
	lw1ctx.fillStyle = "red"
	lw1ctx.fill();
}
lprintPancel1(lwheelx1x);

function lprintPancel2(a) {
	var lw2c = document.getElementById("lwheel2canvas");
	var lw2ctx = lw2c.getContext("2d");
	lw2ctx.clearRect(0, 0, 190, 210);
	lw2ctx.beginPath();
	lw2ctx.rect(58, 197 - 15 * a, 22, 15 * a);
	lw2ctx.fillStyle = "red"
	lw2ctx.fill();	
	lw2ctx.moveTo(59,145);
	lw2ctx.lineTo(82,145);
	lw2ctx.strokeStyle = "blue";
	lw2ctx.stroke();
}
lprintPancel2(lwheelx2x);

var lbuttonStart = document.getElementById('lbuttonStart');
var lbuttonStop = document.getElementById('lbuttonStop');
lbuttonStart.onmousedown = function () {
	lbuttonStart.style.backgroundColor = "green";
	lbuttonStop.style.backgroundColor = "grey";
	 if(value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && valueMainx%2==1 && lwheelx1x>=3 && lhandle1x % 2 == 1){
		LED()
		schematicX = 1;
		lrmpx=lrmp;
		lrmp=30;
		console.log('ok',lrmp)
	 }	
}
lbuttonStart.onmouseup = function () {
	lbuttonStart.style.backgroundColor = "grey";
	lrmp=lrmpx;
	console.log('lrmp',lrmpx);
}

lbuttonStop.onclick = function () {
	lbuttonStop.style.backgroundColor = "#B40404";
}

var lwheel1Left = document.getElementById('lwheel1Left');
lwheel1Left.onmousemove = function () {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
var lwheel1Right = document.getElementById('lwheel1Right');
lwheel1Right.onmousemove = function () {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
lwheel1Right.onclick = function () {
	lwheelx1 += 45;
	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
	lwheelx1x -= 1;
	if (lwheelx1x <= 0) {
		lwheelx1x = 0;
	}
	if (lwheelx1x <= 2) {
		document.getElementById('lhandwheelDis').style.border = '1px solid red'
		document.getElementById('lhandwheelCon').style.border = ''
	} else {
		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'
	}

	lprintPancel1(lwheelx1x);
	console.log('lwheelx1x',lwheelx1x)
}
lwheel1Left.onclick = function () {
	lwheelx1 -= 45;
	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
	lwheelx1x += 1;
	if (lwheelx1x >= 5) {
		lwheelx1x = 5;
	}
	if (lwheelx1x <= 2) {
		document.getElementById('lhandwheelDis').style.border = '1px solid red'
		// document.getElementById('lhandwheelDis').style.color='yellow'
		document.getElementById('lhandwheelCon').style.border = ''
	} else {
		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'
	}
	lprintPancel1(lwheelx1x);
	console.log('lwheelx1x',lwheelx1x)
}

var lwheel2Left = document.getElementById('lwheel2Left');
lwheel2Left.onmousemove = function () {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
var lwheel2Right = document.getElementById('lwheel2Right');
lwheel2Right.onmousemove = function () {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
lwheel2Right.onclick = function () {
	if (lhandle3x%2== 1) {
		lwheelx2 += 45;
		lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
		lwheelx2x += 1;
		if (lwheelx2x >= 11) {
			lwheelx2x = 11;
		}
		lprintPancel2(lwheelx2x);
		lrmp += 10;
		if (lrmp >= 110) {
			lrmp = 110;
		}
	}
}
lwheel2Left.onclick = function () {
	if (lhandle3x%2== 1) {
		lwheelx2 -= 45;
		lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
		lwheelx2x -= 1;
		if (lwheelx2x <= 0) {
			lwheelx2x = 0;
		}
		lprintPancel2(lwheelx2x);
		lrmp -= 10;
		if (lrmp <= 0) {
			lrmp = 0;
		}
	}
}

var operableLed = document.getElementsByClassName('operableLed');
var mouseOnLed = function () {
	for (var i = 0; i < operableLed.length; i++) {
		operableLed[i].onmouseover = function () {
			this.style.opacity = 0.8;
		}
		operableLed[i].onmouseout = function () {
			this.style.opacity = 1;
		}
	}
}
mouseOnLed();

var lspeeds = document.getElementById('lbox2box3');
var lspeedsAll = lspeeds.getElementsByTagName('div');
var lspeedsLed = lspeeds.getElementsByClassName('lspeedButtonLed');
var lclearSpeedLed = function () {
	for (var i = 0; i < lspeedsAll.length; i++) {
		lspeedsAll[i].style.borderColor = 'white';
	}
	for (var i1 = 0; i1 < lspeedsLed.length; i1++) {
		lspeedsLed[i1].style.backgroundColor = 'white';
	}
}
document.getElementById('lnavFull').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lnavFullled').style.backgroundColor = '#FFC200';
}
document.getElementById('lfull').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lfullled').style.backgroundColor = '#FFC200';
}
document.getElementById('lhalf').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lhalfled').style.backgroundColor = '#FFC200';
}
document.getElementById('lslow').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lslowled').style.backgroundColor = '#FFC200';
}
document.getElementById('ldeSlow').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('ldeSlowled').style.backgroundColor = '#FFC200';
}
document.getElementById('lstop').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lstopled').style.backgroundColor = '#FFC200';
}
document.getElementById('ldeSlow1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('ldeSlow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lslow1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lslow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lhalf1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lhalf1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lfull1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lfull1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lemAst').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lemAstled').style.backgroundColor = '#FFC200';
}
/*紧急停车*/
var lemergencyStop = document.getElementById('lemergencyStop'); //紧急停车
var lcancelSHD = document.getElementById('lbuttonCancelShutDown'); //取消紧急停车按钮
var lcancelSHDx = 0;
lemergencyStop.onmouseover = function () {
	this.style.backgroundColor = '#DD001B'
}
lemergencyStop.onmouseleave = function () {
	this.style.backgroundColor = '#7f0000'
}
lemergencyStop.onclick = function () {
	var a = 1;
	clearInterval(cancel)
	var cancel = setInterval(() => { //取消紧急停车按钮闪烁
		if (a % 2 == 1) {
			lcancelSHD.style.borderColor = "red"
			a++
		} else {
			lcancelSHD.style.borderColor = "white"
			a++
		}
		if (lcancelSHDx == 1) {
			clearInterval(cancel)
			lcancelSHD.style.borderColor = "white"
		}
	}, 300);

	setTimeout(() => {
		clearInterval(cancel)
		lcancelSHD.style.borderColor = "white"
		if (lcancelSHDx == 0) {
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
lcancelSHD.onclick = function () {
	lcancelSHDx = 1;
	setTimeout(() => {
		lcancelSHDx = 0;
	}, 7000);
}