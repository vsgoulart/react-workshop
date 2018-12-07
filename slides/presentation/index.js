import React from 'react'
import {
  Deck,
  Heading,
  Slide,
  CodePane,
  BlockQuote,
  Quote,
  Cite,
  Link,
  Appear,
  List,
  ListItem,
  Text,
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
require('normalize.css')

const theme = createTheme(
  {
    primary: '#fbfbfb',
    secondary: '#3a3a3a',
    tertiary: '#e87f36',
    quaternary: '#8b8b8b',
    sky: '#4a90e2',
    skyNight: '#304f95',
    kakiSweet: '#ff8c3b',
    skySummer: '#529ff9',
    tomato: '#ff0000',
    babyBlue: '#ecf4fc',
    pacific: '#42c5cb',
    pacificMint: '#cbf4f5',
    storm: '#d8d8d8',
    cloudy: '#f0f0f0',
    pearlWhite: '#fbfbfb',
  },
  {
    primary: {
      name: 'Open Sans',
      googleFont: true,
    },
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading size="1" fit caps lineHeight="1">
            React Workshop
          </Heading>
        </Slide>
        <Slide>
          <Heading size="1" fit caps lineHeight="1">
            JavaScript Concepts
          </Heading>
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            let / const
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/letConst.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            let / const
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/letConst.result.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary" caps>
            Arrow functions
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/arrowFunction.example')}
          />
        </Slide>
        <Slide>
          <Heading size="4" textColor="tertiary" caps>
            Object / array destructuring, rest operator
          </Heading>
          <CodePane
            lang="javascript"
            textSize="20"
            source={require('raw-loader!../assets/destructuring.example')}
          />
        </Slide>
        <Slide align="flex-start">
          <Heading size="2" textColor="tertiary" caps>
            Classes
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/classes.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary" caps>
            Template strings
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/templateStrings.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            map / filter / reduce
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/arrayFunctions.example')}
          />
        </Slide>
        <Slide>
          <Heading size="1" fit caps lineHeight="1">
            What is React?
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="42" textColor="tertiary">
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. It lets you compose complex UIs from
              small and isolated pieces of code called “components”.
            </Quote>
            <Cite>
              <Link
                href="https://reactjs.org/tutorial/tutorial.html#what-is-react"
                textColor="skySummer"
                target="_blank"
              >
                https://reactjs.org/tutorial/tutorial.html#what-is-react
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            Why React?
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem>Simple API</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Declarative</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Composable components</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Fast learning curve</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            What is JSX?
          </Heading>
          <Appear>
            <Text>
              JavaScript extension with XML-like syntax used to describe how UI
              is going to look like
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            What is JSX?
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/jsx.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            What is JSX?
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/jsxTranspiled.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            What are props?
          </Heading>
          <Appear>
            <Text>
              Props are the way to pass data to a component, it can be accessed
              through `this.props` or the argument of a stateless functional
              component
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            What are props?
          </Heading>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/props.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            What is state?
          </Heading>
          <Appear>
            <Text>
              State is the data that exists inside a class component and can be
              accessed through `this.state`. A state change triggers the update
              lifecycle of a component
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/state.example')}
          />
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            What is the component lifecycle?
          </Heading>
          <Appear>
            <Text>
              Methods that you can use to operate on different instants of time
              on the component's life
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Mounting lifecycle order
          </Heading>
          <List>
            <ListItem>constructor()</ListItem>
            <ListItem>static getDerivedStateFromProps()</ListItem>
            <ListItem>render()</ListItem>
            <ListItem>componentDidMount()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Mounting lifecycle order
          </Heading>
          <List>
            <ListItem>constructor()</ListItem>
            <ListItem>render()</ListItem>
            <ListItem>componentDidMount()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Updating lifecycle order
          </Heading>
          <List>
            <ListItem>static getDerivedStateFromProps()</ListItem>
            <ListItem>shouldComponentUpdate()</ListItem>
            <ListItem>render()</ListItem>
            <ListItem>getSnapshotBeforeUpdate()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Updating lifecycle order
          </Heading>
          <List>
            <ListItem>render()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Unmounting component order
          </Heading>
          <List>
            <ListItem>componentWillUnmount()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Component error handling order
          </Heading>
          <List>
            <ListItem>static getDerivedStateFromError()</ListItem>
            <ListItem>componentDidCatch()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Deprecated lifecycle hooks
          </Heading>
          <List>
            <ListItem>UNSAFE_componentWillMount()</ListItem>
            <ListItem>UNSAFE_componentWillUpdate()</ListItem>
            <ListItem>UNSAFE_componentWillReceiveProps()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3" textColor="tertiary">
            Deprecated lifecycle hooks
          </Heading>
          <List>
            <ListItem>componentWillMount()</ListItem>
            <ListItem>componentWillUpdate()</ListItem>
            <ListItem>componentWillReceiveProps()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="2" textColor="tertiary">
            Which types of components do we have in React?
          </Heading>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            textSize="24"
            source={require('raw-loader!../assets/componentTypes.example')}
          />
        </Slide>
      </Deck>
    )
  }
}
