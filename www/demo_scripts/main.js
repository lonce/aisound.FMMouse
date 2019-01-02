
// get the factory for the sound you want (see aisound.cloud to explore)
import sndFactory from 'https://aisound.cloud/aiSounds/fm2.js'
// create an instance of the sound
var snd;
sndFactory().then((newsnd) => {snd=newsnd; showInfo(snd);});

// The play(), release(), stop(), and setParamNorm() can be tied to events like mouse action.

window.onmousedown=function(e){
	snd.play()
};

window.onmouseup=function(e){
	snd.release();
};

// Setting sound parameters, in this case using normalized values (in [0,1]).
window.onmousemove=function(mouseEvent){
	snd.setParamNorm(1, mouseEvent.clientX/window.innerWidth );  // set by parameter index
	snd.setParamNorm("Modulation Index", mouseEvent.clientY/window.innerHeight); // or by name
};

//------------------------------------------
// Additional aiSound API methods get info about the sound
var showInfo=function(snd){
	console.log("The sound has " + snd.getNumParams() + " parameters :");
	for(var i=0;i<snd.getNumParams();i++){
		console.log(`snd param[${i}] is ${snd.getParam(i,"name")} of type \
${snd.getParam(i,"type")} with min ${snd.getParam(i,"min")}, and max ${snd.getParam(i,"max")}`);
	}
}