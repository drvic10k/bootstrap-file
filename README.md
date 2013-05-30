bootstrap-file
==============

file upload input styled with bootstrap

To use, you need minimum markup, all styling is done using css and javascript.

```html
<input type="file" name="anyName" id="anyId" class="file" data-span="3" />
```

`class` is needed to identify the element for styling,
`data-span` is for sizing, the value `x` means, that the file input will have class `spanx` (in this case `span3`).

Styling is done in document.ready event callback, if you want to add elements later, just call `$.bootstrapFile` afted adding them.
