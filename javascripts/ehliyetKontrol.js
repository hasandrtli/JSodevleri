let yas = Number(prompt(`                   Merhaba, ehliyet kontrol paneline hoş geldiniz.\n\nLütfen yaşınızı giriniz:`));
if(yas<18){
    alert(`Yaşınız ${yas}. Ehliyet almaya uygun değilsiniz.`);
}
else if (yas>=18){
let ogrenimDurumu = prompt(`                                   Öğrenim durumunuz nedir?\n                          (ilköğretim, lise, yüksekokul, üniversite)`);
    if(ogrenimDurumu === "ilköğretim" ){
        alert(`Yaşınız '${yas}', öğrenim durumunuz '${ogrenimDurumu}'. Ehliyet almaya uygun değilsiniz.`);
    }
    else if(ogrenimDurumu === "lise"){
        alert(`Yaşınız '${yas}', öğrenim durumunuz '${ogrenimDurumu}'. Ehliyet almak için bir engel yok.`);
    }
    else if(ogrenimDurumu === "yüksekokul"){
        alert(`Yaşınız '${yas}', öğrenim durumunuz '${ogrenimDurumu}'. Ehliyet almak için bir engel yok.`);
    }
    else if(ogrenimDurumu === "üniversite"){
        alert(`Yaşınız '${yas}', öğrenim durumunuz '${ogrenimDurumu}'. Ehliyet almak için bir engel yok.`);
    }
    else {
        alert(`Öğrenim durumunuz: '${ogrenimDurumu}'. Lütfen bilgileri doğru giriniz.`)
    }
}