bootstrap-file
==============

file upload input styled with bootstrap

To use, you need minimum markup, all styling is done using css and javascript.

```html
<input type="file" name="anyName" id="anyId" class="file" data-span="3" />
```

Class is needed to identify the element for styling,
data-span is for sizing, in this case value 3 means, that the file input will have class span3.

Styling is done in document.ready event callback, if you want to add elements later, just call `$.bootstrapFile` afted adding them.
