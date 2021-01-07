var n = 32;
var vp = 1.2;
var zhuansu = 31;
var zhuansulast = 31;
var nlast = 32;
var owf = 0; //柴油机的输出指示总功率
var owflast = 0; //上个采样周期的柴油机的输出指示总功率
var dowf = 0; //延时后的计算指示功率
var dowflast = 0; //上次采样周期延时后的计算指示功率
var pep = 100000; //排气管压力
var niujuk = 0;
var Mengine = 0;
var d1 = -0.005629;
var d2 = 1.015;
var d3 = -36.51;
var d4 = 533.5;
var ResShip = 0;
var shaftFriction = 0
var taod = 0;
var taoe = 0;
var dt = 0.2;
var index = 0;
var yd = 0;
var ydx = 0; //pid中代替yd

var rmpMaxli=120;//最大转速手动限制
var rmpMinli=20;//最低转速限制

var loadProgramMax=80;//负荷限制上限
var loadProgramMin=60;//负荷限制下限

function calculate() {
	//循环体内
	var Tprop = 0.00013 * (vp * vp * 84.64 + 6884536 * n * n); //有效推力
	var Mprop = 0.0001 * (vp * vp * 778.688 + 63337731 * n * n); //负载转矩

	if(vp >= 1) {
		ResShip = 163664 + vp * vp * 12878;
	} else if(vp < -1) {
		ResShip = -163664 - vp * vp * 12878;
	} else if((vp >= -1) && (vp < 0)) {
		ResShip = -1022905;
	} else {
		ResShip = 0;
	}

	if(n >= 7) {
		shaftFriction = n / 82 * 100000;
	} else if((n < 7) && (n > 0)) {
		shaftFriction = 1000000;
	} else if((n < 0) && (n > -7)) {
		shaftFriction = -1000000;
	} else if(n <= -7) {
		shaftFriction = -100000 * n / 82;
	} else {
		shaftFriction = 0;
	}

	if(n <= 8) {
		taod = 0.1;
		taoe = 0.1;
	} else {
		taod = 3 / n;
		taoe = 22.5 / n;
	}

	niujuk = 0.0000305 * owf + 0.14;
	if(niujuk >= 1) {
		niujuk = 1;
	}
	if(niujuk <= 0.2) {
		niujuk = 0.2;
	}

	if(n > 8) {
		if(owf >= 2500) {
			Mengine = niujuk * 91242 * owf / n;
		} else {
			Mengine = 0;
		}
	} else {
		Mengine = 0;
	}

	zhuansu = dt / (2 * taod + dt) * (n + nlast - (1 - 2 * taod / dt) * zhuansulast);
	nlast = n;
	zhuansulast = zhuansu;

	//判断油门速度（rmp）是由驾驶台还是集控室还是机旁控制
	if(lhandle1x % 2 == 0) {
		if(thandlex % 2 == 0) {
			//驾驶台控制
			ydx = brmp;
			if(CriticalRPMX==1){/**临界转速避让 */
				if(ydx<CriticalRPMmax.value&&ydx>CriticalRPMmin.value){
					  ydx=CriticalRPMmax.value
				}
			}
			pid();
		} else {
			//集控室控制
			ydx = trmp;
			if(CriticalRPMX==1){/** 临界转速避让*/
				if(ydx<CriticalRPMmax.value&&ydx>CriticalRPMmin.value){
					  ydx=CriticalRPMmax.value
				}
			}
			pid();
		}
	} else {
		//机旁控制，没有调速器
		console.log('当前为机旁控制，ydx为：',ydx)
		if(lrmpx>0){
			ydx = lrmp;
		}else{
			ydx=0
		}
		// ydx = lrmp;
	}

	//
	if(yd >= 20) {
		index = yd / 150;
	} else {
		index = 0;
	}

	aita = 0.526 * (1 - Math.exp(-14 * n / zhuansu)); //空气燃油质量比
	owf = 1190 * aita * index * zhuansu;
	dowf = dt / (2 * taod + 2 * taoe + dt) * (owf + owflast - (1 - (2 * taod + 2 * taoe) / dt) * dowflast);
	dowflast = dowf;
	owflast = owf;

	var delta_shipv = (Tprop - ResShip) / 85190300;
	vp = vp + delta_shipv * dt;
	deltarmp = (Mengine + 7500000 - shaftFriction - Mprop) / 1041403;
	n = n + deltarmp * dt;
	shipV = vp * 1.94;
	pep = pep + (0.005629 * yd * yd * yd - 1.015 * yd * yd + 36.51 * yd - 533.5);

	rmp = parseInt(n);

	//yd为实际燃油齿条刻度 ydx为车钟位置
	//燃油齿条刻度范围0-80
	if(ydx==0){
		yd=0
	}
	if(yd>=100){
		yd=100
	}
}

/*
  经过计算之后输出的转速为rpm
  ydx为车中设定的值，也就是设定转速
*/