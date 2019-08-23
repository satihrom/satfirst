
/*
let line=document.querySelector('.line');
let slides=document.querySelectorAll('.slide');
console.log(slides);

let sliderWidth=document.querySelector('.slider').offsetWidth;
console.log(sliderWidth);
let widthArray = [0];
let lineWidth = 0;
let offset=0;
let step=0;
let tostop=0;



for (let i=0; i<slides.length; i++){
    widthArray.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
    
}
console.log(widthArray);
line.style.width = lineWidth+'px';


function slidestep(){
    tostop=lineWidth-sliderWidth-(offset+widthArray[step]);
    if (tostop>=0){offset=offset+widthArray[step];
    line.style.left=-offset+'px';
    }
    else{
        line.style.left=-(lineWidth-sliderWidth)+'px';
        offset=0;
        step=-1;
     }
     if (step+1 == slides.length){
         step=0;
         offset=0;
     }
     else{
         step++;
     }
    
}


/*создание замкнутого слайдера*//*
let slids=document.querySelectorAll('.slide-single');
console.log(slids);
let slid=[];
for(let i=0; i<slids.length; i++){
    slid[i]=slids[i].src;
    slids[i].remove();
}
console.log(slid);
let stp=0;
let oset=0;
function draw(){
    let img=document.createElement('img');
    img.src=slid[stp];
    img.classList.add('slide-single');
    img.style.left=oset*256 + 'px';
    document.querySelector('#sld').appendChild(img);
    if (stp+1 == slid.length){
        stp=0;
    }
    else{
        stp++;
    }
    oset=1;
}
function left(){
    sld.onclick=null;
    let slids2=document.querySelectorAll('.slide-single');
    let slid2=0;
    for (let i=0; i<slids2.length; i++){
        slids2[i].style.left=slid2*256-256 +'px';
        slid2++;
    }
    setTimeout(function(){
        slids2[0].remove();
        draw();
        sld.onclick=left;
    }, 1000);
}
draw();draw();
sld.onclick=left;
/*создание анимационного меню*/
document.querySelector('.hamburg').addEventListener('click',function(e){
    e.preventDefault();
   // this.classList.toggle('is-active');
   if (this.classList.contains('is-active')){
    this.classList.remove('is-active');
    document.querySelector('menu').classList.remove('nav-active');
    document.body.classList.remove('body-active');
   }
   else{
       this.classList.add('is-active');
       document.querySelector('menu').classList.add('nav-active');
       document.body.classList.add('body-active');
   }
})
