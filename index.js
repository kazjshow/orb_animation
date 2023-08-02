


const navbarToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.nav-list');


navbarToggle.addEventListener('click', function() {
    navMenu.classList.toggle('js-active');
    navbarToggle.classList.toggle('js-active');
    document.body.classList.toggle('js-active');

});


// setTimeout(() => {
    
// }, timeout);



import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@3.0.0";


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let width = canvas.width;
let height = canvas.height;



// console.log(width,height)

// 円を描画する


// function orb() {
//     ctx.beginPath();
//     ctx.arc(width/2,height/2,100,0,2 * Math.PI);
//     ctx.closePath();
//     ctx.fillStyle = 'blue';
//     ctx.fill();
// }


// 動かす

// let y = Math.sin(Math.random()*10)*50;

// function orb() {
//     y += 0.1;
//     ctx.beginPath();
//     // ctx.arc(width/2,height/Math.random()*10,100,0,2 * Math.PI);
//     ctx.arc(width/2,y,100,0,2 * Math.PI);
//     ctx.closePath();
//     ctx.fillStyle = 'blue';
//     ctx.fill();
// }


// function draw() {
//     // 描画の前にキャンバスをクリアします
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     orb();
//     requestAnimationFrame(draw);
// }
// draw();




// 範囲を設定する


function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}


// function perlin2D(x, y) {
//     var xi = Math.floor(x);
//     var yi = Math.floor(y);
//     var xf = x - xi;
//     var yf = y - yi;

//     var n00 = dotGridGradient(xi, yi, x, y);
//     var n01 = dotGridGradient(xi, yi + 1, x, y);
//     var n10 = dotGridGradient(xi + 1, yi, x, y);
//     var n11 = dotGridGradient(xi + 1, yi + 1, x, y);

//     var u = fade(xf);
//     var v = fade(yf);

//     var x0Interp = lerp(n00, n10, u);
//     var x1Interp = lerp(n01, n11, u);

//     return lerp(x0Interp, x1Interp, v);
//     }

//     function dotGridGradient(xi, yi, x, y) {
//     var gradientVector = gradients[perm[(xi + perm[yi % 256]) % 256] % 8];
//     var dx = x - xi;
//     var dy = y - yi;

//     return gradientVector[0] * dx + gradientVector[1] * dy;
//     }

//     function fade(t) {
//     return t * t * t * (t * (t * 6 - 15) + 10);
//     }

//     function lerp(a, b, t) {
//     return a + t * (b - a);
//     }

//     var gradients = [
//     [1, 1],
//     [-1, 1],
//     [1, -1],
//     [-1, -1],
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1]
//     ];

//     var perm = new Uint8Array(256);
//     for (var i = 0; i < 256; i++) {
//     perm[i] = i;
//     }
//     shuffleArray(perm);

//     function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }





let seed = Math.random()*5000;
// = Math.random()*50000

function noise1D(x) {
    const floorX = Math.floor(x);
    const ceilX = floorX + 1;
    const s = smoothstep(x - floorX);

    const valueFloor = randomize(floorX);
    const valueCeil = randomize(ceilX);

    return lerp(s, valueFloor, valueCeil);
}

function randomize(x) {
    // var random = 2920.0 * Math.sin(x * 21942.0 + 171324.0);

    // const seed = 5678; // 乱数のシード値
    // const pseudoRandom = Math.sin(seed * x) * 43758.5453123;

    // let pseudoRandom = Math.sin(seed * x) * 43758.5453123;
    // let pseudoRandom = Math.sin(seed * x) * Math.cos(seed + x) * seed;
    let pseudoRandom = Math.sin(seed * x) * seed * seed * 3.5;


    // return fract(random);
    return fract(pseudoRandom);
}

function fract(x) {
    return x - Math.floor(x);
}

function lerp(t, a, b) {
    return a + t * (b - a);
}

function smoothstep(t) {
    return t * t * (3 - 2 * t);
}






// let x = Math.random()*width/4;
// let y = Math.random()*height/4 + height/2;

// ctx.beginPath();
// ctx.arc(x,y,100,0,2 * Math.PI);
// ctx.closePath();
// ctx.fillStyle = 'blue';
// ctx.fill();




// const inc = 0.004;
// let xoff = x;
// let yoff = y;

// function orb() {
//     let x = noise1D(xoff)*width/4;
//     let y = noise1D(yoff)*height/4 + height/2;

//     let r = map(noise1D(xoff), 0, 1, 0, width/4);
//     let hue = Math.random()*140+220;
// // console.log(r)
//     ctx.beginPath();
//     ctx.arc(x,y,radius,0,2 * Math.PI);
//     ctx.closePath();
//     ctx.fillStyle = `hsl(${hue}, 95%, 50%)`;
//     // ctx.fillStyle = color;
//     ctx.fill();
    
