Future = Meteor.require('fibers/future');

var twitter = Meteor.require('ntwitter');

var twit = new twitter({
  consumer_key: 'bdMx82xw85sIGE9LmFmzkA',
  consumer_secret: 'np2EGAAqLyoVTtcAbZmWmnKDWmYaAlrzulf6F7ENQw',
  access_token_key: '27780800-i0aS8yputh2ecpvi8nVExmraJqAJoXn3cpiVUiT9U',
  access_token_secret: '6PiplkXqO039qA0Sp2IT5xifPPr13wmSLAGKN8'
});

Meteor.methods({
    tweets: function (max) {
    	var fut = new Future();
        var verified = twit.verifyCredentials(function (err, data) {
        	
        }).getUserTimeline({
        	count : 1,
        	user_id : 'eduthie'
        },function(err,data){
        	fut.ret(data);
        });
        return fut.wait();
    }
});