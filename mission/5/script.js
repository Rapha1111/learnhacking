function Check(){
	var code=document.code.code.value;
	if (code=="AZERTY123456") {
	    alert("Bravo, vous avez réussi cette mission retournez au menu et choisissez la mission suivante");
      document.cookie = 'niveau=6; path=/;'
	} else { 
	    alert("Mauvais mot de passe"); 
	}
}