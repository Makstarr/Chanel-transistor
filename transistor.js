/*   Анимация зонной диаграммы и ВАХ
     p-n перехода при прямом и обратном напряжении
     Напряжение изменяется слайдером
     Носители задаются в рандомных координатах с выбранными границами
     Движение носителей зависит от приложенного напряжения
     Все построения сделаны на canvas

     Линии ОПЗ рисуются в функции Semiconductor и закомментированы
*/

console.log('start');
window.onload = function(){

// Цвета для canvas берутся из html документа (можно задать цвета этим переменным)
const vahPointFill = document.getElementById('vahPointFill').style.color,
      vahPointBorder = document.getElementById('vahPointBorder').style.color,
      wires = '#333',
      border ='#333',
       text = "#888",
      vahAxes = document.getElementById('vahAxes').style.color,
      vahLine = document.getElementById('vahLine').style.color,
      holes_pp = document.getElementById('holes_pp').style.color,
      holes_pp_border = document.getElementById('holes_pp_border').style.color,
      holes_pn = document.getElementById('holes_pn').style.color,
      holes_pn_border = document.getElementById('holes_pn_border').style.color,
      electrons_nn = document.getElementById('electrons_nn').style.color,
      electrons_nn_border = document.getElementById('electrons_nn_border').style.color,
      electrons_np = document.getElementById('electrons_np').style.color,
      electrons_np_border = document.getElementById('electrons_np_border').style.color,
      opz_lines = document.getElementById('opz_lines').style.color,
      fermi_level = document.getElementById('fermi_level').style.color,
      Eg_border = document.getElementById('Eg_border').style.color,
      Eg_fill = document.getElementById('Eg_fill').style.color;



// Рисует ВАХ s=slider.value
function VoltAmper(Ugs)
{/*
    var canv = document.getElementById('canvas2');
    var c = canv.getContext('2d');
    c.clearRect(0,0,canv.width,canv.height)

    //Линия y=exp(x) задается
    c.beginPath();
    for(let i =0; i<150*2.5-200;i++)
    {
        let x=i;
        let y=-Math.exp((i-150)/8)+370;
        c.moveTo(x,y);
        x++;
        y=-Math.exp((x-150)/8)+370;
        c.lineTo(x,y);
    }
    for(let i =150*2.5-200; i<canv.width;i++)
    {
        let x=i;
        let y=-Math.exp((i-200)/10)+350;
        c.moveTo(x,y);
        x++;
        y=-Math.exp((x-200)/10)+350;
        c.lineTo(x,y);
    }
    c.lineWidth ="5"
    c.strokeStyle=vahLine;
    c.stroke();

    //Координатные оси рисуются
    c.beginPath();
    let ys = 350;
    c.moveTo(150*2.5-200,   0)
    c.lineTo(150*2.5-200, canv.height)
    c.moveTo(0,   ys);
    c.lineTo(canv.width, ys);
    c.lineWidth ="5"
    c.strokeStyle=vahAxes;
    c.stroke();

    // Анимированная точка
    c.beginPath();
    if(s>=150)
    {
        let xs = -(-s)*2.5-200
        var pi = Math.PI;
        var exp = - Math.exp((xs-200)/10)+350;
        c.arc(xs,exp,10,0, 2*pi,true)
    }
    else
    {
        let xs = -(-s)*2.5-200
        var pi = Math.PI;
        var exp = - Math.exp((xs-150)/8)+370;
        c.arc(xs,exp,10,0, 2*pi,true)
    }
    //Анимированная точка на графике цвет и заполнение
    c.fillStyle = vahPointFill;
    c.strokeStyle = vahPointBorder;
    c.lineWidth = 1;
    c.fill();
    c.stroke();*/
}


// Рисует злнную картинку s=slider.value
function Semiconductor(Ugs,Uds){
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height-3;

ctx.beginPath();
    ctx.arc(w/2-100,100, 10, 0,2*Math.PI);
    ctx.arc(w-200,(h+100)/2, 10, 0,2*Math.PI);
    ctx.arc(100,(h+100)/2, 10, 0,2*Math.PI);
    ctx.fillStyle = wires;
    ctx.fill();
ctx.beginPath();
    ctx.arc(w/2-100,0, 13, 0,2*Math.PI);
    ctx.arc(w-100,0, 13, 0,2*Math.PI);
    ctx.fillStyle = wires;
    ctx.fill();

// Рисует p-type
ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(w-200,100);
    ctx.lineTo(w-200,h);
    ctx.lineTo(100,h);
    ctx.closePath()
    ctx.strokeStyle = holes_pp_border;
    ctx.fillStyle = holes_pp;
    ctx.fill();
// Рисует n-type
ctx.beginPath();
    ctx.moveTo(100,190);
    ctx.lineTo(w-200,190);
    ctx.lineTo(w-200,h);
    ctx.lineTo(100,h);
    ctx.closePath()
    ctx.lineWidth ="3";
    ctx.strokeStyle = electrons_nn_border;
    ctx.fillStyle = electrons_nn;
    ctx.fill();
// Рисует опз
ctx.beginPath();
    ctx.moveTo(100,190);
    ctx.lineTo(w-200,190);
    ctx.lineTo(w-200, 210-(-Ugs-Uds*0.9));
    ctx.lineTo(100,210-(-Ugs-Uds/4));
    ctx.closePath()
    ctx.lineWidth ="3";
    ctx.strokeStyle = 'rgba(250,	235,	216, 0.6) ';
    ctx.fillStyle =  ' rgba(250,	235,	216, 1) ';
    ctx.fill();
    //ctx.stroke();
ctx.beginPath();
    ctx.moveTo(100,(h+100)/2)
    ctx.lineTo(30,(h+100)/2);
    ctx.lineTo(30,(h+100)/2+100);
    ctx.lineWidth ="4";
    ctx.strokeStyle = wires;
    ctx.stroke();
for (i=5; i<=15; i+=5)
{
    ctx.beginPath();
    ctx.moveTo(30+30-i*1.3,(h+100)/2+100+(i-5)*2.5);
    ctx.lineTo(30-30+i*1.3,(h+100)/2+100+(i-5)*2.5);
    ctx.lineWidth ="4";
    ctx.strokeStyle = wires;
    ctx.stroke();
}
ctx.beginPath();
    ctx.moveTo(w/2-100,100)
    ctx.lineTo(w/2-100,-10);
    ctx.lineWidth ="4";
    ctx.strokeStyle = wires;
    ctx.stroke();
ctx.beginPath();
    ctx.moveTo(w-200,(h+100)/2)
    ctx.lineTo(w-100,(h+100)/2);
    ctx.lineTo(w-100,-10);
    ctx.lineWidth ="4";
    ctx.strokeStyle = wires;
    ctx.stroke();
ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(w-200,100);
    ctx.lineTo(w-200,h);
    ctx.lineTo(100,h);
    ctx.closePath()
    ctx.lineWidth ="6";
    ctx.strokeStyle = border;
    ctx.stroke();
  ctx.beginPath();
    ctx.fillStyle = "#454545";
    ctx.font= "20pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("n-канал", 120,240-(-Ugs-Uds*0.9))
  ctx.beginPath();
    ctx.fillStyle = 'hotpink';
    ctx.font= "18pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("p+", 120,150)
  ctx.beginPath();
    ctx.fillStyle = 'rgba(204,189,	170,1) ';
    ctx.font= "18pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("ОПЗ", w-280,210-(-Ugs/3-Uds*0.5))
  ctx.beginPath();
    ctx.fillStyle = text;
    ctx.font= "18pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("З (G)", 435,90)
    ctx.fillText("И (S)", 35,290)
    ctx.fillText("С (D)", w-170,290)
    //Задает и рисует уровень ферми

}
function VoltAmper(s1,s2)
{
    var canv = document.getElementById('canvas2');
    var c = canv.getContext('2d');
    c.clearRect(0,0,canv.width,canv.height)
    //Линия y=exp(x) задается
    c.beginPath();
    for(let i = 0; i<50;i+=1)
    {
        k = 10
        let x = i
        var y = (-Math.log(x-20)*(60-(s1*60/250)))+480
        c.moveTo(x,y)
        k = 10
        x+=1
        y = (-Math.log(x-20)*(60-(s1*60/250)))+480
        c.lineTo(x,y)
        c.lineWidth ="5"
        c.strokeStyle=vahLine;
        c.stroke();
    }
    for(let i = 50; i<200;i+=10)
    {
        k = 10
        let x = i
         y = (-Math.log(x-20)*(60-(s1*60/250)))+480
        c.moveTo(x,y)
        k = 10
        x+=10
        y = (-Math.log(x-20)*(60-(s1*60/250)))+480
        c.lineTo(x,y)
        c.lineWidth ="5"
        c.strokeStyle=vahLine;
        c.stroke();
    }
    for(let i = 200; i<500;i+=20)
    {
        k = 10
        let x = i
         y = (-Math.log(x-20)*(60-(s1*60/250)))+480
        c.moveTo(x,y)
        k = 10
        x+=20
        y = (-Math.log(x-20)*(60-(s1*60/250)))+480
        c.lineTo(x,y)
        c.lineWidth ="5"
        c.strokeStyle=vahLine;
        c.stroke();
    }
    c.fillStyle = vahLine;
    c.font= "18pt 'Times new roman', Arial, sans-serif"
    if (s1 == 0){
      c.fillText("Uзс = 0", 425,(-Math.log(455-20)*(60-(s1*60/250)))+450)
    }
    else if (s1 >= 245 ){
      c.fillText("Uзс = Uотс", 380,(-Math.log(455-20)*(60-(s1*60/250)))+450)
    }
    else{
      c.fillText("Uзс < 0", 425,(-Math.log(455-20)*(60-(s1*60/250)))+450)
    }
    c.fill();
    //Координатные оси рисуются
    c.beginPath();
    let ys = 350;
    c.moveTo(18,   0)
    c.lineTo(18, canv.height)
    c.moveTo(0,   canv.height-20);
    c.lineTo(canv.width, canv.height-20);
    c.lineWidth ="3"
    c.strokeStyle=vahAxes;
    c.stroke();

    // Анимированная точка
    c.beginPath();
        let x = -(-s2*2)+21
        var pi = Math.PI;
         y = (-Math.log(x-20)*(60-(s1*60/250)))+480
        c.arc(x,y,10,0, 2*pi,true)
    //Анимированная точка на графике цвет и заполнение
    c.fillStyle = vahPointFill;
    c.strokeStyle = vahPointBorder;
    c.lineWidth = 1;
    c.fill();
    c.stroke();
}

// Вызов функций для прорисовки до использования слайдера
VoltAmper(document.querySelector('#input-left').value,document.querySelector('#input-right').value);
Semiconductor(document.querySelector('#input-left').value,document.querySelector('#input-right').value);

//Вывод значений напряжения и вида смещения
const slider1 = document.getElementById('input-left'),
      slider2 = document.getElementById('input-right')

//debug
if(slider1 == null){alert("Slider is not found. QuerySelector is supported on Firefox 3.1+, IE8+ (only in IE8 standards mode), and Safari 3.1+ browsers. Use document.getElementById('input') instead. line 26-29 925-927.")}
console.log(slider2.value)

// Включается слайдер
slider1.addEventListener('input', () => {
     //Анимированные графики запускаются
      VoltAmper(slider1.value,slider2.value);
      Semiconductor(slider1.value,slider2.value);
      console.log(slider1.value)
})
slider2.addEventListener('input', () => {
     //Анимированные графики запускаются
      VoltAmper(slider1.value,slider2.value);
      Semiconductor(slider1.value,slider2.value);
      console.log(slider1.value)
      text.textContext = slider1.value
})
}
