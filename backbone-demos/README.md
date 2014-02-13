# [BackboneJS](http://backbonejs.org/) trainning

* Data Types Primer
* First Backbone Model
* Validating Models
* Views
* Inline Templates
* External Templates

* Collections
* Collection Views

---

## Data Types Primer (d01)

Represent and organize data using a vanilla javascript model.

```javascript
// On chrome console, type each of these commands individually and study what happens

Quiz;

var quiz = new Quiz('my first quiz');
quiz;
quiz.title;
quiz.shout();
$body.html(quiz.title);

// ---

Person;

var person = new Person({ name: 'My name', age: 25, occupation: 'web developer' });
person;
person.name;
person.age;
person.occupation;
person.work();

var person2 = new Person({ name: 'Another person', age: 30, occupation: 'web designer' });
person2.work();
```

---

## First Backbone Model (d02)

Represent the previous javascript object, now extending Backbone model.

```javascript
// On chrome console, type each of these commands individually and study what happens

Person;

var person = new Person();
person;
person.name;
person.age;
person.get('name');
person.get('age');
// Using this accessors, is what allows Backbone to be tracking our data for changes.
person.work();

var person2 = new Person({ name: 'Beyonce Knowles', age: '30' });
person2;
person2.toJSON();

person2.get('occupation');
person2.set('occupation', 'colourful friend');
person2.available();
person2.toJSON();

person2.set({ 'occupation': 'president' });
person2.available();
person2.toJSON();

person2.set('age': -50);
```

---

## Validating Models (d03)

```javascript
// On chrome console, type each of these commands individually and study what happens

var person = new Person({ name: 'Maria', age: 25 }); // doesn't validate
person.get('name'); // doesn't validate
person.set('age', -27); // doesn't validate
person.set('age', -27, { validate: true }); // triggers validate
person.isValid() // trigger validate

// ---

var person = new Person({ name: 'Maria', age: 25 });
person.set('age', -27, { validate: true });
person.isValid();
person.set('age', -27);
person.isValid();
person.validationError;
person.previousAttributes();
person.changedAttributes();

// ---

var person = new Person;
person.on('invalid', function (model, error) { console.log(error); });
person.set('name', 'Filipe');
person.toJSON();
person.set('name', '', { validate: true });
person.toJSON();
```

---

## Views (d04)

In Backbone, think of your View not as only HTML, but as the representation of a single element.
It responds to events, can have it's own methods and can trigger actions on a model os listen to changes on it's associated model.

```javascript
var PersonView = Backbone.View.extend({});
var personView = new PersonView;
personView.el;
personView.$el;

// ---

personView;
personView.el;
personView.render();
personView.el;

// ---

personView.el;
$(document.body).html(personView.el);

// ---

personView.el;
$(document.body).html(personView.el);
// Now we start seeing here an anti-pattern and the usage of templates is welcome :)!
```

---

## Inline Templates (d05)

```javascript
// Now let's try with inline templates using the default underscore templating system

personView.el;
personView.$el;
$(document.body).append(personView.el);
```

---

## External Templates (d06)
