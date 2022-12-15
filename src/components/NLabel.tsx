import './NLabel.css'

export interface NLabelProps {
    /**
     * Label contents
     */
    label: string,
    /**
     * How big should the text be?
     */
    size: 'normal'|'h1'|'h2'|'h3',
    /**
     * Do you want your text capitzalized?
     */
    allCaps?: boolean,
    /**
     * Whick color do you like the most?
     */
    color?: 'primary'|'secondary'|'tertiary',
    /**
     * Label font color
     */
    fontColor?: string,
}

/**
 * Primary UI component for user interaction
 */
export const NLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No label',
    size    = 'normal',
    fontColor
}: NLabelProps) => {
  return (
    <span 
        className={`label ${size} text-${color}`} 
        style={{color: fontColor}}
    >
        {allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default NLabel