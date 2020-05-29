var slayd = document.getElementsByClassName("slayt");

var slaydSay = slayd.length; //Şəkillərin sayı

var slaydNo = 0;

slaydShow(slaydNo);

function Next() { //Şəkli İrəli dəyiş
    slaydNo++;
    slaydShow(slaydNo);
}

function Back() { //Şəkli Geri dəyiş
    slaydNo--;
    slaydShow(slaydNo);
    clearInterval(s);
}
var s = setInterval(function () { //Şəkli müəyyən vaxt intervalında dəyiş
    slaydNo++;
    slaydShow(slaydNo);
}, 2000);

function slaydShow(SlaytNumber) { // Şəkillər bu funksiyaya əsasən dəyişir
    slaydNo = SlaytNumber;

    if (SlaytNumber >= slaydSay) {
        slaydNo = 0;
    }
    if (SlaytNumber < 0) {
        slaydNo = SlaytNumber + 1;
    }


    for (i = 0; i < slaydSay; i++) { // Şəkillər bu funksiyaya əsasən gizlədilir
        slayd[i].style.display = "none";
    }
    slayd[slaydNo].style.display = "block"; // Şəkillər bu hissəyə görə tək tək görünür
}

// Drag and Drop 1 Start

var element = document.querySelector('#a');

element.addEventListener("mousedown", start); //MouseDown(Tut) + MouseUp(buraxmaq)=Click

function start() { //mousemove - boxu hərəkətə gətrir
    addEventListener("mousemove", move);
}

function move(e) {
    e = e || event;

    element.style.left = e.pageX - 50 + "px"; //box-un hərəkətə gətirilməsi üçün tutulduğu yer
    element.style.top = e.pageY - 50 + "px";
}

element.addEventListener("mouseup", function () {
    removeEventListener("mousemove", move);
})

// Drag and Drop 1 End

// Drag and Drop 2 Start  Bunu tam başa düşmədim 
function allowDrop(home) {
    home.preventDefault();
}

function drag(home) {
    home.dataTransfer.setData("text", home.target.id);
}

function drop(home) {
    home.preventDefault();
    var data = home.dataTransfer.getData("text");
    home.target.appendChild(document.getElementById(data));
}


// Drag and Drop 2 End