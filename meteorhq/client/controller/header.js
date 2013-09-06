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

Template.header.rendered = function() {
	//$('#myModal').modal({show:false});
}

Template.header.events({
	'click a.contact-us' : function(event) {
		$('#myModal').modal('show');
	},
	'click button.hide-modal' : function(event) {
		$('#myModal').modal('hide');
	},
	'click button.contact-submit' : function(event) {
		event.preventDefault();
		var element = $('#contact-form');
		var result = element.parsley('validate');
		if( result ) {
			$('#myModal').modal('hide');
			var form = new Form(element);
			var message = form.scan();
			Meteor.call('contact',message,function(error,result){});
			bootbox.alert("Thanks for getting in touch, I will get back to you shortly!");
			form.clear();
		}
	}
});