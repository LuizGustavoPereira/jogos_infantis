var Route = {
	href: function(sLink){
		window.location.href = document.getElementsByTagName('base')[0].href + sLink
	},
	open: function(sLink){
		window.open(document.getElementsByTagName('base')[0].href + sLink);
	},
	base: document.getElementsByTagName('base')[0].href
}