let kacSayi = Number(prompt(`Kaç sayı gireceksiniz?:`));
let tekSayilar = []
let ciftSayilar = []
let tekSayilarToplami = 0
let ciftSayilarToplami = 0
for (i=0; i<kacSayi; i++){
let temp = Number(prompt((i+1) + `. sayıyı giriniz:`));
// temp değişkeni temporary, yani "geçici" 'den geliyor
if (temp%2 == 0){  
    ciftSayilar.push(temp);
}
else if (temp%2 ==1){
    tekSayilar.push(temp);
}
}
for(i=0;i<tekSayilar.length;i++){
tekSayilarToplami += tekSayilar[i];
}
for(i=0;i<ciftSayilar.length;i++){
ciftSayilarToplami += ciftSayilar[i];
}



console.log(`Tek olan sayılar=${tekSayilar}\nTek olan sayıların toplamı=${tekSayilarToplami}\n\nÇift olan sayılar:${ciftSayilar}\nÇift olan sayıların toplamı=${ciftSayilarToplami}`);
alert(`Tek olan sayılar=${tekSayilar}\nTek olan sayıların toplamı=${tekSayilarToplami}\n\nÇift olan sayılar:${ciftSayilar}\nÇift olan sayıların toplamı=${ciftSayilarToplami}`);