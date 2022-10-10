# zirconium-toast
A toast component in vanilla JavaScript

## Installation

In your HTML file, add the script and stylesheet in this repo's `bin/` directory:

```html
<link href="z-toast.css" rel="stylesheet">
<script src="z-toast.js"></script>
```

To show a new toast, use the `ZToast` function:

```js
ZToast("This is a new toast.")
```

## Customization

Zirconium Toast is customizable via CSS:
<dl>
  <dt><code>.z-toast-group</code></dt>
  <dd>The <code>&lt;section></code> element that acts as the container for the toast notifications</dd>

  <dt><code>.z-toast</code></dt>
  <dd>The individual toast notifications</dd>
</dl>

### Toast Group
The `.z-toast-group` element is a single element that acts as the container for the toast notifications. This is automatically created for you. However, if you want to customize this element, you can use the following CSS variables in your stylesheet to override the defaults.

```css
.z-toast-group {
  --z-toast-group-gap: 1vh; /* The space between each toast notification */
  --z-toast-padding: 1vh; /* The space around the toast container */
  --z-toast-group-z-index: 1; /* The z-index for the toast container */
}
```

By default, the toast container is positioned at the bottom, and the notifications appear at the horizontal center of the viewport. To change this, you can add the classes `.top`, `.bottom`, `.left`, and `.right` to the `ZToaster` element accessible globally via JavaScript.

```javascript
ZToaster.classList.add('top', 'right') // The notifications appear in the top right of the viewport
ZToaster.classList.add('top', 'left') // The notifications appear in the top left of the viewport
ZToaster.classList.add('top') // The notifications appear in the top center of the viewport
```

### Toast
The toast notification itself. It has the class `.z-toast`. It is customizable using the following CSS variables:

```css
.z-toast {
  --z-toast-background-light: #333333; /* Toast background in light color scheme */
  --z-toast-foreground-light: #fafafa; /* Toast foreground in light color scheme */
  
  --z-toast-background-dark: #fafafa; /* Toast background in dark color scheme */
  --z-toast-foreground-dark: #333333; /* Toast foreground in dark color scheme */
  
  --z-toast-font-size: 1rem; /* The font size of the toast */

  --z-toast-duration: 3s; /* The duration of the toast before it gets removed */
}
```