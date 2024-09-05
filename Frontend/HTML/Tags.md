
### Links

``` HTML
<a href = "url">Name of Link</a> 
```

```HTML
<img src="link" alt = "name">
```

### Design

```HTML
<kbd>Ctrl</kbd>
```
- Used to define a keyboard interrupt

```HTML
<address>Address font</address>
```

```HTML
<mark> Hello </mark>
```
- Highlights text inside

```HTML
<pre>
text
hello
</pre>
```
- Preserves text format, doesn't get rid on enter line breaks
- Combined with `<code></code>` to display code on the page

```HTML
<var>x</var>
```
- Marking a mathematical or programming variable
### Formatting + Objects

```HTML
<br />
```
- Line break

```HTML
<hr />
```
- Horizontal Line

```HTML
<ul>
	<li></li>
</ul>
```
- Unordered list

```HTML
<dl>
	<dt>Hi</dt>
	<dd>there</dd>
</dl>
```
<dl>
	<dt>Hi</dt>
	<dd>there</dd>
</dl>
- Description List

```HTML
<li>
	<data value = "1">
	A
	</data>
</li>
```
- Provides a machine readable version
- Useful where data needs to be a certain type to be processed by a script

```HTML
<datalist id = "Users">
	<option value = "User1"></option>
	<option value = "User2"></option>
	<option value = "User3"></option>
</datalist>
```
- Data list, allowing suggestion to pop whilst user is inputting

```HTML
<form>
	<label for="car">Choose a car:</label>
	<select id="car" name="car">
		<optgroup label="German Cars">
			<option value="bmw">BMW</option>
			<option value="mercedes">Mercedes</option>
			<option value="audi">Audi</option>
			<option value="volkswagen">Volkswagen</option>
		</optgroup>
		<optgroup label="Japanese Cars">
			<option value="toyota">Toyota</option>
			<option value="honda">Honda</option>
			<option value="nissan">Nissan</option>
			<option value="mazda">Mazda</option>
		</optgroup>
		<optgroup label="American Cars">
			<option value="ford">Ford</option>
			<option value="chevrolet">Chevrolet</option>
			<option value="tesla">Tesla</option>
			<option value="cadillac">Cadillac</option>
		</optgroup>
	</select>
</form>

```
- Option box where user can select what they would like from given options
- Optgroup used basically as a header within the options



```HTML
<details>
	<summary>Expand</summary>
	<p>Hello</p>
</details>
```
- Quick way to create an expanding widget to reveal further information

```HTML
<template>
	<p>Content not displayed when loaded - can be made visible in javascript</p>
</template>
```

**Objects other than div**

```HTML
<nav></nav>
<header></header>
<footer></footer>
<main></main>
<section></section>
<aside></aside>
<article></article>
```

```HTML
<canvas></canvas>
```
- Mostly used for graphs

```HTML
<form>
	<label for="name">Name:</label>
	<input type="text" id = "name" name= "name">
</form>
```
- Creates a form
- Label made with "for" used, meaning when user clicks on "Name:" they will be taken to the input box below

```HTML
<textarea
	rows = "10" cols = "40"
	placeholder="Message...">
</textarea>
```
<textarea
	rows = "10" cols = "40"
	placeholder="Message...">
</textarea>

```HTML
<form>
	<fieldset>
		<legend>Details </legend>
	</fieldset>
</form>
```
<form>
	<fieldset>
		<legend>Details </legend>
	</fieldset>
</form>
- Box to allow for labels etc to be put in

**Input Types**

```HTML
<!-- Textual Inputs -->
<input type="text" name="username" placeholder="Enter your username">
<input type="password" name="password" placeholder="Enter your password">
<input type="email" name="email" placeholder="Enter your email">
<input type="url" name="website" placeholder="Enter your website URL">
<input type="tel" name="phone" placeholder="Enter your phone number">
<input type="search" name="search" placeholder="Search...">

<!-- Numeric Inputs -->
<input type="number" name="quantity" min="1" max="10" placeholder="Enter a number">
<input type="range" name="volume" min="0" max="100">

<!-- Date and Time Inputs -->
<input type="date" name="birthday">
<input type="time" name="alarm">
<input type="datetime-local" name="meeting">
<input type="month" name="expiry">
<input type="week" name="week">

<!-- Choice Inputs -->
<input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female

<!-- File Inputs -->
<input type="file" name="avatar">

<!-- Button Inputs -->
<input type="submit" value="Submit">
<input type="reset" value="Reset">
<input type="button" value="Click Me" onclick="alert('Button clicked!')">
<!-- We can also do onkeydown, where js code can be ran when we have selected something and then press a key -->

<!-- Hidden Inputs -->
<input type="hidden" name="userId" value="12345">
```
- Placeholder will be text displayed in the input box until it is clicked/ written in

```HTML
<button type = "sumbit(form data to server)/reset(all forms)/button">
</button>
```

```HTML
<table>
	<caption>
		Table Caption
	</caption>
	<thead>
		<tr>
			<th>Column Header 1</th>
			<th>Column Header 2</th>
			<th>Column Header 3</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>4</td>
			<td>5</td>
			<td>6</td>
		</tr>
	</tbody>
</table>
```
<table>
	<caption>
		Table Caption
	</caption>
	<thead>
		<tr>
			<th>Column Header 1</th>
			<th>Column Header 2</th>
			<th>Column Header 3</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>4</td>
			<td>5</td>
			<td>6</td>
		</tr>
	</tbody>
</table>


```HTML
<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
alt = "HTML"
	/>
```

<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
alt = "HTML"
	/>

- alt attribute specifies what text to display on the page if image cannot be loaded


```HTML
<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
	 usemap = "#image-map"/>
<map name = "image-map">
	<area
		target = ""
		alt = "html"
		title = "html"
		href = "https://en.wikipedia.org/wiki/HTML"
		coords= "545,331,493,238"
		shape = "rect"
		/>
</map>
```
- Creates areas on images that can hold a link
- Such as a specific item in an image

```HTML
<figure>
	<img src = "src.png"/>
	<figcaption>
		Feb 12 2005
	</figcaption>
</figure>
```
- Can be used for illustrations
- Captions can be added with caption tag

```HTML
<audio controls>
	<source
		src = "src.mp3"
		type = "audio/mp3"
	/>
</audio>
```
- Audio for page

```HTML
<video width="500" height="280" controls>
	<source
		src = "assets/video.mp4"
		type = "video/mp4"
	/>
</video>
```
- Video for page
- Subtitles can be added using track tag

```HTML
<iframe
	width = "500"
	height = "400"
	src = "3dbook/index.html">
</iframe>
<iframe
	width = "424"
	height = "238"
	src="https://youtu.be/ZhULGD5hNQs?si=MfCTjd59tMnN4f2F"
	title="Youtube video player"
	frameborder="0">
</iframe>
```
- Allows for the embedding of other documents into the page such as other html files or Spotify playlists for example


