
$(document).ready(function() {
  $("#kota").select2({
    placeholder: "Ketik atau pilih kota",
    allowClear: true
  });
});


function setBackgroundByTime() {
  let jam = new Date().getHours();
  let body = document.body;

  if (jam >= 0 && jam < 10) {
    body.className = "pagi";   
  } else if (jam >= 10 && jam < 17) {
    body.className = "siang";  
  } else {
    body.className = "malam";  
  }

  console.log("Sekarang jam: " , jam,  "| class body: ", body.className);
}


setBackgroundByTime();



setInterval(setBackgroundByTime, 60000);
