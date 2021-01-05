/**********************集控室车钟**************/

var ttled1 = document.getElementsByClassName('ttelegraph1Led1');
for (var i = 0; i < 5; i++) {
	ttled1[i].style.background = '#006400';
}
ttled1[5].style.background = 'yellow';
var ttled2 = document.getElementsByClassName('ttelegraph1Led2');
for (var i = 0; i < 5; i++) {
	ttled2[i].style.background = '#006400';
}
ttled2[5].style.background = 'yellow';

/*****************车钟杠杆******************/
var rmp = 0; //船速
var ttelegraph1lever = document.getElementById('ttelegraph1lever');
var ttext1 = document.getElementById('ttelegraph1Text1');
var disY = 0;
//ttelegraph1lever为集控室车钟界面的方向杠杆
ttelegraph1lever.onmousedown = function (ev) {
	var oEvent = ev || event;
	disY = oEvent.clientY - ttelegraph1lever.offsetTop;

	document.onmousemove = function (ev) {
		var oEvent = ev || event;

		var t = oEvent.clientY - disY;

		if (t < -200) {
			t = -200;
		} else if (t > 190) {
			t = 190;
		}

		if (t >= -200 && t < -180) {
			ttext1.innerHTML = 'Nav.Full';
			sdc2tx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if (t >= -180 && t < -140) {
			ttext1.innerHTML = 'Full';
			sdc2tx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if (t >= -140 && t < -100) {
			ttext1.innerHTML = 'Half';
			sdc2tx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if (t >= -100 && t < -60) {
			ttext1.innerHTML = 'Slow';
			sdc2tx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if (t >= -60 && t < -20) {
			ttext1.innerHTML = 'Dead Slow';
			sdc2tx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭

		}
		if (t >= -20 && t < 20) {
			ttext1.innerHTML = 'Stop';

			sdc2tx.drawImage(picMap, 60, 520, 57, 62, 320, 524, 72, 70); //方向车钟stop位置
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 537, 726, 10, 20); //方向车钟stop阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭

			sdc2tx.drawImage(picMap, 605, 738, 220, 14, 490, 754, 280, 16);
			//方向车钟stop两位三通阀门通路，方向车钟ahead两位三通阀门关闭，方向车钟start两位三通阀门关闭，方向车钟astern两位三通阀门关闭	
		}
		if (t >= 20 && t < 60) {
			ttext1.innerHTML = 'D.Slow AST';
			sdc2tx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭

			sdc2tx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if (t >= 60 && t < 100) {
			ttext1.innerHTML = 'Slow AST';
			sdc2tx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if (t >= 100 && t < 140) {
			ttext1.innerHTML = 'Half AST';
			sdc2tx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if (t >= 140 && t < 180) {
			ttext1.innerHTML = 'Full AST';
			sdc2tx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if (t >= 180 && t < 200) {
			ttext1.innerHTML = 'Nav.Full AST';
			sdc2tx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdc2tx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdc2tx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdc2tx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16);
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}

		ttelegraph1lever.style.top = t + 'px';

	};

	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	};

	return false;
};

var ttelegraph2lever = document.getElementById('ttelegraph2lever');
var ttelegraph2watch = document.getElementById('ttelegraph2watch');
var trmp = 0;
ttelegraph2lever.onmousedown = function (ev) {
	var oEvent = ev || event;

	disY = oEvent.clientY - ttelegraph2lever.offsetTop;

	document.onmousemove = function (ev) {
		var oEvent = ev || event;

		var t = oEvent.clientY - disY;

		if (t < -225) {
			t = -225;
		} else if (t > 230) {
			t = 230;
		}

		ttelegraph2lever.style.top = t + 'px';

		if (lhandle1x % 2 == 0) {
			if (thandlex % 2 == 1) {
				//驾驶台控制

				var a = 0;
				if (t >= -225 && t < -40) {
					a = parseInt(-(t + 40) * 82 / 185);
					ttelegraph2watch.innerHTML = a;
					speedLevelChange(a);
					schematicX = 1; //气动逻辑为状态1：气动逻辑完成
				};
				if (t >= -40 && t < -20) {
					ttelegraph2watch.innerHTML = 'START';
					schematicX = 2; //气动逻辑为状态2：开始空气起动
					sdc2tx.drawImage(picMap, 306, 521, 123, 89, 72, 488, 155, 100); //速度车钟start位置

				};
				if (t >= -20 && t < 30) {
					ttelegraph2watch.innerHTML = 'STOP';
					schematicX = 1; //气动逻辑为状态1：气动逻辑完成
					sdc2tx.drawImage(picMap, 180, 521, 123, 89, 73, 488, 155, 100); //速度车钟stop位置
				};
				if (t >= 30 && t < 50) {
					ttelegraph2watch.innerHTML = 'START';
					sdc2tx.drawImage(picMap, 306, 521, 123, 89, 72, 488, 155, 100); //速度车钟start位置
				};
				if (t >= 50 && t < 250) {
					a = parseInt(-(t - 50) * 78 / 180);
					ttelegraph2watch.innerHTML = a;
					speedLevelChange(-a);
					schematicX = 1; //气动逻辑为状态1：气动逻辑完成
				};
				trmp = a;
				if (trmp < 10 && trmp > -10) {
					trmp = 0;
				}
			}
		}
		//yd=a;

		/*
		//驾驶台杠杆随着集控室车钟的变化而变化
		bpointerLever1(rmp, 110, 230, 'bCanvas1');
		//驾驶室表盘指针及示数随着集控室车钟的变化而变化
		pointerRotate(rmp * 0.75, 'bMERPMPointer');
		//集控室杠杆随着集控室车钟的变化而变化
		bpointerLever1(rmp, 110, 230, 'cCanvas1');
		//集控室表盘指针及示数随着集控室车钟的变化而变化
		pointerRotate(rmp * 0.75, 'cMERPMPointer');

		innerChange(rmp, 'RMP', 'bMERPM');
		innerChange(rmp, 'RMP', 'cMERPM');
		if(rmp > 0) {
			innerChange('', 'ahead', 'bState');
			innerChange('', 'ahead', 'cState');
		}
		if(rmp < 0) {
			innerChange('', 'astern', 'bState');
			innerChange('', 'astern', 'cState');
		}
		if(rmp == 0) {
			innerChange('', 'stop', 'bState');
			innerChange('', 'stop', 'cState');
		}*/
	};

	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	};

	return false;
};

//驾控台与集控室 切换手柄
var thandle = document.getElementById('thandle');
var thandlex = 0; //杠杆手柄左右标志位，默认集控室
thandle.onclick = function () {
	if (thandlex % 2 == 1) { //由集控室改到驾控台
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		document.getElementById("bseqBridge").style.backgroundColor = "yellow";
		document.getElementById("bseqManualbcr").style.backgroundColor = "grey";
		thandlex += 1;
		controlLocation();
		if (document.getElementById('tbridge').style.borderColor != 'green') { //违规操作，没有按照步骤进行请求
			document.getElementById('bDeadband').style.backgroundColor = 'red'
			document.getElementById('cDeadband').style.backgroundColor = "red"
		}
	} else { //由驾控台改到集控室
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		document.getElementById("bseqManualbcr").style.backgroundColor = "yellow";
		document.getElementById("bseqBridge").style.backgroundColor = "grey";
		thandlex += 1;

		if (document.getElementById('tecr').style.borderColor != 'green') { //违规操作，没有按照步骤进行请求
			document.getElementById('bDeadband').style.backgroundColor = 'red'
			document.getElementById('cDeadband').style.backgroundColor = "red"
		}
		controlLocation();
	}


}

/*时序图初始*/
document.getElementById("bseqManualbcr").style.backgroundColor = "yellow"; //默认集控室初始

/* 紧急停车 */
var temergencyStop = document.getElementById('temergencyStop'); //紧急停车
var tcancelSHD = document.getElementById('tcancelSHD'); //取消紧急停车按钮
var tcancelSHDx = 0;
temergencyStop.onmouseover = function () {
	this.style.backgroundColor = '#DD001B'
}
temergencyStop.onmouseleave = function () {
	this.style.backgroundColor = 'red'
}
temergencyStop.onclick = function () {
	var a = 1;
	clearInterval(cancel)
	var cancel = setInterval(() => { //取消紧急停车按钮闪烁
		if (a % 2 == 1) {
			tcancelSHD.style.borderColor = "red"
			a++
		} else {
			tcancelSHD.style.borderColor = "white"
			a++
		}
		if (tcancelSHDx == 1) {
			clearInterval(cancel)
			tcancelSHD.style.borderColor = "white"
		}
	}, 300);

	setTimeout(() => {
		clearInterval(cancel)
		tcancelSHD.style.borderColor = "white"
		if (tcancelSHDx == 0) {
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
tcancelSHD.onclick = function () {
	tcancelSHDx = 1;
	setTimeout(() => {
		tcancelSHDx = 0;
	}, 7000);
}