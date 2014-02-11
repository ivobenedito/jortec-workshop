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
// Add this vanilla javascript class to d01.js
var Quiz = function(title) {
  this.title = title;
}
```

In the chrome console type each one of the following commands and see analyze it's outputs:

```javascript
Quiz
```

```javascript
var quiz = new Quiz('my first quiz')
```

```javascript
quiz.title
```

```javascript
$body.html(quiz.title)
```
