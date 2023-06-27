export const colors = {
  black: '#000000',
  white: '#ffffff',
  neutral: '#f9f9f9',
  warmNeutral: '#f2f0eb',
  ceramic: '#edebe9',
  primary: '#006241',
  primaryAccent: '#00754A',
  primaryLight: '#d4e9e2',
  primaryDark: '#1E3932',
  gold: '#cba258',
  goldLight: '#dfc49d',
  goldLightes: '#faf6ee',
  error: '#d62b1f',
  warning: '#fbbc05',
  textDark: 'rgba(0, 0, 0, .87)',
  textDarkSoft: 'rgba(0, 0, 0, .58)',
  textWhite: 'rgba(255, 255, 255, 1)',
  textWhiteSoft: 'rgba(255, 255, 255, .70)',
}

export type ColorsType = {
  [color in keyof typeof colors]: string
}
