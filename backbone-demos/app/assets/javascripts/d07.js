//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require handlebars

// Person Model
var Person = Backbone.Model.extend({
  defaults: {
    name: 'Sharon Stone',
    age: 30,
    occupation: 'worker'
  }
});

// A list of People
var PeopleCollection = Backbone.Collection.extend({
  model: Person
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

var peopleCollection = new PeopleCollection([
  { name: 'nome1', age: 10 },
  { name: 'nome2', age: 20 },
  { name: 'nome3', age: 30 },
]);

