// class Map {
//     constructor(xlen,ylen,size){//x轴个数，y轴个数，方块尺寸(px)
//         this.xlen = xlen;
//         this.ylen = ylen;
//         this.size = size;
//         this.list = [];//二维数组
//         this.context;//地图块
//     }
//     createMap(){
//         let canvas = document.createElement('canvas');
//         let body = document.getElementsByTagName('body')[0];
//         this.context = canvas.getContext('2d');
//         body.appendChild(canvas);
//         canvas.width = this.ylen * this.size;
//         canvas.height = this.xlen * this.size;
//         for(let i = 0;i<this.xlen;i++){
//             this.list[i] = [];
//             for(let j = 0;j<this.ylen;j++){
//                 this.list[i].push(0);
//             }
//         }
//     }
//     drawMap(){//绘制背景
//         for(let i = 0;i<this.xlen;i++){
//             for(let j = 0;j<this.ylen;j++){
//                 if(this.list[i][j] == 0){
//                     this.context.fillStyle = '#FF0000';
//                 }
//                 if(this.list[i][j] == 1){
//                     this.context.fillStyle = '#00FF00';
//                 }
//                 this.context.fillRect(i * this.size,j * this.size,this.size,this.size);
//             }
//         }
//     }
//     clearMap(){
//         for(let i = 0;i<this.xlen;i++){
//             for(let j = 0;j<this.ylen;j++){
//                 this.list[i][j] = 0;
//             }
//         }
//     }
//     drawPoint(xy){
//         this.clearMap();
//         if(xy){
//             console.log(xy);
//             for(let i in xy.x){
//                 for(let j in xy.y){
//                     this.list[i][j] = 1;//自身
//                 }
//             }
//         }
//         this.drawMap();
//     }
// }