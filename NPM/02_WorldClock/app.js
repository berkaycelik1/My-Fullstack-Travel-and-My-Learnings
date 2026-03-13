MicroModal.init();

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

const saatKutusu = document.getElementById("saat-kutusu");
const ulkeSecimi = document.getElementById("ulke-secimi"); 

let hedefUlke = "Europe/Istanbul";

ulkeSecimi.addEventListener("change", function(olay) {
    hedefUlke = olay.target.value; 
});


function saatiGuncelle() {
   
    const suAn = dayjs().tz(hedefUlke).format("HH:mm:ss");
    saatKutusu.textContent = suAn;
}


saatiGuncelle();
setInterval(saatiGuncelle, 1000);