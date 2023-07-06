import type { Preset } from '@unocss/core';
export interface IPresetBrandOptions {
    /** custom brand color  */
    brand: {
        [key: string]: string;
    };
}
export default function (options: IPresetBrandOptions): Preset;
