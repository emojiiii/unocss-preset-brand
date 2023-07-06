import { TinyColor } from "@ctrl/tinycolor";
/**
 * Mix the current color a given amount with another color, from 0 to 100. 0 means no mixing (return current color).
 * @param color
 * @param amount 0-100
 * @returns
 */
export declare function darken(color: TinyColor, amount?: number): string;
export declare const lighten: (color: TinyColor, amount?: number) => string;
/**
 * get mix color
 * @param color
 * @param weight 0-100
 * @returns
 */
export declare const getMixColor: (color: TinyColor, weight: number) => string;
/**
 * generate weighted colors
 * @param color
 * @returns
 */
export declare const generateWeightedColors: (color: TinyColor) => {
    weight: number;
    color: string;
}[];
