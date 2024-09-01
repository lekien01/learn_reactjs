import './App.css';

/* Creating and nesting components 
React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:*/

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

/*Now that you’ve declared MyButton, you can nest it into another component:*/

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
