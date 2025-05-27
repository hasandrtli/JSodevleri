let kacUrun = Number(prompt(`Kaç adet ürün gireceksiniz?`));
let urunler = [];

for (i = 0; i < kacUrun; i++){
    let tempUrun = prompt(`${i+1}. ürün:`);
    let tempAdet = Number(prompt(`'${tempUrun}' adetini giriniz:`));
    let urunNesne = {
        isim: tempUrun, 
        adet: tempAdet
    };
    urunler.push(urunNesne);
}
let toplamAdet = 0;

for (i = 0; i < kacUrun; i++){
    toplamAdet += urunler[i].adet;
}
console.table(urunler);   
console.log(`Toplamda ${toplamAdet} ürün adeti bulunmaktadır.`);
console.log(`Toplamda ${kacUrun} çeşit ürün vardır.`)

