- Media queries allow for a responsive page design, allowing the design to adapt based off scenarios such as the screen dimensions lowering

##### Structure of a Media Query

```CSS
@media () {

}
```

#### Examples

```CSS
@media (max-width: 500px){
	h1{
		color: red;	
	}
}
```
- This code makes it so when the width viewport is made below 500 pixels, all elements with h1 tag are made red



```CSS
.container{
    width: 100%;
    margin-left: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
@media (min-width: 475px){
    .container{
    max-width: 475px;
    }
}
@media (min-width: 640px){
    .container{
    max-width: 640px;
    }
}
@media (min-width: 768px){
    .container{
    max-width: 768px;
    }
}
@media (min-width: 1024px){
    .container{
    max-width: 1024px;
    }
}
@media (min-width: 1280px){
    .container{
    max-width: 1280px;
    }
}
@media (min-width: 1536px){
    .container{
    max-width: 1536px;
    }
}
/* Sizing Guide:
475px : xs
640px : small
768px : medium
1024px : large
1280px : XL
1536px : 2XL
*/
```
- This container and media query combination allows the page to have a nice lay out of lots of viewport sizes
- The container class allows all elements in it to fit inside, where no elements (eg. text) are crushed when page shrinks
- But when page touches the container in width size, all container elements become smaller in scale

```CSS
@media (orientation: landscape){
	body{
		background-color: blue;
	}
}
```
- Allows responsive design based on current orientation of design

```CSS

@media (prefers-color-scheme: dark) {
	body{
		background-color: #121212;
		color: #ffffff;	
	}
}
```
