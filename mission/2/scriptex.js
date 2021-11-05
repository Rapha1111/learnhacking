function Check(){
	var code=document.code.code.value;
  var levraicode="MetMoiAdmin"
	if (code==levraicode) {
	    alert("Bravo, vous etes admin le code pour valider cette mission est TuEsAdmin");
	} else { 
	    f = document.getElementById("f")
      f.innerHTML="code faux"
	}
}