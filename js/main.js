//阻止右键菜单
document.oncontextmenu = function (ev) {
	var oEvent = ev || event;
	return false;
}
//获取导航
var ahomepage = document.getElementById('ahomepage');
var abridge = document.getElementById('abridge');
var acontrolRoom = document.getElementById('acontrolRoom');
// var acontrolPanel = document.getElementById('acontrolPanel');
var alocal = document.getElementById('alocal');
var aschematicDiagram = document.getElementById('aschematicDiagram');
var athreeD = document.getElementById('athreeD');
var atelegraph = document.getElementById('atelegraph');
var adiagram = document.getElementById('adiagram');
var acondition = document.getElementById('acondition');
var agovernor = document.getElementById('agovernor');
//获取页面内容
var homepage = document.getElementById('homepage');
var bridge = document.getElementById('bridge');
var controlRoom = document.getElementById('controlRoom');
// var controlPanel = document.getElementById('controlPanel');
var local = document.getElementById('local');
var schmaticDiagram = document.getElementById('schematicDiagram');
var threeD = document.getElementById('threeD');
var telegraph = document.getElementById('telegraph');
var diagram = document.getElementById('diagram');
var condition = document.getElementById('condition');
var governor = document.getElementById('governor');

var menu = document.getElementById("menuUl");
var menuli = menu.getElementsByTagName("li");
// for(let menulix = 0; menulix < menuli.length; menulix++) {
// 	menuli[menulix].onmouseover = function() {
// 		this.style.background = '#819FF7';
// 	}
// 	menuli[menulix].onmouseout = function() {
// 		this.style.background = 'rgb(0, 103, 153)';
// 	}

// }

//画面切换函数
ahomepage.onclick = function () {
	homepage.style.display = "block";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";
	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

abridge.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "block";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}
acontrolRoom.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "block";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}
// acontrolPanel.onclick = function() {
// 	homepage.style.display = "none";
// 	bridge.style.display = "none";
// 	controlRoom.style.display = "none";
// 	controlPanel.style.display = "block";
// 	local.style.display = "none";
// 	schmaticDiagram.style.display = "none";
// 	threeD.style.display = "none";
// 	telegraph.style.display = "none";
// 	diagram.style.display = "none";

// 	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
// 		menuli[menulixx].style.color = 'white';
// 	}
// 	this.style.color = 'yellow';
// }
alocal.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "block";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

// ZM-----------

var lPic = document.getElementById('lpicture');
var lPiced = lPic.getElementsByTagName('img');

for (var i = 0; i < lPiced.length; i++) {

	lPiced[i].onmouseover = function () {
		startMove(this, 'opacity', 100);
	};
	lPiced[i].onmouseout = function () {
		startMove(this, 'opacity', 0);
	};
}
// “结构总览”的跳转
// white.onclick = function(){
// 	lmainsys.style.display = "none";
// 	lpanel.style.display = "none";
// 	lopwheel.style.display = "none";
// 	lgov.style.display = "none";
// 	ltele.style.display = "block";
// 	l2d.style.display = "none";
// }


