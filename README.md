# aurelia-fontawesome
An Aurelia plugin that creates a custom-element for fontawesome


### Basic Usage

The `icon` property of the `FaIcon` custom element can be used in the following way:

Shorthand that assumes a prefix of `fas`:

```javascript
<fa-icon icon="spinner"></fa-icon>
```

Explicit prefix: (note that .bind is not necessary even though we are using an array)

```javascript
<fa-icon icon.bind="['far', 'spinner']"></fa-icon>
```
or
```javascript
<fa-icon icon="['far', 'spinner']"></fa-icon>
```




Explicit icon definition (this is pseudo-code, see examples below for more detail):

```javascript
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

<fa-icon icon.bind="getIcon"></fa-icon>

function getIcon () {
  return faCoffee
}
```

### More Features

Spin and pulse animation:

```javascript
<fa-icon icon="spinner" spin ></fa-icon>
<fa-icon icon="spinner" pulse ></fa-icon>
```

Fixed width:

```javascript
<fa-icon icon="spinner" fixed-width ></fa-icon>
```

Border:

```javascript
<fa-icon icon="spinner" border ></fa-icon>
```

List items:

```javascript
<fa-icon icon="spinner" list-item ></fa-icon>
```

Flip horizontally, vertically, or both:

```javascript
<fa-icon icon="spinner" flip="horizontal"></fa-icon>
<fa-icon icon="spinner" flip="vertical"></fa-icon>
<fa-icon icon="spinner" flip="both"></fa-icon>
```

Size:

```javascript
<fa-icon icon="spinner" size="xs"></fa-icon>
<fa-icon icon="spinner" size="lg"></fa-icon>
<fa-icon icon="spinner" size="6x"></fa-icon>
```

Rotate:

```javascript
<fa-icon icon="spinner" rotation="90"></fa-icon>
<fa-icon icon="spinner" rotation="180"></fa-icon>
<fa-icon icon="spinner" rotation="270"></fa-icon>
```

Pull left or right:

```javascript
<fa-icon icon="spinner" pull="left"></fa-icon>
<fa-icon icon="spinner" pull="right"></fa-icon>
```

### Advanced Features

Power Transforms:

```javascript
<fa-icon icon="spinner" transform="shrink-6 left-4"></fa-icon>
<fa-icon icon="spinner" transform="{ rotate: 42 }"></fa-icon>
```

Masking:

```javascript
<fa-icon icon="coffee" mask="['far', 'circle']"></fa-icon>
```

Symbols:

```javascript
<font-awesome-icon icon="edit" symbol ></fa-icon>
<font-awesome-icon icon="edit" symbol="edit-icon" ></fa-icon>
```
