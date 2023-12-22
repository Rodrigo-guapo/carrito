window.onload=function(){
    document.getElementById("logo").onmouseover=function(){
        alert("¡Compra en mi tienda ahora!");}

var btn1=document.getElementById("bto1");
btn2=document.getElementById("bto2");
btn3=document.getElementById("bto3");
btn4=document.getElementById("menuBtn");

function btnOnMouseOver(btn){
    btn.style.color="blue";
    btn.style.textShadow=".2rem .2rem .2rem #333";
}

function btnOnMouseDown(btn){
    btn.style.color="red";
    btn.style.textShadow=".2rem .2rem .2rem #000";
}

function btnOnMouseUp(btn){
    btn.style.color="green";
    btn.style.textShadow=".2rem .2rem .2rem #333";
}

function btnOnMouseOut(btn){
    btn.style.color="white";
    btn.style.textShadow="none";
}

btn1.addEventListener("mouseover", function(){btnOnMouseOver(bto1);});
btn1.addEventListener("mousedown", function(){btnOnMouseDown(bto1);});
btn1.addEventListener("mouseup", function(){btnOnMouseUp(bto1);});
btn1.addEventListener("mouseout", function(){btnOnMouseOut(bto1);});

osc=document.getElementById("oscuro");
btn1.addEventListener("click",shSearch);
osc.addEventListener("click",shSearch);

function shSearch(){
    if(osc.style.display==""||osc.style.display=="none"){
    osc.style.display="inline-block";
}else{
    osc.style.display="none";

}
    }
btn2.addEventListener("mouseover", function(){btnOnMouseOver(bto2);});
btn2.addEventListener("mousedown", function(){btnOnMouseDown(bto2);});
btn2.addEventListener("mouseup", function(){btnOnMouseUp(bto2);});
btn2.addEventListener("mouseout", function(){btnOnMouseOut(bto2);});

btn3.addEventListener("mouseover", function(){btnOnMouseOver(bto3);});
btn3.addEventListener("mousedown", function(){btnOnMouseDown(bto3);});
btn3.addEventListener("mouseup", function(){btnOnMouseUp(bto3);});
btn3.addEventListener("mouseout", function(){btnOnMouseOut(bto3);});

btn4.addEventListener("mouseover", function(){btnOnMouseOver(menuBtn);});
btn4.addEventListener("mousedown", function(){btnOnMouseDown(menuBtn);});
btn4.addEventListener("mouseup", function(){btnOnMouseUp(menuBtn);});
btn4.addEventListener("mouseout", function(){btnOnMouseOut(menuBtn);});


}
