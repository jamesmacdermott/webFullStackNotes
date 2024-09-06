
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


We can add a hover animation where our item gets underlined

```CSS
navItem {

    position: relative; /* This ensures the ::before pseudo-element is positioned relative to the navItem */

    color: white;

    font-family: Rubik;

    font-size: 13px;

    cursor: pointer;

}

  

.navItem::before {

    content: "";

    position: absolute;

    width: 100%;

    height: 2px;

    background: #fff;

    border-radius: 5px;

    transform: scaleX(0); /* Initially hidden */

    transition: all 0.5s ease;

    bottom: 0;

    left: 0;

    transform-origin: left;

}

  

.navItem:hover::before {

    transform: scaleX(1.01); /* Expands on hover */

}
```


