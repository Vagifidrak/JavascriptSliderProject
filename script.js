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


    for (i = 0; i < slaydSay; i++) { // Şəkillər bu funksiyaya əsasən görünür
        slayd[i].style.display = "none";
    }
    slayd[slaydNo].style.display = "block";
}