Meteor.Router.add({
  '/home': 'home',
  '/services': 'services',
  '/method': 'method',
  '/aboutus': 'aboutus',
  '*': 'home'
});

Meteor.startup(function(){
});