//     xoff += inc;
//     yoff += inc;
//     // x += inc;
// }


// function draw() {
//     // 描画の前にキャンバスをクリアします
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // orb();
//     requestAnimationFrame(draw);
// }
// // draw();



// 複数


const inc = 0.002;

// const rangeX = ;
// const rangeY = ;
class Orb{
    constructor(hue){
        // this.x = Math.random()*width;
        // this.y = Math.random()*height/3+height/2;

        
        this.x = Math.random()*width*0.4 + width*0.3;
        this.y = Math.random()*height;

        // let xoff = x;
        // let yoff = y;
        
        this.xoff = this.x;
        this.yoff = this.y;
        
        
        // * (max - min) + min
        this.radius = Math.random()*100+200;

        // this.hue = Math.random()*140+220;
        this.hue = hue
        // console.log(hue)
        
        // this.init();
        // this.update();
    }
    
    init(){
        
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = `hsla(${this.hue}, 95%, 50%, 0.7)`;
        // ctx.fillStyle = `hsl(200, 95%, 50%)`;
        // ctx.fillStyle = `hsl(${hue}, 95%, 50%)`;
        
        
        // ctx.fillStyle = color;
        
        ctx.filter = "blur(40px)";
        // ctx.globalAlpha = 1; 
        ctx.fill();
        
        // document.documentElement.style.setProperty("--hue", this.hue);
        
    }
    
    update(){
        
        this.init();
        
        // this.x = map(noise1D(this.xoff), 0, 1, 0, width/4);
        // this.y = map(noise1D(this.yoff), 0, 1, height - height/2, height);
        this.x = noise1D(this.xoff)*width*0.4 + width*0.3;
        this.y = noise1D(this.yoff)*height;


        // console.log(width,noise1D(this.xoff)*width)
        // this.x = noise1D(this.xoff)+this.x;
        // this.y = noise1D(this.yoff)+this.y;
        // console.log(this.x,this.y)

        this.xoff += inc;
        this.yoff += inc;

    }

}



// function setColor(params) {
//     let hue = Math.random()*140+220;
//     ctx.fillStyle = `hsl(${hue}, 95%, 50%)`;

// }


const orbs = [];
// const bg = new Orb();
// let orb;

// let hue = Math.floor(Math.random()*140+220);
let hueValue = Math.floor(Math.random()*100+200);
console.log(hueValue)

const setHue = [];
for (let i = 0; i < 3; i++) {
    hueValue += i%3+30;
    setHue.push(hueValue);
}

for (let i = 0; i < 3; i++) {
    // let step = 0;
    let hue = setHue[i%3];
    const orb = new Orb(hue);
    // orb.init(hue)
    orb.hue = hue;

    orbs.push(orb);

}

function setBg(hueValue) {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgb( 255 , 255 , 255)');
    gradient.addColorStop(1, `hsl(${hueValue}, 95%, 50%)`);
    ctx.filter = "blur(0px)";
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
}


// function  update(xoff, yoff) {
//     let x = noise1D(xoff)*width/4;
//     let y = noise1D(yoff)*height/4 + height/2;

//     xoff += inc;
//     yoff += inc;
//     console.log(inc, xoff,yoff)
// }


// function orb(xoff,yoff) {

//     let x = noise1D(xoff)*width/4;
//     let y = noise1D(yoff)*height/4 + height/2;

//     let radius = Math.random()*50+50;
//     let hue = Math.random()*140+220;


//     // let r = map(noise1D(xoff), 0, 1, 0, width/4);
//     // console.log(r)
//     ctx.beginPath();
//     ctx.arc(x,y,radius,0,2 * Math.PI);
//     ctx.closePath();
//     ctx.fillStyle = `hsl(${hue}, 95%, 50%)`;
//     // ctx.fillStyle = color;
//     ctx.fill();
    
//     xoff += inc;
//     yoff += inc;
// }

let a = 0;
window.addEventListener('scroll', ()=>{
    // console.log(window.scrollY* 0.001)
    a = window.scrollY* 0.001;
    document.body.style.backgroundColor = `rgba((43, 30, 42,${a})`;
    
});


console.log(document.body.style.background)

function draw() {
    // 描画の前にキャンバスをクリアします
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // setBg(hueValue);

    for (const orb of orbs) {
        orb.update();
        // console.log(this.xoff,this.yoff)

    }


    requestAnimationFrame(draw);
}
draw();





window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    width = canvas.width;
    height = canvas.height;
});

// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     width = canvas.width;
//     height = canvas.height;
//     // draw();
    
// }
// resizeCanvas();