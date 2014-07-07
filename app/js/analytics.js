(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43075494-1', 'html5biz.org');
ga('send', 'pageview');


window.onerror = function (message, fileName, lineNumber) {

	var sendMessage = 'message:' + message +
		', fileName:' + fileName +
		', line:' + lineNumber +
		', href:' + location.href +
		', userAgent:' + window.navigator.userAgent;

	_gaq.push(['_trackEvent', 'JSError', sendMessage]);

};