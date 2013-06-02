bootstrap-file
==============

file upload input styled with bootstrap

To use, you need minimum markup, all styling is done using css and javascript.

```html
<input type="file" name="anyName" id="anyId" class="file" data-span="3" data-file="1" />
```

`class` is needed to identify the element for styling,
`data-span` is for sizing, the value `x` means, that the file input will have class `spanx` (in this case `span3`).
`data-file` is for distinguishing several file inputs on one page.

Styling is done in document.ready event callback, if you want to add elements later, just call `$.bootstrapFile` afted adding them.

Optional attributes:

`title` ["Open"] : defines the text displayed on the Open button, if ommited, default text is "Open"
`data-orientation` ["right"] : defines position of the Open button, if not specified, default position is to the right of the input box
`data-remove` ["false"] : if "true", control has appended button for removing selected file (functionality not yet implemented)
