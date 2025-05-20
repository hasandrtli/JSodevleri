alert("Giriş yapmadan önce kayıt olmanız gerekmektedir.");
let kullaniciAdi = prompt('Lütfen kullanıcı adını giriniz.');
let parola = prompt('Güvenli olacak bir parola giriniz.');
let parolaDogrula = prompt('Parolayı doğrulamak için tekrar giriniz.');
if (parola !== parolaDogrula) {
    alert('Parolalar uyuşmuyor. Sistemi yeniden başlatmanız gerekmektedir.')
}
else {
    alert('Tebrikler. Kaydınız oluşturuldu.');
    let kullaniciGirisAdi = prompt('Kullanıcı adınız:');
    let parolaGiris = prompt(`Parola:`);

    if (parola !== parolaGiris) {
        alert('Kullanıcı adı veya parola doğru değil.');
    }
    let eveyah = prompt('Tekrar denemek ister misin? (E/H)');
    if (eveyah.toLowerCase() === "E") {
        kullaniciGirisAdi = prompt('Kullanıcı adınız:');
        parolaGiris = prompt('Parola:')
        if (kullaniciAdi === kullaniciGirisAdi) {
            if (parola === parolaGiris) {
                alert('tebrikler giriş yapıldı!');
            }
        }
    }
    else if (eveyah.toLowerCase() === "H") {
        alert("Sistemden çıkılıyor.")
    }
}