// jquery 点击变色，其余恢复
$('#localmenu li').on('click', function () {

	// this.color = "rgb(112, 42, 89)";
	$(this).css({
		'border': ' 2px solid white',

		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$(this).siblings().css({
		'border': ' 1px solid white',
		'background-color': ' rgb(104, 156, 199)',
		'color': 'white'

	});
})


$('#pstop').on('mousedown', function () {
	startMove(this, 'opacity', 100);
})

$('#pstop').on('mouseup', function () {
	startMove(this, 'opacity', 0);
})
var x = 0;
var y = 0;
$('#pswitch1').on('click', function () {

	x += 1;
	if (x % 2 == 1) {
		startMove(this, 'opacity', 100);
		$('#touming').on('click', function () {
			$('#pswitch2').css('display', 'block');
			document.getElementById('plaheadLed').style.backgroundColor = '#085A13';
			document.getElementById('plasternLed').style.backgroundColor = '#FF0000';

			document.getElementById('olaheadLed').style.backgroundColor = '#085A13';
			document.getElementById('olasternLed').style.backgroundColor = '#FF0000';

			document.getElementById('glaheadLed').style.backgroundColor = '#085A13';
			document.getElementById('glasternLed').style.backgroundColor = '#FF0000';

			document.getElementById('tlaheadLed').style.backgroundColor = '#085A13';
			document.getElementById('tlasternLed').style.backgroundColor = '#FF0000';

			document.getElementById('lhandle2').style.transformOrigin = '31% 31%';
			document.getElementById('lhandle2').style.transform = 'rotate(' + 0 + 'deg)';
			lhandle2x += 1;
			// controlLocation();
			document.getElementById('laheadLed').style.backgroundColor = '#085A13';
			document.getElementById('lasternLed').style.backgroundColor = '#FF0000';
		})
		$('#touming2').on('click', function () {
			$('#pswitch2').css('display', 'none');
			document.getElementById('plaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('plasternLed').style.backgroundColor = '#800000';

			document.getElementById('olaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('olasternLed').style.backgroundColor = '#800000';

			document.getElementById('glaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('glasternLed').style.backgroundColor = '#800000';

			document.getElementById('tlaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('tlasternLed').style.backgroundColor = '#800000';

			document.getElementById('lhandle2').style.transformOrigin = '31% 31%';
			document.getElementById('lhandle2').style.transform = 'rotate(' + 90 + 'deg)';
			lhandle2x += 1;
			// controlLocation();
			document.getElementById('laheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('lasternLed').style.backgroundColor = '#800000';

		})
	}
	if (x % 2 == 0) {
		startMove(this, 'opacity', 0);
		$('#touming').on('click', function () {
			$('#pswitch2').css('display', 'none');

		})
		$('#touming2').on('click', function () {
			$('#pswitch2').css('display', 'none');
		})
	}

})

$('#pswitch3').on('click', function () {

	y += 1;
	if (y % 2 == 1) {
		startMove(this, 'opacity', 100);
		$('#touming3').on('click', function () {
			$('#pswitch4').css('display', 'block');
			document.getElementById('glemergencyControlLed').style.backgroundColor = '#FF0000';
			document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';

			document.getElementById('plemergencyControlLed').style.backgroundColor = '#FF0000';
			document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';

			document.getElementById('olemergencyControlLed').style.backgroundColor = '#FF0000';
			document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';

			document.getElementById('tlemergencyControlLed').style.backgroundColor = '#FF0000';
			document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';

			document.getElementById('plbcr').style.borderColor = 'white';
			document.getElementById('plecr').style.borderColor = 'white';
			document.getElementById('plloc').style.borderColor = '#FFC200';

			document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
			document.getElementById('lbridgeControlLed').style.backgroundColor = '#085A13';
			// document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';


			document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
			document.getElementById('lhandle1').style.transform = 'rotate(' + 90 + 'deg)';
			lhandle1x += 1;
			// controlLocation();

			document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
			document.getElementById('lbcrled').style.backgroundColor = 'white';
			document.getElementById('lecrled').style.backgroundColor = 'white';
			document.getElementById('llocled').style.backgroundColor = '#FFC200';
			document.getElementById('plbcrled').style.backgroundColor = 'white';
			document.getElementById('plecrled').style.backgroundColor = 'white';
			document.getElementById('pllocled').style.backgroundColor = '#FFC200';
			document.getElementById('plbcr').style.borderColor = 'white';
			document.getElementById('plecr').style.borderColor = 'white';
			document.getElementById('plloc').style.borderColor = '#FFC200';
			document.getElementById('lbcr').style.borderColor = 'white';
			document.getElementById('lecr').style.borderColor = 'white';
			document.getElementById('lloc').style.borderColor = '#FFC200';
		})
		$('#touming4').on('click', function () {
			$('#pswitch4').css('display', 'none');
			document.getElementById('plbcr').style.borderColor = '#FFC200';
			document.getElementById('plecr').style.borderColor = 'white';
			document.getElementById('plloc').style.borderColor = 'white';
			document.getElementById('pllocled').style.backgroundColor = 'white';

			document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
			document.getElementById('lhandle1').style.transform = 'rotate(' + 0 + 'deg)';
			lhandle1x += 1;

		})
	}
	if (y % 2 == 0) {
		startMove(this, 'opacity', 0);
		// $('#touming3').on('click',function(){
		// 	$('#pswitch4').css('display','none');

		// })
		$('#touming4').on('click', function () {
			$('#pswitch4').css('display', 'none');
		})
	}

})
//油门开关
var wx = 0;
var yy = 0;
document.getElementById('wheelswitch').onclick = function () {
	wx += 1;
	console.log('wx', wx);
	if (wx % 2 == 1) {
		startMove(this, 'opacity', 100);
		lhandle3x = wx;
		console.log('lhandle3x', lhandle3x);
		document.getElementById('lhandle3').style.transformOrigin = '31% 31%';
		document.getElementById('lhandle3').style.transform = 'rotate(' + 90 + 'deg)';
		yy += 1;
	}

	if (wx % 2 == 0) {
		startMove(this, 'opacity', 0);
		lhandle3x = wx - 2;
		console.log('lhandle3x', lhandle3x);
		document.getElementById('lhandle3').style.transformOrigin = '31% 31%';
		document.getElementById('lhandle3').style.transform = 'rotate(' + 0 + 'deg)';
		// 	if (lhandle3x % 2 == 0) {
		// 	   $('#lhandle3').css('transformOrigin','31% 31%');
		// 	   $('#lhandle3').css('transform','rotate(' + 90 + 'deg)');
		//    } else {
		// 	   $('#lhandle3').css('transformOrigin','31% 31%');
		// 	   $('#lhandle3').css('transform','rotate(' + 0 + 'deg)');

		//    }
		yy -= 1;
	}

}
// document.getElementById('conBefore').onclick=function(){//原始状况
// 	wx=0;console.log('wx',wx);
// 	startMove(document.getElementById('wheelswitch'), 'opacity', 0);
// }

var impactwheelx = 0;
document.getElementById('impactwheel').onclick = function () {
	impactwheelx += 1;
	console.log('imx', impactwheelx);
	if (impactwheelx % 2 == 1) {
		startMove(this, 'opacity', 100);
		document.getElementById('lhandwheelDis').style.border = '1px solid red'
		document.getElementById('lhandwheelCon').style.border = ''

		lwheelx1x = 0;
		var lw1c = document.getElementById("lwheel1canvas");
		var lw1ctx = lw1c.getContext("2d");
		lw1ctx.clearRect(0, 0, 140, 11);
		lw1ctx.beginPath();
		lw1ctx.rect(0, 0, 0, 11);
		lw1ctx.fillStyle = "red"
		lw1ctx.fill();

	}
	if (impactwheelx % 2 == 0) {
		startMove(this, 'opacity', 0);
		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'

		lwheelx1x = 5;
		var lw1c = document.getElementById("lwheel1canvas");
		var lw1ctx = lw1c.getContext("2d");
		lw1ctx.clearRect(0, 0, 140, 11);
		lw1ctx.beginPath();
		lw1ctx.rect(0, 0, 140, 11);
		lw1ctx.fillStyle = "red"
		lw1ctx.fill();
	}
}
// lwheel1Right.onclick = function () {
// 	lwheelx1 += 45;
// 	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
// 	lwheelx1x -= 1;
// 	if (lwheelx1x <= 0) {
// 		lwheelx1x = 0;
// 	}
// 	if (lwheelx1x <= 2) {
// 		document.getElementById('lhandwheelDis').style.border = '1px solid red'
// 		document.getElementById('lhandwheelCon').style.border = ''
// 		// startMove($('#impactwheel'), 'opacity', 0);
// 		startMove(document.getElementById('impactwheel'), 'opacity', 0);
// 		impactwheelx = 0;
// 		console.log('imx', impactwheelx);
// 	} else {
// 		document.getElementById('lhandwheelDis').style.border = ''
// 		document.getElementById('lhandwheelCon').style.border = '1px solid red'
// 		// startMove($('#impactwheel'), 'opacity', 100);
// 	}

// 	lprintPancel1(lwheelx1x);
// 	console.log('lwheelx1x', lwheelx1x)
// }
// lwheel1Left.onclick = function () {
// 	lwheelx1 -= 45;
// 	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
// 	lwheelx1x += 1;
// 	if (lwheelx1x >= 5) {
// 		lwheelx1x = 5;
// 	}
// 	if (lwheelx1x <= 2) {
// 		document.getElementById('lhandwheelDis').style.border = '1px solid red'
// 		// document.getElementById('lhandwheelDis').style.color='yellow'
// 		document.getElementById('lhandwheelCon').style.border = ''

// 	} else {
// 		document.getElementById('lhandwheelDis').style.border = ''
// 		document.getElementById('lhandwheelCon').style.border = '1px solid red'
// 		// startMove($('#impactwheel'), 'opacity', 100);	
// 		startMove(document.getElementById('impactwheel'), 'opacity', 100);
// 		impactwheelx = 0;
// 		console.log('imx', impactwheelx);
// 	}
// 	lprintPancel1(lwheelx1x);
// 	console.log('lwheelx1x', lwheelx1x)
// }

document.getElementById('conBefore').onclick = function () { //原始状况
	wx = 0;
	console.log('wx', wx);
	impactwheelx = 0;
	console.log('imx', impactwheelx);
	value16x = 0;
	value122x = 0;
	value3x = 0;
	value116x = 0;
	value118x = 0;
	valueMainx = 0;
	condition.style.display = 'none';
	// conditionX+=1;
	btelegraph1lever.style.top = '-335px';
	z = 0;
	$('#wheelstart').css('display', 'none');
	$('#wheeloil1').css('display', 'none');
	$('#wheeloil1.5').css('display', 'none');
	$('#wheeloil2').css('display', 'none');
	$('#wheeloil3').css('display', 'none');
	$('#wheeloil4').css('display', 'none');
	btelegraph1lever.style.top = '-330px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lshutdownLed.style.backgroundColor = ' #800000';
	document.getElementById('lhandwheelDis').style.border = ''
	document.getElementById('lhandwheelCon').style.border = '1px solid red'


	startMove(document.getElementById('impactwheel'), 'opacity', 0);
	startMove(document.getElementById('wheelswitch'), 'opacity', 0);


	lhandle1x = 1; //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 5; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor = '#01D867';
	bStandBy.innerHTML = 'FWE';
	cStandBy.style.backgroundColor = '#01D867';
	cStandBy.innerHTML = 'FWE';

	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	//	LED()
	schematicX = 0;

	briled = 5;
	telled = 5;
	locled = 5;
	briLEDclear(briled);
	telLEDclear(briled, telled);
	lclearSpeedLed(briled, locled);

}


//油门开关控制油门的逻辑
var z = 0;

var pwheelx1x = 0;

$('#wheeltouming').on('click', function () {
	if (yy == 1) {
		z += 1;
		if (z == 1) {
			$('#wheelstart').css('display', 'block');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'block');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 30;
			lwheelx2x = 4;
			lprintPancel2(4);

		}
		if (z == 2) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'block');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'block');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 50;
			lwheelx2x = 5;
			lprintPancel2(5);
		}
		if (z == 3) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'block');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'block');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 60;
			lwheelx2x = 7;
			lprintPancel2(7);
		}
		if (z == 4) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'block');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'block');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 70;
			lwheelx2x = 8;
			lprintPancel2(8);
		}
		if (z == 5) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'block');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'block');
			$('#panel_5').css('display', 'none');
			lrmp = 80;
			lwheelx2x = 9;
			lprintPancel2(9);
		}
		if (z == 6) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'block');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'block');
			lrmp = 90;
			lwheelx2x = 11;
			lprintPancel2(11);
		}
		if (z >= 6) {
			z = 6;
		}
	}
})
$('#wheeltoumingleft').on('click', function () {
	if (yy == 1) {
		z -= 1;
		if (z == 1) {
			$('#wheelstart').css('display', 'block');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'block');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 30;
			lwheelx2x = 4;
			lprintPancel2(4);
		}
		if (z == 2) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'block');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'block');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 50;
			lwheelx2x = 5;
			lprintPancel2(5);
		}
		if (z == 3) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'block');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'block');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 60;
			lwheelx2x = 7;
			lprintPancel2(7);
		}
		if (z == 4) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'block');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'block');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
			lrmp = 70;
			lwheelx2x = 8;
			lprintPancel2(8);
		}
		if (z == 5) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'block');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'block');
			$('#panel_5').css('display', 'none');
			lrmp = 80;
			lwheelx2x = 9;
			lprintPancel2(9);
		}
		if (z == 6) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'block');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'block');
			lrmp = 90;
			lwheelx2x = 11;
			lprintPancel2(11);
		}
		if (z == 0) {
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1.5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'block');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
		}
		if (z <= 0) {
			z = 0;
		}
	}

})

