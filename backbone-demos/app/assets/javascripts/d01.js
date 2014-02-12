//= require jquery
//= require jquery_ujs

var Quiz = function (title) {
  this.title = title;
};

var Person = function (attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.occupation = this.occupation;
};

Person.prototype.work = function () {
  return this.name + ' is working ...';
};