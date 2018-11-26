import React from 'react'
import { Deck, Heading, Slide } from 'spectacle'
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
          <Heading size={1} fit caps lineHeight={1}>
            React Workshop
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
