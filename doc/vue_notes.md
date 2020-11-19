# Vue Notes

## Reference (for v2)

- English - https://vuejs.org/v2/guide/
- 简体中文 - https://cn.vuejs.org/v2/guide/

## Basic Idea

Although not strictly associated with the MVVM pattern, Vue’s design was partly inspired by it.

## The Vue Instance

```
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

```
<span>Message: {{ msg }}</span>
```

### v-text

```

```

### v-html

```

```

### v-on
```

```

### v-show
```

```

### v-if
```

```

### v-bind
```

```

### v-for
```

```

### v-model
```

```

## Vue + axios (todo)