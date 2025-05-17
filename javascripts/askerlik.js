let kullaniciAd = prompt('Adınız ve soy adınız nedir?');

let yas = prompt('Yaşınız kaç?');

let sex = prompt('Cinsiyetiniz ne?');

yas = Number(yas);


if(yas < 18 && yas > 0){
    alert('Henüz askerlik yaşın gelmedi.');
    console.log(`Henüz askerlik yaşın gelmedi.`);
}
else if(yas > 17){
    if(sex.toLowerCase() === "erkek" || sex.toLowerCase() === "e") {
        alert(`Sayın ${kullaniciAd}, yaşınız ${yas}. En kısa zamanda en yakın askerlik şubesine gitmeniz gerekmektedir.`);
        console.log(`Sayın ${kullaniciAd}, yaşınız ${yas}. En kısa zamanda en yakın askerlik şubesine gitmeniz gerekmektedir.`);
    }
    else if(sex.toLowerCase() === "kadın" || sex.toLowerCase() === "k") {
        alert(`Sayın ${kullaniciAd}, kadınlar askerlikten muaftır.`);
        console.log(`Sayın ${kullaniciAd}, kadınlar askerlikten muaftır.`);
    }
}
else{
    alert(`Sayın ${kullaniciAd}, ${yas} geçerli bir yaş değil. Lütfen geçerli bir yaş giriniz.`);
    console.log(`Sayın ${kullaniciAd}, ${yas} geçerli bir yaş değil. Lütfen geçerli bir yaş giriniz.`);
}