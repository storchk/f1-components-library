import { createGlobalStyle } from 'styled-components'

import { styledCssReset } from './cssReset'

export const GlobalStyles = createGlobalStyle`
  ${styledCssReset}
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap');
  body {
    font-family: 'Titillium Web', sans-serif;
  }

@font-face {
    font-family: 'Formula1-Regular_web_0';
    src: url('../../fonts/Formula1-Regular_web_0.eot'),
      url('../../fonts/Formula1-Regular_web_0.eot?#') format('embedded-opentype'),
      url('../../fonts/Formula1-Regular_web_0.ttf') format('ttf'),
      url('../../fonts/Formula1-Regular_web_0.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
}

`
