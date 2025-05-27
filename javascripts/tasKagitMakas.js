    // TAŞ KAĞIT MAKAS OYUNU.



    let kullaniciSkoru = 0;
    let bilgisayarSkoru = 0;
    
    while (true) {

        let kullaniciSecimi = prompt('Birini seçiniz:\nTaş, Kağıt, Makas.');
        let bilgisayarSecimi = ['Taş', 'Kağıt' , 'Makas'].at(Math.floor(Math.random() * 3));


        if(kullaniciSecimi.toLowerCase() === 'taş') {
        if (bilgisayarSecimi === 'Makas') {
            console.log('Tebrikler! Kazandın!!!');
            kullaniciSkoru+=1;
        }
        else if (bilgisayarSecimi === 'Kağıt'){
            console.log('Üzgünüm.. Kaybettin!');
            bilgisayarSkoru+=1;
            
        }
        else if (bilgisayarSecimi === 'Taş'){
            console.log('Tekrar deneyiniz, berabere.');
        }
        console.log(`Bilgisayarın seçimi: ${bilgisayarSecimi}`);
        console.log(`Sen:${kullaniciSkoru} - Bilgisayar:${bilgisayarSkoru}`);
    }
    
    
    
    else if(kullaniciSecimi.toLowerCase() === 'kağıt') {
        if (bilgisayarSecimi === 'Taş') {
            console.log('Tebrikler! Kazandın!!!')
            kullaniciSkoru+=1;
        }
        else if (bilgisayarSecimi === 'Makas'){
            console.log('Üzgünüm.. Kaybettin!');
            bilgisayarSkoru+=1;
        }
        else if (bilgisayarSecimi === 'Kağıt'){
            console.log('Tekrar deneyiniz, berabere.');
        }
        console.log(`Bilgisayarın seçimi: ${bilgisayarSecimi}`);
        console.log(`Sen:${kullaniciSkoru} - Bilgisayar:${bilgisayarSkoru}`);
    }
    
    
    
    else if(kullaniciSecimi.toLowerCase() === 'makas') {
        if (bilgisayarSecimi === 'Kağıt') {
            console.log('Tebrikler! Kazandın!!!')
            kullaniciSkoru+=1;
        }
        else if (bilgisayarSecimi === 'Taş'){
            console.log('Üzgünüm.. Kaybettin!');
            bilgisayarSkoru+=1;
        }
        else if (bilgisayarSecimi === 'Makas'){
            console.log('Tekrar deneyiniz, berabere.');
        }
        console.log(`Bilgisayarın seçimi: ${bilgisayarSecimi}`);
        console.log(`Sen:${kullaniciSkoru} - Bilgisayar:${bilgisayarSkoru}`);
    }
    
    else {
        console.log('Lütfen seçenekleri kontrol ediniz.');
    }

    let devam = prompt(`Devam etmek istiyor musunuz? (e/h)`);
    if (devam.toLowerCase() === "h"){
        break;
    }
}
    