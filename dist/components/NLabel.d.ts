/// <reference types="react" />
import './NLabel.css';
export interface NLabelProps {
    /**
     * Label contents
     */
    label: string;
    /**
     * How big should the text be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Do you want your text capitzalized?
     */
    allCaps?: boolean;
    /**
     * Whick color do you like the most?
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Label font color
     */
    fontColor?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const NLabel: ({ allCaps, color, label, size, fontColor }: NLabelProps) => JSX.Element;
