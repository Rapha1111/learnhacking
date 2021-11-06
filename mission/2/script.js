function Check(){
	var code=document.code.code.value;
	if (code=="TuEsAdmin") {
	    alert("Bravo, vous avez réussi cette mission retournez au menu et choisissez la mission suivante");
      document.cookie = 'niveau=3; path=/;'
	} else { 
	    alert("Mauvais mot de passe"); 
	}
}