// else{
// 	$('#wheeltouming').on('click',function(){})
// 	$('#wheeltoumingleft').on('click',function(){})
// }


// document.getElementById('glbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('glemergencyControlLed').style.backgroundColor = '#800000';

// document.getElementById('plbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('plemergencyControlLed').style.backgroundColor = '#800000';
// document.getElementById('olbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('olemergencyControlLed').style.backgroundColor = '#800000';
// document.getElementById('tlbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('tlemergencyControlLed').style.backgroundColor = '#800000';












$('#white1').on('click', function () {
	$('#ltele').css('display', 'block');
	$('#lpanel').css('display', 'none');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'none');
	$('#lopwheel').css('display', 'none');
	$('#l2d').css('display', 'none');
	$('#lm_tele').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_tele').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})
$('#white2').on('click', function () {
	$('#ltele').css('display', 'none');
	$('#lpanel').css('display', 'none');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'block');
	$('#lopwheel').css('display', 'none');
	$('#l2d').css('display', 'none');
	$('#lm_gov').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_gov').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})
$('#white3').on('click', function () {
	$('#ltele').css('display', 'none');
	$('#lpanel').css('display', 'block');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'none');
	$('#lopwheel').css('display', 'none');
	$('#l2d').css('display', 'none');
	$('#lm_panel').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_panel').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})
$('#white4').on('click', function () {
	$('#ltele').css('display', 'none');
	$('#lpanel').css('display', 'none');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'none');
	$('#lopwheel').css('display', 'block');
	$('#l2d').css('display', 'none');
	$('#lm_opwheel').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_opwheel').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})



var zmm = 0;
lm_mainsys.onclick = function () {
	zmm = 1;
	lmainsys.style.display = "block";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "none";
}
lm_panel.onclick = function () {
	zmm = 2;
	lmainsys.style.display = "none";
	lpanel.style.display = "block";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "none";

}
lm_gov.onclick = function () {
	zmm = 3;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "block";
	ltele.style.display = "none";
	l2d.style.display = "none";
}
lm_opwheel.onclick = function () {
	zmm = 4;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "block";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "none";
}
lm_tele.onclick = function () {
	zmm = 5;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "block";
	l2d.style.display = "none";
}
lm_2d.onclick = function () {
	zmm = 6;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "block";
}


// if (zmm == 1) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "block";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_mainsys').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_mainsys').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 2) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "block";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_panel').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_panel').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 3) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "block";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_opwheel').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_opwheel').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 4) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "block";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_gov').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_gov').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 5) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "block";
// 		l2d.style.display = "none";
// 		$('#lm_tele').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_tele').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 6) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "block";
// 		$('#lm_2d').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_2d').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }


aschematicDiagram.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "block";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}
athreeD.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "block";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"

}
atelegraph.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "block";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

adiagram.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "block";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

agovernor.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "block";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

// var conditionX=0;//0代表未显示，1代表显示
acondition.onclick = function () {
	// if(conditionX%2==0){
	// 	condition.style.display="block";
	// 	conditionX+=1;
	// }else{
	// 	condition.style.display="none";
	// 	conditionX+=1;
	// }
	condition.style.display = "block";
}

//初始化，显示校船图片
var astart = function () {
	homepage.style.display = "block";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	ahomepage.style.color = "yellow"
	ahomepage.style.backgroundColor = " #9badaf"
}

astart();

//获取主界面图片内部导航
var hbridge = document.getElementById('hbridge');
var hcontrolRoom = document.getElementById('hcontrolRoom');
// var hcontrolPanel = document.getElementById('hcontrolPanel');
var hlocal = document.getElementById('hlocal');
var htelegraph = document.getElementById('htelegraph');

//主界面图片内部导航切换函数
hbridge.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "block";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	abridge.style.color = 'yellow';
}
hcontrolRoom.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "block";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	acontrolRoom.style.color = 'yellow';
}
// hcontrolPanel.onclick = function() {
// 	homepage.style.display = "none";
// 	bridge.style.display = "none";
// 	controlRoom.style.display = "none";
// 	controlPanel.style.display = "block";
// 	local.style.display = "none";
// 	schmaticDiagram.style.display = "none";
// 	telegraph.style.display = "none";
// 	threeD.style.display = "none";
// 	diagram.style.display = "none";

