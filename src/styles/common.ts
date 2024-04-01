import { theme } from './theme'

type fontPropsType = {
  color?: string
  family?: string
  lineHeight?: string
  maxSize?: number
  minSize?: number
  weight?: number
}
export const font = ({ color, family, lineHeight, maxSize, minSize, weight }: fontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${maxSize} - ${minSize}) + ${minSize}px);    
`
