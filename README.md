# css-scrollbar-size

A small utility that retrieves the browser scrollbar' size and stores it in CSS variable. From there, you can use it in your CSS or JS files.

The script works out of the box: it executes itself so you don't need to call a specific function. It is also SSR safe.

File size:

- **.js**: 1.24 KiB - Gzipped: 589 bytes
- **.min.js**: 950 bytes - Gzipped: 501 bytes

## Installation

### In a project with a bundler

NPM

```bash
npm install css-scrollbar-size
```

Yarn

```bash
yarn add css-scrollbar-size
```

You'll need to import the script in your project. You should do it in a file or component that is loaded on every screens of your app.

```js
import "css-scrollbar-size";
```

For example, in a Next.js project, you can import it in the `_app.js` file.

### In a project without a bundler

You can import the script in your HTML file at the start or the end of the `body`.

```html
<script src="https://www.unpkg.com/css-scrollbar-size@latest/lib/css-scrollbar-size.js"></script>
```

You can replace `latest` by a specific version number if you want to lock the version.

For example : [`https://www.unpkg.com/css-scrollbar-size@1.0.0/lib/css-scrollbar-size.min.js`](https://www.unpkg.com/css-scrollbar-size@1.0.0/lib/css-scrollbar-size.min.js).

> [unpkg](https://www.unpkg.com/) is a fast, global content delivery network for everything on npm. Use it to quickly and easily load any file from any package.

## Usage

### CSS variable

Once the script is correctly setup, you can use the CSS variable `--scrollbar-size` anywhere in your CSS files.

```css
body {
  padding-right: var(--scrollbar-size);
}
```

The variable is particularly useful when you want to use the viewport units (`vw`). Indeed, the scrollbar is not taken into account when calculating the viewport width. So if you want to have a full width element, you'll need to substract the scrollbar size from the width of the element.

```css
.element {
  width: calc(100vw - var(--scrollbar-size));
}
```

### With SCSS

If you use SCSS, you can create the `vw` function then use it to substract the scrollbar size from a width dependending on the viewport.

```scss
@function vw($size) {
  @return calc(#{$size}vw - var(--scrollbar-size));
}

.element {
  width: vw(100);
}
```

### In JS

You can also use the scrollbar size in your JS files by extracting its value fron the `:root` element.

```js
const scrollbarSize = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue(
    "--scrollbar-size"
  )
);
```

## Browser support

The script is supported by all modern browsers. Feel free to report any issue you may encounter in your project(s).
