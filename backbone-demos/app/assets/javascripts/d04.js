//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone

var Person = Backbone.Model.extend({
  defaults: {
    name: 'Sharon Stone',
    age: 30,
    occupation: 'worker'
  }
});

// It creates a root div tag by default on the view for you
var PersonView = Backbone.View.extend({
  tagName: 'li',
  // className: 'person',
  // id: 'person-123'

  initialize: function () {
    console.log('hi there');
    // console.log(this.model);
    // this.render(); // run this as last to show that the
  },

  render: function () {
    // this.$el.html(this.model.get('name'));
    // this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation'));
  }
});

var person = new Person();
var personView = new PersonView({ model: person });