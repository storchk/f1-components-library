import { size } from './size'
export type BorderType = {
  width: string
  radius: string
}

export const border: BorderType = {
  width: '1px',
  radius: `${size.xxl}px`,
}
