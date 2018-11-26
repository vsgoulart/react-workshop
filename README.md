# React workshop - session 1

## How to start a React project?

Installation through create-react-app

## JavaScript concepts

- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) / [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Fat arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Object / array destructuring, rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [map/filter/reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)

## [What is React?](https://reactjs.org/tutorial/tutorial.html#what-is-react)

> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

## Why React?

- Simple
- Declarative
- Composable components
- Simple API
- Fast learning curve

## [What is JSX?](https://reactjs.org/docs/introducing-jsx.html)

JavaScript extension with XML-like syntax used to describe how UI is going to look like

```javascript
// this

;<div className="shopping-list">
  <h1>Shopping List for {props.name}</h1>
  <ul>
    <li>Sugar</li>
    <li>Bread</li>
    <li>Onions</li>
  </ul>
</div>

// transpiles to this

React.createElement(
  'div',
  { className: 'shopping-list' },
  React.createElement('h1', null, 'Shopping List for ', props.name),
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Sugar'),
    React.createElement('li', null, 'Bread'),
    React.createElement('li', null, 'Onions')
  )
)
```

https://babeljs.io/repl/#?presets=react

## What are props?

Props are the way to pass data to a component, it can be accessed through `this.props` or the argument of a stateless functional component

```javascript
function App() {
  return <Greetings person="Albert" />
}

class Greetings extends Component {
  render() {
    return <h1>Hello {this.props.person}!</h1>
  }
}

// or

function Greetings(props) {
  return <h1>Hello {props.person}!</h1>
}
```

## What is state?

State is the data that exists inside a class component and can be accessed through `this.state`. A state change triggers the update lifecycle of a component

```javascript
class App extends Components {
  state = {
    clicks: 0,
  }

  handleClick = () => {
    this.setState(state => ({
      clicks: state.clicks + 1,
    }))
  }

  render() {
    return (
      <>
        <span>Number of clicks: {this.state.clicks}</span>
        <button onClick={this.handleClick}>CLICK ME!</button>
      </>
    )
  }
}
```

- https://reactjs.org/docs/react-component.html#setstate
- https://github.com/wkda/admin-frontend-common/blob/master/packages/hiding-reasons/src/components/AddHidingReasonForm.js#L82

## What is the component lifecycle?

Methods that you can use to operate on different instants of time on the component's life

### Mounting component lifecycle order

1. [`constructor()`](https://reactjs.org/docs/react-component.html#constructor)
2. [`static getDerivedStateFromProps()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
3. [`render()`](https://reactjs.org/docs/react-component.html#render)
4. [`componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount)

### Updating component lifecycle order

1. [`static getDerivedStateFromProps()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
2. [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
3. [`render()`](https://reactjs.org/docs/react-component.html#render)
4. [`getSnapshotBeforeUpdate()`](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
5. [`componentDidUpdate()`](https://reactjs.org/docs/react-component.html#componentdidupdate)

### Unmounting component order

1. [`componentWillUnmount()`](https://reactjs.org/docs/react-component.html#componentwillunmount)

### Component error handling order

1. [`static getDerivedStateFromError()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
2. [`componentDidCatch()`](https://reactjs.org/docs/react-component.html#componentdidcatch)

### Deprecated lifecycles

- [`UNSAFE_componentWillMount()`](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)
- [`UNSAFE_componentWillUpdate()`](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)
- [`UNSAFE_componentWillReceiveProps()`](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)

* https://reactjs.org/docs/react-component.html#the-component-lifecycle
* http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class

## Which types of components do we have in React?

```javascript
// stateless functional component
function Foo() {
  return <span>foo</span>
}

// class component
class Foo extends React.Component {
  render() {
    return <span>foo</span>
  }
}

// pure component
class Foo extends React.PureComponent {
  render() {
    return <span>foo</span>
  }
}
```

- https://reactjs.org/docs/react-api.html#reactcomponent
- https://reactjs.org/docs/react-api.html#reactpurecomponent
