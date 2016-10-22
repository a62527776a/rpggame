// class Person {
//     constructor(x,y){//坐标初始值
//         this.direction = '';
//         this.x = x;
//         this.y = y;
//         this.list = [];
//     }
//     dir_fun(keyCode){//执行keyDown方法传keyCode调用获取方向值
//         switch(keyCode){
//             case 38:
//                 this.direction = 'up';
//                 break;
//             case 40:
//                 this.direction = 'down';
//                 break;
//             case 37:
//                 this.direction = 'left';
//                 break;
//             case 39:
//                 this.direction = 'right';
//                 break;
//             default:
//                 break;
//         }
//         return this.direction;
//     }
//     coordinate(direction){//传方向改变坐标值
//         switch(direction){
//             case 'left':
//                 this.x--;
//                 break;
//             case 'right':
//                 this.x++;
//                 break;
//             case 'up':
//                 this.y--;
//                 break;
//             case 'down':
//                 this.y++;
//                 break;
//             default:
//                 break;
//         }
//         let xy = {
//             x:this.x,
//             y:this.y
//         }
//         return xy;
//     }
// }

// class Snake extends Person {//贪吃蛇
//     move(){
//         console.log(this.list);
//         let xy_list = {
//             x:[0],
//             y:[0]
//         }
//         return xy_list;
//     }
// }