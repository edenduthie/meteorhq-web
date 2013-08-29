Template.header.helpers({
	isActive : function(key) {
		var currentPage = Template.header.getCurrentPage();
	    if( key === currentPage ) return 'active';
	    else if( !currentPage && key === 'home' ) return 'active';
	    else return '';
	}
});

Template.header.getCurrentPage = function() {
	var currentUrl = document.URL;
	if( currentUrl ) {
		var splitUrl = currentUrl.split('/');
		if( splitUrl && splitUrl.length >= 4 )
		{
			return splitUrl[3];
		}
	}
}