//阻止右键菜单
document.oncontextmenu = function(ev) {
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
var acondition=document.getElementById('acondition');
var agovernor=document.getElementById('agovernor');
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
var condition=document.getElementById('condition');
var governor=document.getElementById('governor');

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
ahomepage.onclick = function() {
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
	condition.style.display="none";
	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
}

abridge.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
}
acontrolRoom.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
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
alocal.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
}
aschematicDiagram.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
}
athreeD.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"

}
atelegraph.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
}

adiagram.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
}

agovernor.onclick = function() {
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
	condition.style.display="none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor=" #9badaf"
}

// var conditionX=0;//0代表未显示，1代表显示
acondition.onclick=function(){
	// if(conditionX%2==0){
	// 	condition.style.display="block";
	// 	conditionX+=1;
	// }else{
	// 	condition.style.display="none";
	// 	conditionX+=1;
	// }
	condition.style.display="block";
}

//初始化，显示校船图片
var astart = function() {
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
	ahomepage.style.color="yellow"
	ahomepage.style.backgroundColor=" #9badaf"
}

astart();

//获取主界面图片内部导航
var hbridge = document.getElementById('hbridge');
var hcontrolRoom = document.getElementById('hcontrolRoom');
// var hcontrolPanel = document.getElementById('hcontrolPanel');
var hlocal = document.getElementById('hlocal');
var htelegraph = document.getElementById('htelegraph');

//主界面图片内部导航切换函数
hbridge.onclick = function() {
	homepage.style.display = "none";
	bridge.style.display = "block";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	abridge.style.color = 'yellow';
}
hcontrolRoom.onclick = function() {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "block";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
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
hlocal.onclick = function() {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "block";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";
	
	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	alocal.style.color = 'yellow';
}
htelegraph.onclick = function() {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "block";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	atelegraph.style.color = 'yellow';
}

/*主界面淡入淡出*/
var hPic = document.getElementById('hpicture');
var hPiced = hPic.getElementsByTagName('img');

for(var i = 0; i < hPiced.length; i++) {

	hPiced[i].onmouseover = function() {
		startMove(this, 'opacity', 100);
	};
	hPiced[i].onmouseout = function() {
		startMove(this, 'opacity', 0);
	};
}

//工况切换
document.getElementById('conBefore').onclick=function(){//原始状况
	value16x = 0;
	value122x = 0;
	value3x = 0;
	value116x  = 0;
	value118x  = 0;
	valueMainx = 0;
	condition.style.display='none';
	// conditionX+=1;
	btelegraph1lever.style.top = '-330px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lhandle1x = 1;  //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0;  //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
    //机旁的手轮
	lwheelx1x = 0;//
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0;//
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor='yellow';
	bStandBy.innerHTML='Stand By'
	yd=0;
	ydx=0;
	rmp=0;
	rmpx=0;
	brmp=0;
	trmp=0;
	lrmp=0;
	LED()
	schematicX=0;
}
document.getElementById('conReadyC').onclick=function(){//备车完毕
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x  = 1;
	value118x  = 1;
	valueMainx = 1;
	condition.style.display='none';
	btelegraph1lever.style.top = '-330px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lhandle1x = 0;  //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0;  //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
    //机旁的手轮
	lwheelx1x = 0;//
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0;//
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor='yellow';
	bStandBy.innerHTML='Stand By'
	
	LED()
	controlLocation();
	schematicX=1;
	lwheelx1x=0;
	lprintPancel1(lwheelx1x);
}
document.getElementById('conOnSea').onclick=function(){//航行状态
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x  = 1;
	value118x  = 1;
	valueMainx = 1;
	condition.style.display='none';
	// conditionX+=1;
	btelegraph1lever.style.top = '-440px';
	LED()
	//rmpx=61;
	brmp=48 ;
	schematicX=1;
	lwheelx1x=0;
	lprintPancel1(lwheelx1x);
}