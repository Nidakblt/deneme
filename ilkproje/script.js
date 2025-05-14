function ismiGuncelle() {
    var isim = document.getElementById("ahmetisim");
    console.log(isim.innerHTML)
    if (isim.innerHTML=== "Ahmet"){
        isim.innerHTML="Mehmet";
    }
    else {
        isim.innerHTML="Ahmet";
    }
}