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

  // Receives object.toJSON() as parameter
  validate: function (attrs, options) {
    // console.log(attrs);

    if (attrs.age < 0) {
      return 'Age must be positive, stupid!';
    }

    if (!attrs.name) {
      return 'Every person must have a name, fool!';
    }
  },

  work: function () {
    return this.get('name') + ' is working ...';
  },

  available: function () {
    return 'Busy with ' + this.get('occupation');
  }
});