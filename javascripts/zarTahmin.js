alert(`Zar tahmin oyununa hoş geldiniz.`);
let zar = Math.floor(Math.random() * 6) + 1;
let kullaniciTahmini = Number(prompt('Lütfen tahmininizi giriniz:'));
if(kullaniciTahmini === zar){
    alert(`Tebrikler! Tahmininiz doğru. Tahmin: ${kullaniciTahmini} Rastgele zar değeri: ${zar}`);
}
else if(kullaniciTahmini !== zar){
    alert(`Maalesef... Tahmininiz yanlış. Tahmin: ${kullaniciTahmini} Rastgele zar değeri: ${zar}`);
}