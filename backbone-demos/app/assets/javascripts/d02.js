//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone

var Person = Backbone.Model.extend({
  defaults: {
    name: 'Sharon Stone',
    age: 30,
    occupation: 'worker'
  },

  work: function () {
    return this.get('name') + ' is working ...';
  },

  available: function () {
    return 'Busy with ' + this.get('occupation');
  }
});
