//Conditionally load Google Analytics tracking code
//GA code optimized by Html5boiler plate -- https://github.com/paulirish/html5-boilerplate

if ( !window._gat || !window._gat._getTracker ) { 
	var _gaq=[["_setAccount","UA-XXX-1"],["_trackPageview"]];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
	g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
	s.parentNode.insertBefore(g,s)}(document,"script"));
}