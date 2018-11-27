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
      </Deck>
    )
  }
}
