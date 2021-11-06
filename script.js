function getCookie(name){
     if(document.cookie.length == 0)
       return null;

     var regSepCookie = new RegExp('(; )', 'g');
     var cookies = document.cookie.split(regSepCookie);

     for(var i = 0; i < cookies.length; i++){
       var regInfo = new RegExp('=', 'g');
       var infos = cookies[i].split(regInfo);
       if(infos[0] == name){
         return unescape(infos[1]);
       }
     }
     return null;
   }
var lvl = getCookie("niveau")
if (lvl == null){document.cookie="niveau=1"}
if (lvl >= 2){document.getElementById("lvl1").disabled = true; document.getElementById("lvl1").value = "Mission terminée"; }
if (lvl >= 3){document.getElementById("lvl2").disabled = true; document.getElementById("lvl2").value = "Mission terminée"; }
if (lvl >= 4){document.getElementById("lvl3").disabled = true; document.getElementById("lvl3").value = "Mission terminée"; }
if (lvl >= 5){document.getElementById("lvl4").disabled = true; document.getElementById("lvl4").value = "Mission terminée"; }
if (lvl >= 6){document.getElementById("lvl5").disabled = true; document.getElementById("lvl5").value = "Mission terminée"; }
if (lvl >= 7){document.getElementById("lvl6").disabled = true; document.getElementById("lvl6").value = "Mission terminée"; }