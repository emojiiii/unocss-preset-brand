import { TinyColor } from "@ctrl/tinycolor"

const DEFAULT_WEIGHTS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

/**
 * Mix the current color a given amount with another color, from 0 to 100. 0 means no mixing (return current color).
 * @param color 
 * @param amount 0-100
 * @returns 
 */
export function darken(color: TinyColor, amount = 20) {
    return color.mix('#141414', amount).toRgbString()
}

export const lighten = (color: TinyColor, amount = 20) => {
    return color.mix('#ffffff', amount).toRgbString()
}

/**
 * get mix color
 * @param color 
 * @param weight 0-100 
 * @returns 
 */
export const getMixColor = (color: TinyColor, weight: number) => {

    if (weight > 500) {
        return darken(color, (weight - 500) / 10)
    } else if(weight < 500){
        return color.tint((1000 - weight) / 10).toRgbString()
    } else {
        return color.toRgbString()
    }
}

/**
 * generate weighted colors
 * @param color 
 * @returns 
 */
export const generateWeightedColors = (color: TinyColor) => {
    return DEFAULT_WEIGHTS.map(weight => ({
        weight,
        color: getMixColor(color,  weight)
    }))
}
