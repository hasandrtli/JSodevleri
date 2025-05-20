let islem = prompt('Lütfen işlem türünü seçiniz:\n (+, -, *, /)');
let birinciSayi = Number(prompt('Lütfen ilk sayıyı giriniz:'));
let ikinciSayi = Number(prompt('Lütfen ikinci sayıyı giriniz:'));
if(islem === "+"){
    console.log(`Verilen sayıların toplamı: ${birinciSayi+ikinciSayi}`);
}
else if(islem === "-"){
    if (birinciSayi>=ikinciSayi){
        console.log(`Verilen sayıların farkı: ${birinciSayi-ikinciSayi}`);
    }
    else{
        console.log(`Verilen sayıların farkı: ${ikinciSayi-birinciSayi}`);
    }
}
else if(islem === "*"){
    console.log(`Verilen sayıların çarpımı: ${birinciSayi*ikinciSayi}`);
}
else if(islem === "/"){
    console.log(`Verilen sayıların bölümü: ${(birinciSayi/ikinciSayi).toFixed(3)}`);
}