# Vue Notes

## Reference (for v2.x)

- English - https://vuejs.org/v2/guide/
- 简体中文 - https://cn.vuejs.org/v2/guide/

## Basic Idea

Although not strictly associated with the MVVM pattern, Vue’s design was partly inspired by it.

## The Vue Instance

```JS
var app = new Vue({
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

The double mustaches interprets the data as plain text, not HTML. In order to output real HTML, we need to use `v-html`.

```HTML
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

### v-on

`v-on` is used to listen to DOM events.

```HTML
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

### v-if

`v-if` is used to conditionally render a block.

```HTML
<p v-if="seen">Now you see me</p>
```

### v-show

`v-show` is another option for conditionally displaying an element.

```HTML
<h1 v-show="ok">Hello!</h1>
```

The difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` only toggles the display CSS property of the element.

### v-bind

Mustaches cannot be used inside HTML attributes. Instead, use a `v-bind` directive.

```HTML
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

We can pass an object to `v-bind:class` to dynamically toggle classes:

```HTML
<div v-bind:class="{ active: isActive }"></div>
```

The above syntax means the presence of the `active` class will be determined by the truthiness of the data property `isActive`.

### v-for

We can use `v-for` to render a list of items based on an array.

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

 We can use `v-model` to create two-way data bindings on form `<input>`, `<textarea>`, and `<select>` elements.

```HTML
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

## Vue + axios

```JS
var vm = new Vue({
  el: "#app",
    data: {
        musicList: [],
    },
    methods: {
        searchMusic: function () {
            var that = this
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    that.musicList = response.data.result.songs
                }, function (err) { })
        },
    },
})
```