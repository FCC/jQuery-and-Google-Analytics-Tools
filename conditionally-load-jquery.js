//Conditionally load jQuery
//inspired by http://www.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/

if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload = myOnLoadEvent;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	myOnLoadEvent();
}

function myOnLoadEvent() { 		
	jQuery(document).ready(function($) { 
		alert('your code here');
	}		
}