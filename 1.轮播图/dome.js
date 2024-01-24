var img_num = 3,
    turn = 0;  //标记图片的序号

/*
自动播放函数go()
开始函数start()

*/
function main() {
    
    
    var element = document.getElementsByClassName("img");
    // console.log("zzz");
    // 自动播放图片,将定时器放在函数里，以便于暂停后重启
    var timer;
    clock();
    function clock(){
        timer = setInterval(function () {
            if (turn > element.length - 1) {
                turn = 0;
            }
            element[0].style.opacity = '0';
            element[1].style.opacity = '0';
            element[2].style.opacity = '0';
            element[turn++].style.opacity = '1';
        }, 3000)
    }

    // 设置左箭头点击事件
    document.getElementsByClassName("left_turn")[0].onclick = function () {
        clearInterval(timer);  //清除回调的计时
        element[0].style.opacity = '0';
        element[1].style.opacity = '0';
        element[2].style.opacity = '0';
        if (turn == 0) {      //判断是第几张
            turn = 2;         //若是第一张图，则左翻直接展示最后一张图
        } else {
            turn--;           
        }

        element[turn].style.opacity = '1';
        clock();               //启动回调的计时
    }
    // 设置右箭头点击事件
    document.getElementsByClassName("right_turn")[0].onclick = function () {
        clearInterval(timer);

        element[0].style.opacity = '0';
        element[1].style.opacity = '0';
        element[2].style.opacity = '0';
        if (turn == 2) {
            turn = 0;
        } else {
            turn++;
        }
        element[turn].style.opacity = '1';
        console.log(turn);
        clock();
    }
    // 设置小圆点跳转事件
    var circle = document.getElementsByTagName("li"); //获取到的不是数组
    circle = Array.prototype.slice.call(circle);      //转化为数组才能使用forEach

    /*法一*/ 
    circle.forEach(function(li,index){
        li.onclick = function(){ 
        clearInterval(timer);
        element[0].style.opacity = '0';
        element[1].style.opacity = '0';
        element[2].style.opacity = '0';
        element[index].style.opacity = '1';
        turn = index;                        //告诉回调函数现在是第几张图片，以防乱序
        clock();
        }
        
    });


    /*法二*/ 
    // circle[0].onclick = function(){      //为第一个按钮绑定事件

        // clearInterval(timer);
        // element[0].style.opacity = '0';
        // element[1].style.opacity = '0';
        // element[2].style.opacity = '0';
        // element[0].style.opacity = '1';
        // turn = 0;                        //告诉回调函数现在是第几张图片，以防乱序
        // clock();
    // }
    // circle[1].onclick = function(){
    //     clearInterval(timer);
    //     element[0].style.opacity = '0';
    //     element[1].style.opacity = '0';
    //     element[2].style.opacity = '0';
    //     element[1].style.opacity = '1';
    //     turn = 1;
    //     clock();
    // }
    // circle[2].onclick = function(){
    //     clearInterval(timer);
    //     element[0].style.opacity = '0';
    //     element[1].style.opacity = '0';
    //     element[2].style.opacity = '0';
    //     element[2].style.opacity = '1';
    //     turn = 2;
    //     clock();
    // }

}

   
    
// void Start()
// {

// }
main();