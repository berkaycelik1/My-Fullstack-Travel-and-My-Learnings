// 1. figlet paketimiz zaten duruyor
const figlet = require("figlet");

// 2. Yeni indirdiğimiz renk paketini (chalk) projeye dahil ediyoruz
const chalk = require("chalk");

figlet("Berkay !", function (hata, sekilliYazi) {
    if (hata) {
        console.log("Bir şeyler ters gitti...");
        return;
    }
    
    // 3. İŞTE SİHİR BURADA! 
    // Siyah beyaz yazıyı önce yeşile (green), sonra kalın fonta (bold) boyuyoruz:
    console.log(chalk.green.bold(sekilliYazi));
    
    // 4. Altına biraz daha şov yapalım:
    console.log(chalk.cyan("Node.js ve NPM dünyasına resmen giriş yaptın!"));
    console.log(chalk.bgRed.white.bold(" SIRADAKİ HEDEF: FULL STACK! "));
});