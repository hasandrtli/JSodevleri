alert('Merhaba, burcunuzu öğrenmek için ilerleyin.');

let kullaniciAy = prompt('Hangi ayda doğdunuz? ("ocak-şubat-mart" şeklinde)');
let kullaniciGun = Number(prompt('Hangi gün doğdunuz?("1-06-17-23" şeklinde)'));

if (kullaniciAy.toLowerCase() === "ocak") {

    if (kullaniciGun < 20 && kullaniciGun > 0) {
        alert('Merhaba, Oğlak\'sın.');
        console.log('Merhaba, Oğlak\'sın.');

    }
    else if (kullaniciGun < 32 && kullaniciGun > 19) {
        alert('Merhaba, Kova\'sın.');
        console.log('Merhaba, Kova\'sın.');
    }
}

else if (kullaniciAy.toLowerCase() === "şubat") {

    if (kullaniciGun < 19 && kullaniciGun > 0) {
        alert('Merhaba, Kova\'sın.');
        console.log('Merhaba, Kova\'sın.');

    }
    else if (kullaniciGun < 30 && kullaniciGun > 18) {
        alert('Merhaba, Balık\'sın.');
        console.log('Merhaba, Balık\'sın.');
    }
    
}

else if (kullaniciAy.toLowerCase() === "mart"){
    if (kullaniciGun < 21 && kullaniciGun > 0) {
        alert('Merhaba, Balık\'sın.');
        console.log('Merhaba, Balık\'sın.');
    
    }
    else if (kullaniciGun < 32 && kullaniciGun > 20) {
        alert('Merhaba, Koç\'sun.');
        console.log('Merhaba, Koç\'sun.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "nisan"){
    if (kullaniciGun < 20 && kullaniciGun > 0) {
        alert('Merhaba, Koç\'sun.');
        console.log('Merhaba, Koç\'sun.');
    
    }
    else if (kullaniciGun < 31 && kullaniciGun > 19) {
        alert('Merhaba, Boğa\'sın.');
        console.log('Merhaba, Boğa\'sın.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "mayıs"){
    if (kullaniciGun < 21 && kullaniciGun > 0) {
        alert('Merhaba, Boğa\'sın.');
        console.log('Merhaba, Boğa\'sın.');
    
    }
    else if (kullaniciGun < 32 && kullaniciGun > 20) {
        alert('Merhaba, İkizler\'sin.');
        console.log('Merhaba, İkizler\'sin.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "haziran"){
    if (kullaniciGun < 21 && kullaniciGun > 0) {
        alert('Merhaba, İkizler\'sin.');
        console.log('Merhaba, İkizler\'sin.');
    
    }
    else if (kullaniciGun < 31 && kullaniciGun > 20) {
        alert('Merhaba, Yengeç\'sin.');
        console.log('Merhaba, Yengeç\'sin.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "temmuz"){
    if (kullaniciGun < 23 && kullaniciGun > 0) {
        alert('Merhaba, Yengeç\'sin.');
        console.log('Merhaba, Yengeç\'sin.');
    
    }
    else if (kullaniciGun < 32 && kullaniciGun > 22) {
        alert('Merhaba, Aslan\'sın.');
        console.log('Merhaba, Aslan\'sın.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "ağustos"){
    if (kullaniciGun < 23 && kullaniciGun > 0) {
        alert('Merhaba, Aslan\'sın.');
        console.log('Merhaba, Aslan\'sın.');
    
    }
    else if (kullaniciGun < 32 && kullaniciGun > 22) {
        alert('Merhaba, Başak\'sın.');
        console.log('Merhaba, Başak\'sın.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "eylül"){
    if (kullaniciGun < 23 && kullaniciGun > 0) {
        alert('Merhaba, Başak\'sın.');
        console.log('Merhaba, Başak\'sın.');
        
    }
    else if (kullaniciGun < 31 && kullaniciGun > 22) {
        alert('Merhaba, Terazi\'sin.');
        console.log('Merhaba, Terazi\'sin.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "ekim"){
    if (kullaniciGun < 23 && kullaniciGun > 0) {
        alert('Merhaba, Terazi\'sin.');
        console.log('Merhaba, Terazi\'sin.');
    
    }
    else if (kullaniciGun < 32 && kullaniciGun > 22) {
        alert('Merhaba, Akrep\'sin.');
        console.log('Merhaba, Akrep\'sin.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "kasım"){
    if (kullaniciGun < 22 && kullaniciGun > 0) {
        alert('Merhaba, Akrep\'sin.');
        console.log('Merhaba, Akrep\'sin.');
    
    }
    else if (kullaniciGun < 31 && kullaniciGun > 21) {
        alert('Merhaba, Yay\'sın.');
        console.log('Merhaba, Yay\'sın.');
    }
    
}
else if (kullaniciAy.toLowerCase() === "aralık"){
    if (kullaniciGun < 22 && kullaniciGun > 0) {
        alert('Merhaba, Yay\'sın.');
        console.log('Merhaba, Yay\'sın.');
    
    }
    else if (kullaniciGun < 32 && kullaniciGun > 21) {
        alert('Merhaba, Oğlak\'sın.');
        console.log('Merhaba, Oğlak\'sın.');
    }
    
}
// console.log(kullaniciGun);