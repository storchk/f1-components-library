import { create } from '@storybook/theming'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/styles/globals'
import { theme } from '../src/theme'

export const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      panelPosition: 'right',
      theme: create({ base: 'light' }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

const withGlobal = content => (
  <>
    <GlobalStyles />
    {content()}
  </>
)
const withTheme = story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>

export const decorators = [withTheme, withGlobal]
