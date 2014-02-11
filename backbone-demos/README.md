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

```javascript
// Copy this vanilla javascript class to file d01.js
var Quiz = function(title) {
  this.title = title;
}

Quiz.prototype.shout = function () {
  return this.title.toUpperCase();
};
```

```javascript
// On chrome console, type each of these commands individually and study what happens
Quiz;
var quiz = new Quiz('my first quiz');
quiz.title;
quiz.shout();
$body.html(quiz.title);
```
