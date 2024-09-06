
### Shaping

```CSS
width : 200px;
```

```CSS
max-width: 200px;
```
- Width of object cannot exceed what is set

```CSS
height: 200px;
```

```CSS
margin: 50px 30px 100px 50px
/* Top, Right, Bottom, Left */
```
- Adds a margin to object

```CSS
padding: 50px 30px 100px 50px
/* Top, Right, Bottom, Left */
```
- Adds space between border of objects and the content within it

```CSS
box-sizing: border-box;
```
- When you don't want padding to increase width or height of element

```CSS
object-fit: cover
```
- How image fits in its box
- Preserving aspect ratio

### Content Presentation

```CSS
font-family: ariel
```
- Font of writing

```CSS
font-weight: bold;
font-weight: 300;
```
- Boldness of text

```CSS
font-size: 2em;
/* 2x existing font size */
```

```CSS
font-style: italic;
```
- Commonly used for italic text


```CSS
text-align: center;
text-align: right;
```
- Aligns the text within an element

```CSS
line-height: 1.4;
```
- Creates space between line of text (p)

```CSS
letter-spacing: 0.2em;
```
- Creates space between letters in the text
- Can be used to make fancy titles


```CSS
color: red;
```
- Sets the text and default border colour

```CSS
background-color: red;
background-color: rgba(0,0,0,0.5)
```
- Background colour of element

```CSS
border: 5px dashed/solid rgba(255,0,0,0,5)
border-radius: 5px
```
- Border radius creates rounded cornered elements

```CSS
box-shadow: 5px 10px 20px rgba(0,0,0,0.5)
```

```CSS
opacity: 0.5;
```

```CSS
overflow-y: auto;
overflow-x: hidden
```
- How content behaves when exceeding its space
- Auto will create a scroll bar, hidden will cut off the content etc.


### User Interaction

```CSS
user-select: none;
```
- User cannot highlight or interact with element
- Good for buttons and dropdown menus

```CSS
.button{
	background: red;
	border-radius: 5px;
	cursor: pointer;
	
	transition: background 0.2s;
}
.button:hover{
	background: green;
}
```
- Button that when hovered over, changes colour

```CSS
cursor: pointer;
cursor: text;
cursor: zoom-in;
```
- Changes look of mouse cursor when hovering on an element

```CSS
transition: 0.5s;
```
- Ensures all transitions the element goes through happens over the specified time

We can remove solid backgrounds, mostly while, by merging it with another background
```CSS
mix-blend-mode: color-burn;
```
