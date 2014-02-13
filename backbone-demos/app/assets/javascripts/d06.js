//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require handlebars

var Person = Backbone.Model.extend({
  defaults: {
    name: 'Sharon Stone',
    age: 30,
    occupation: 'worker'
  }
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: Handlebars.compile($('#personTemplate').html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );
  }
});

var person = new Person();
var personView = new PersonView({ model: person });

var person2 = new Person({ name: 'Jeff', age: 27 });
var personView2 = new PersonView({ model: person2 });