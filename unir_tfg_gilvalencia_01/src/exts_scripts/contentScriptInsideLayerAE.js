//LAYER SCRIPT - SALTO DE LÍNEAS EN CAPAS DE TEXTO NATIVAS DEL SOFTWARE AFTER EFFECTS

txt = text.sourceText;

n = 18;
outStr = "";
newLine = "";
splt = txt.split(" ");
for (i = 0; i < splt.length; i++){
	if ((newLine + " " + splt[i]).length > n){
		if (outStr != "") outStr += "\r";
		outStr += newLine;
		newLine = splt[i];
	}
	else{
		if (newLine != "") newLine += " ";
		newLine += splt[i];
	}
}

if (newLine != ""){
	if (outStr != "") outStr += "\r";
	outStr += newLine;
}
outStr;

//COMMAND SHELL WINDOWS EXECUTE SCRIPT

C:\Program Files\Adobe\Adobe After Effects 2022\Support Files>afterfx -noui -r "C:\Users\gilva\Projects\unir_tfg_gilvalencia_01\src\exts_scripts\script_powerMarkt.js"