# Vue Resize Text

A vue directive which automatically resize font size based on element width.

It makes the font-size flexible on fluid or responsive layout.

[Live Demo](https://jayeshlab.github.io/vue-resize-text/): Resize the browser viewport to see the effect in action

## Installation

Install via NPM

`$ npm install vue-resize-text --save`

Install via CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-resize-text"></script>
```

#### Global

Register VueResizeText globally:

```javascript
import Vue from 'Vue';
import VueResizeText from 'vue-resize-text';

Vue.use(VueResizeText)
```
Directive ```v-resize-text``` then can be used in any of Component

```html
<template>
  <div v-resize-text>Hello Vue</div>
</template>
```

#### Local

Include the VueResizeText  directive directly into your component using import:

```html
<template>
  <div v-resize-text>Hello Vue</div>
</template>
<script>
import ResizeText from 'vue-resize-text'
export default {
 directives: {
    ResizeText
 }
}
</script>
```

### Usage

#### Basic usage

```html
<template>
  <div>
    <div v-resize-text="{ratio:1.3, minFontSize: '30px', maxFontSize: '100px', delay: 200}">Hello Vue</div>
  </div>
</template>

<script>
  import ResizeText from 'vue-resize-text'
  export default {
    directives: {
        ResizeText
     }
  };
</script>
```

### Directive Arguments
`v-resize-text="{ratio:1.5, minFontSize: '30px', maxFontSize: '100px', delay: 200}"`

| Argument         | Description                 |  Type         |  Default     | 
| -----------      | ---------------             | ------------  | ------------ | 
|  ratio           |  Font Ratio is the tweek to make the text resize properly, greater then `1` makes the font smaller and less then `1` make the font bigger | Number        |     1       |
|  minFontSize     |  Minimum font-size threshold in px| Number/String |     16px or 16       |      -            |
|  maxFontSize     |  Maximum font-size threshold in px| Number/String  |     500px  or 500      |      -         |
|  delay           |  Debound time delay on window resize | Number        |  200   |      -        |

## License

MIT