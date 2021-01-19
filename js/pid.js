/*定义pid*/
var error, l_error, l_l_error; //定义误差，上次误差，上上次误差
var Kp, Ki, Kd; //定义pid参数
var setPoint; //设定值
var realPoint; //实际值

//自己设的
l_l_error=0;
l_error=0;
Kp=1;
Ki=0;
Kd=1;

function pid() {
	realPoint=rmp;
	if(ydx>rmpMaxli){
		setPoint=rmpMaxli;
	}else{
		setPoint=ydx;
	}
	error = setPoint - realPoint;
	var increment = Kp * (error - l_error) + Ki * error + Kd * (error - 2 * l_error + l_l_error);
	// increment=increment/2
	//console.log(setPoint + '  increment 1为：  '+ increment)
	//加减速限制环节
	if(loadProgramX==1){
		increment=increment/2
	}else{
		increment=increment
	}
	if(increment>=20){
		increment=20
	}
	if(increment<=-20){
		increment=-20
	}	
	l_l_error = l_error;
	l_error = error;
	yd = ydx+increment;
}