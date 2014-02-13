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

var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );
  }
});

var person = new Person();
var personView = new PersonView({ model: person });