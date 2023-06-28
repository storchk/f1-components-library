import { size } from './size'

export type BorderWidthType = {
  small: string
  large: string
}

export type BorderType = {
  width: BorderWidthType
  radius: string
}
export const border: BorderType = {
  width: {
    small: '2px',
    large: '4px',
  },
  radius: `${size.xxs}px`,
}
