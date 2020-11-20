# Vue Notes

## Reference (for v2.x)

- English - https://vuejs.org/v2/guide/
- 简体中文 - https://cn.vuejs.org/v2/guide/

## Basic Idea

Although not strictly associated with the MVVM pattern, Vue’s design was partly inspired by it.

## The Vue Instance

```JS
var vm = new Vue({
  el: "#app",
    data: {
        city: "",
        weatherList: [],
    },
    methods: {
        changeCity: function (city) {
            this.city = city
            this.searchWeather()
        },
    },
})
```

Instance Lifecycle Hooks（todo）

## Template Syntax

### Text

```HTML
<span>Message: {{ msg }}</span>
```

### v-html

The double mustaches interprets the data as plain text, not HTML. In order to output real HTML, you will need to use the `v-html` directive:

```HTML
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

### v-on

Listens to DOM events.

```HTML
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

### v-show

```HTML
<h1 v-show="ok">Hello!</h1>
```

### v-if

Here, the `v-if` directive would remove/insert the `<p>` element based on the truthiness of the value of the expression seen.

```HTML
<p v-if="seen">Now you see me</p>
```

### v-bind

Mustaches cannot be used inside HTML attributes. Instead, use a `v-bind` directive:

```HTML
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

### v-for

We can use the `v-for` directive to render a list of items based on an array.

```HTML
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>

<!-- if you need the index -->
<li v-for="(item, index) in items">
```

```JS
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

We can also use `v-for` to iterate through the properties of an object.

### v-model

 We can use `v-model` directive to create two-way data bindings on form `<input>`, `<textarea>`, and `<select>` elements.

```HTML
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

## Vue + axios (todo)