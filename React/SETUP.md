
	React is a JavaScript Library

1. Ensure vite is installed globally

```bash
npm install -g vite
```
or locally
``` Shell
npm install vite --save-dev
```

```Shell
npm list vite
```
to check installation

2. Change directory to desired and create project

```shell
cd ../file/location
npm create vite@latest
```

3. Ensure node dependancies

```shell
npm install
```
### Running

```shell
npm run dev
```


### Setting up files provided

### main.tsx

```TypeScript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- Remove template provided by vite
- Ensure imports and we can add bootstrap and other libraries
- We import App form our App typescript and this file will create the root

### App.tsx

1. import components we have made
2. Have our app function
	1. Returning some section (perhaps a div) with our imported components
3. Export our App function to main.tsx

eg.
```TypeScript
import ListGroup from "./components/ListGroup";
function App(){
  return <div><ListGroup /></div>;
}
export default App
```
### Components

Ensure we export our components made 
eg
```TypeScript
function theList(){
	return element;
}
export default theList
```