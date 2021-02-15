var up1x = 0;
var down1x = 0;
var up2x = 0;
var down2x = 0;
var reg_num = 1;
var ydlim = 92;
var rmpxlim = 80;
var reg_value = document.getElementById('reg_value');

document.getElementById('up1').onmousedown=function(){
     $(this).css('opacity',1);
    //  up1x+=1;
     reg_num+=1;
     if(reg_num>=10){
         reg_num = 10;
         document.getElementById('reg_num').style.left = '135px';
     }
     document.getElementById('reg_num').innerHTML = parseInt(reg_num) ;
    //  if(reg_num ==2){
    //     reg_value.innerHTML =ydx;
    //     // console.log('value',ydx)
    //  }
    //  if(reg_num == 3){
    //      reg_value.innerHTML = rmpx;
    //  }
     
}
   
document.getElementById('up1').onmouseup=function(){
    $(this).css('opacity',0);
    // up1x+=1;
}

document.getElementById('down1').onmousedown=function(){
    $(this).css('opacity',1);
    // down1x+=1;
    reg_num-=1;
    document.getElementById('reg_num').style.left = '';

    if(reg_num<=1){
        reg_num = 1;
    }
    document.getElementById('reg_num').innerHTML = parseInt(reg_num) ;
    // if(reg_num ==2){
    //     reg_value.innerHTML =ydx;
    //     // console.log('value',ydx)
    //  }
    //  if(reg_num == 3){
    //      reg_value.innerHTML = rmpx;
    //  }
     
}

document.getElementById('down1').onmouseup=function(){
    $(this).css('opacity',0);
    // down1x+=1; 
}




document.getElementById('up2').onmousedown=function(){
    $(this).css('opacity',1);
    // up2x+=1;
    if(reg_num == 6){
        rmpxlim+=1;
        reg_value.innerHTML = rmpxlim;
    }
    if(reg_num == 7){
        ydlim+=1;
        reg_value.innerHTML = ydlim;
    }
}
  
document.getElementById('up2').onmouseup=function(){
    $(this).css('opacity',0);
//    up2x+=1;
}



document.getElementById('down2').onmousedown=function(){
   $(this).css('opacity',1);
//    down2x+=1;
    if(reg_num == 6){
    rmpxlim-=1;
    reg_value.innerHTML = rmpxlim;
    }
    if(reg_num == 7){
        ydlim-=1;
        reg_value.innerHTML = ydlim;
        }
}

document.getElementById('down2').onmouseup=function(){
   $(this).css('opacity',0);
//    down2x+=1; 
}






//number
document.getElementById('reg_num').innerHTML = parseInt(reg_num) ;



//value update
function reg_update(){
    if(reg_num == 1){
        reg_value.innerHTML = 0;
    }
    if(reg_num ==2){
        reg_value.innerHTML =ydx;
        // console.log('value',ydx)
    }
    if(reg_num == 3){
         reg_value.innerHTML = rmpx;
     }
    if(reg_num == 4){
        reg_value.innerHTML = 0;
    }
    if(reg_num == 5){
        if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && value118x % 2 == 1&& valueMainx%2==1){
            reg_value.innerHTML = 27;
        }
        else{
            reg_value.innerHTML = 0;
        }
        
    }
    if(reg_num == 6){

        reg_value.innerHTML = rmpxlim;
    }
    if(reg_num == 7){
        reg_value.innerHTML = ydlim;
    }
    if(reg_num == 8){
        reg_value.innerHTML = 0;
    }
    if(reg_num == 9){
        reg_value.innerHTML = 0;
    }
    if(reg_num == 10){
        reg_value.innerHTML = 0;
    }
     setTimeout(reg_update,500);
}
reg_update();