// 	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
// 		menuli[menulixx].style.color = 'white';
// 	}
// 	acontrolPanel.style.color = 'yellow';
// }
hlocal.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "block";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	alocal.style.color = 'yellow';
}
htelegraph.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "block";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	atelegraph.style.color = 'yellow';
}

/*主界面淡入淡出*/
var hPic = document.getElementById('hpicture');
var hPiced = hPic.getElementsByTagName('img');

for (var i = 0; i < hPiced.length; i++) {

	hPiced[i].onmouseover = function () {
		startMove(this, 'opacity', 100);
	};
	hPiced[i].onmouseout = function () {
		startMove(this, 'opacity', 0);
	};
}

//工况切换

document.getElementById('conReadyC').onclick = function () { //备车完毕
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x = 1;
	value118x = 1;
	valueMainx = 1;
	condition.style.display = 'none';
	btelegraph1lever.style.top = '-335px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lshutdownLed.style.backgroundColor = ' #800000';

	lhandle1x = 0; //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 5; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor = 'yellow';
	bStandBy.innerHTML = 'Stand By';
	cStandBy.style.backgroundColor = 'yellow';
	cStandBy.innerHTML = 'Stand By';

	//	LED()
	controlLocation();
	schematicX = 1;
	lwheelx1x = 5;
	lprintPancel1(lwheelx1x);

	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	//	LED()
	schematicX = 1;

	briled = 5;
	telled = 5;
	locled = 5;
	briLEDclear(briled);
	telLEDclear(briled, telled);
	lclearSpeedLed(briled, locled);
}


