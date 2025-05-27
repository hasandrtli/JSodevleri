let kacAd = Number(prompt(`Kaç adet isim gireceksiniz?:`));
let isimler = [];

for(i = 0; i < kacAd; i++){
let isim = prompt(`Girmek istediğiniz ${i+1}. ismi giriniz:`);
    isimler.push(isim);
}
isimler.sort();
console.log(`Girilen isimlerin alfabetik sıralanmış hali:${isimler}`);