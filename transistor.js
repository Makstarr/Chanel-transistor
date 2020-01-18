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
      wires = document.getElementById('wires').style.color,//'#333',
      border = document.getElementById('border').style.color,//'#333',
      text = document.getElementById('text').style.color,//"#888",
      vahAxes = document.getElementById('vahAxes').style.color,
      vahLine = document.getElementById('vahLine').style.color,
      p_type = document.getElementById('p_type').style.color,
      p_type_text = document.getElementById('p_type_text').style.color,
      n_type = document.getElementById('n_type').style.color,
      n_type_text = document.getElementById('n_type_text').style.color,
      opz = document.getElementById('opz').style.color,
      opz_text = document.getElementById('opz_text').style.color;


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

// Рисует p_type
ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(w-200,100);
    ctx.lineTo(w-200,h);
    ctx.lineTo(100,h);
    ctx.closePath()
    ctx.strokeStyle = p_type_text;
    ctx.fillStyle = p_type;
    ctx.fill();
// Рисует n-type
ctx.beginPath();
    ctx.moveTo(100,200);
    ctx.lineTo(w-200,200);
    ctx.lineTo(w-200,h);
    ctx.lineTo(100,h);
    ctx.closePath()
    ctx.lineWidth ="3";
    ctx.strokeStyle = n_type_text;
    ctx.fillStyle = n_type;
    ctx.fill();
// Рисует опз
ctx.beginPath();
    ctx.moveTo(100,200);
    ctx.lineTo(w-200,200);
    ctx.lineTo(w-200, 245-(-Ugs-Uds*0.9));
    ctx.lineTo(100,245-(-Ugs-Uds/4));
    ctx.closePath()
    ctx.lineWidth ="3";
    ctx.strokeStyle = opz;
    ctx.fillStyle = opz;
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
    ctx.fillStyle = n_type_text;
    ctx.font= "20pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("n-канал", 120,280-(-Ugs-Uds*0.6))
  ctx.beginPath();
    ctx.fillStyle = p_type_text;
    ctx.font= "18pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("p+", 120,160)
  ctx.beginPath();
    ctx.fillStyle = opz_text;
    ctx.font= "18pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("ОПЗ", w-280,230-(-Ugs/3-Uds*0.5))
  ctx.beginPath();
    ctx.fillStyle = text;
    ctx.font= "18pt 'Open Sans', Arial, sans-serif"
    ctx.fillText("З (G)", 435,90)
    ctx.fillText("И (S)", 35,290)
    ctx.fillText("С (D)", w-170,290)
  ctx.beginPath();
      ctx.moveTo(100,100);
      ctx.lineTo(w-200,100);
      ctx.lineTo(w-200,h);
      ctx.lineTo(100,h);
      ctx.closePath()
      ctx.lineWidth ="6";
      ctx.strokeStyle = border;
      ctx.stroke();

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
    c.strokeStyle = n_type_text;
    c.lineWidth =0.3
    c.font= "18pt 'Times new roman', Arial, sans-serif"
    if (s1 == 0){
      c.fillText("Uзс = 0", 425,(-Math.log(455-20)*(60-(s1*60/250)))+450)
      c.strokeText("Uзс = 0", 425,(-Math.log(455-20)*(60-(s1*60/250)))+450)
    }
    else if (s1 >= 245 ){
      c.fillText("Uзс = Uотс", 380,(-Math.log(455-20)*(60-(s1*60/250)))+450)
      c.strokeText("Uзс = Uотс", 380,(-Math.log(455-20)*(60-(s1*60/250)))+450)

    }
    else{
      c.fillText("Uзс < 0", 425,(-Math.log(455-20)*(60-(s1*60/250)))+450)
      c.strokeText("Uзс < 0", 425,(-Math.log(455-20)*(60-(s1*60/250)))+450);
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
})
slider2.addEventListener('input', () => {
     //Анимированные графики запускаются
      VoltAmper(slider1.value,slider2.value);
      Semiconductor(slider1.value,slider2.value);})
}
