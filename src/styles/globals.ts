import { createGlobalStyle } from 'styled-components'

import { styledCssReset } from './cssReset'

export const GlobalStyles = createGlobalStyle`
  ${styledCssReset}


  body {
    font-family: 'SoDo Sans';
  }

  @font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-BlackItalic.woff2') format('woff2'),
        url('../../fonts/SoDoSans-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-Black.woff2') format('woff2'),
        url('../../fonts/SoDoSans-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-Bold.woff2') format('woff2'),
        url('../../fonts/SoDoSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src:
        url('../../fonts/SoDoSans-LightItalic.woff2') format('woff2'),
        url('../../fonts/SoDoSans-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-Regular.woff2') format('woff2'),
        url('../../fonts/SoDoSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-Light.woff2') format('woff2'),
        url('../../fonts/SoDoSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-Italic.woff2') format('woff2'),
        url('../../fonts/SoDoSans-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-BoldItalic.woff2') format('woff2'),
        url('../../fonts/SoDoSans-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src:
        url('../../fonts/SoDoSans-ThinItalic.woff2') format('woff2'),
        url('../../fonts/SoDoSans-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-SemiBoldItalic.woff2') format('woff2'),
        url('../../fonts/SoDoSans-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-Thin.woff2') format('woff2'),
        url('../../fonts/SoDoSans-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: 
        url('../../fonts/SoDoSans-SemiBold.woff2') format('woff2'),
        url('../../fonts/SoDoSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}


`