function onSea() { //航行状态
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x = 1;
	value118x = 1;
	valueMainx = 1;
	condition.style.display = 'none';
	//车钟杠杆位置
	btelegraph1lever.style.top = '-495px';

	subTelegraph(-30);
	ttled1[0].style.background = '#00FF00';
	ttled2[0].style.background = '#00FF00';
	btled1[0].style.background = '#00FF00';
	btled2[0].style.background = '#00FF00';

	bStandBy.style.backgroundColor = '#01D867';
	bStandBy.innerHTML = 'At Sea';
	cStandBy.style.backgroundColor = '#01D867';
	cStandBy.innerHTML = 'At Sea';

	lshutdownLed.style.backgroundColor = ' #800000';
	lhandle1x = 0; //机旁页面扳手 指向remote
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 0; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);
	brmp = 90;

	ydx = 90;
	schematicX = 1;
	lwheelx1x = 5;
	lprintPancel1(lwheelx1x);
}
//初始状态即为主机运行

document.getElementById('conOnSea').onclick = function () {
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x = 1;
	value118x = 1;
	valueMainx = 1;
	condition.style.display = 'none';
	//车钟杠杆位置
	btelegraph1lever.style.top = '-495px';
	//车令位置
	//LED()
	//briLEDclear()

	subTelegraph(-30);
	ttled1[0].style.background = '#00FF00';
	ttled2[0].style.background = '#00FF00';
	btled1[0].style.background = '#00FF00';
	btled2[0].style.background = '#00FF00';

	bStandBy.style.backgroundColor = '#01D867';
	bStandBy.innerHTML = 'At Sea';
	cStandBy.style.backgroundColor = '#01D867';
	cStandBy.innerHTML = 'At Sea';

	lshutdownLed.style.backgroundColor = ' #800000';

	lhandle1x = 0; //机旁页面扳手 指向remote
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 0; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);


	//rmpx=61;
	brmp = 90;
	ydx = 90;
	schematicX = 1;
	lwheelx1x = 5;
	lprintPancel1(lwheelx1x);

};