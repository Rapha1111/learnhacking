function Check(){
	var code=document.code.code.value;
	if (code=="JaiClique") {
	    alert("Bravo, vous avez réussi cette mission retournez au menu et choisissez la mission suivante");
      document.cookie = 'niveau=4; path=/;'
	} else { 
	    alert("Mauvais mot de passe"); 
	}
}