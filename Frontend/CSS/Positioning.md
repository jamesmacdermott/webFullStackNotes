
*We want to visualise our page in boxes*

### Static Positioning

- Default positioning method for elements
- Works with flow of HTML code

### Relative Positioning

```CSS
position : relative;
top: 10px;
```

- Removes element from document flow, meaning it can overlap elements in static positions 
- Can add offsets such as top, left, bottom, right , moving it relative to its original position in the document flow

### Absolute Positioning

```CSS
position : absolute;
left : 20px
```

- Removed from document flow - acts as if it is not in the html script
- Offset can be added, referring to the top left of the page or most previous relatively positioned class
- If we give the parent class the relative position, offset of absolutely positioned element with refer to top left of parent class element


### Fixed Positioning

```CSS
position : fixed;
```

- Element will always stay in the same position in the window
- Stay in the same place when you scroll, unlike absolute positioning


### Sticky Positioning

```CSS
position : sticky
top : 0;
```

- Sticky positioning is a combination of both relative and fixed positioning
- Acts as relative positioning until element hits top of page, then it will be fixed at the top of the page



### Flex Positioning

- Flex positioning is a useful tool to achieve the ability to format our page in boxes
- https://yoksel.github.io/flex-cheatsheet/
```CSS
display: flex;
```
- You want to put this on the parent element
#### Display

![[Pasted image 20240727120511.png]]
![[Pasted image 20240727120526.png]]

#### Flex-Direction

![[Pasted image 20240727120624.png]]
![[Pasted image 20240727120635.png]]
![[Pasted image 20240727120648.png]]
![[Pasted image 20240727120659.png]]

#### Flex-Wrap

![[Pasted image 20240727120950.png]]
![[Pasted image 20240727121000.png]]

#### Justify-Content

![[Pasted image 20240727121150.png]]
![[Pasted image 20240727121242.png]]
![[Pasted image 20240727121323.png]]
![[Pasted image 20240727121333.png]]
![[Pasted image 20240727121346.png]]
![[Pasted image 20240727121402.png]]

#### align-items

![[Pasted image 20240727121936.png]]
![[Pasted image 20240727121947.png]]
![[Pasted image 20240727122036.png]]
![[Pasted image 20240727122054.png]]
![[Pasted image 20240727122109.png]]

#### align-content

![[Pasted image 20240728150242.png]]

![[Pasted image 20240728150302.png]]


![[Pasted image 20240728150327.png]]

![[Pasted image 20240728150407.png]]

### Grid

- https://yoksel.github.io/grid-cheatsheet/#section-grid-auto-flow
