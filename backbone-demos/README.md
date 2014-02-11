# [BackboneJS](http://backbonejs.org/) trainning

* Data Types Primer (vanilla javascript)
* First Backbone Model
* Validating Models
* Inline Templates
* External Templates
* Collections
* Collection Views

---

## Data Types Primer

How to represent and organize data.

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
