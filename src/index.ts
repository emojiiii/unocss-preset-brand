import type { Preset } from '@unocss/core';
import { TinyColor } from '@ctrl/tinycolor'
import { generateWeightedColors } from './utils';

export interface IPresetBrandOptions {
    /** custom brand color  */
    brand: {
        [key: string]: string
    }
}

export default function (options: IPresetBrandOptions): Preset {
    const { brand } = options
    let str = ''
    const colorsMap: Record<string, string> = {}
    Object.keys(brand).forEach(key => {
        const color = new TinyColor(brand[key])
        colorsMap[key] = `var(--uno-brand-${key})`
        const rgba = color.toRgbString()
        str += `--uno-brand-${key}: ${rgba};\n`
        str += generateWeightedColors(color).map((c) => {
            const property = `--uno-brand-${key}-${c.weight}`
            const value = c.color
            colorsMap[`${key}-${c.weight}`] = `var(${property})`
            // colorsMap[`${key}-${c.weight / 100}`] = `var(${property})`
            return `${property}: ${value};\n`
        }).join('')
    })

    return {
        name: '@unocss/preset-brand',
        theme: {
            colors: {
                ...colorsMap
            }
        },
        preflights: [
            {
                getCSS: () => {
                    return `
                        :root {
                            ${str}
                        }
                    `
                }
            }
        ],
    }
}