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
		console.log(result);
	}
});