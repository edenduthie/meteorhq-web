Session.setDefault('tweet','Latest tweets from eduthie');

Template.footer.tweet = function() {
	Meteor.call('tweets',1,function(error,result){
		if( result && result.length > 0 ) {
			Session.set('tweet',result[0]);
		}
	});
	return Session.get('tweet');
}

Template.footer.helpers({
	dateFormat : function(date) {
	    if( date ) {
	        var d = new Date(date);
	        return moment(d).format("HH:mm MMM Do, YYYY");
	    }
	}
});

Template.footer.events({
	'click button' : function(event) {
		event.preventDefault();
		var element = $(event.target).parent().parent().parent();
		var result = element.parsley('validate');
		if( result ) {
			var form = new Form(element);
			var message = form.scan();
			Meteor.call('contact',message,function(error,result){});
			bootbox.alert("Thanks for getting in touch, I will get back to you shortly!");
			form.clear();
		}
	}
});

Template.footer.currentUrl = function() {
	return document.URL;
}