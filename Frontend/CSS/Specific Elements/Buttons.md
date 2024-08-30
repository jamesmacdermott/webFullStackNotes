
### Pseudo-Classes

- : hover
	- When user hovers over element but doesn't activate it

- :active
	- When an element is being pressed/activated by user

- :focus
	- When user tabs in or clicks on the element

- :visited
	- When a link has been visited

- :disabled
	- Applies when an element is disabled


### : : before and : : after

- Acts as an empty element before or after targeted element
- We must assign some content in this

```CSS
h1:: after{
	content: '';
	position: absolute;
	width: 10px;
	height: 10px;
}
```




