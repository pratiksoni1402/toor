import { Tangerine, Crimson_Pro, Roboto, Hind, Lora, Kalam, Jost } from "next/font/google";

export const TANGERINE = Tangerine({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
    style: ['normal'],
    variable: '--logo-font-tangerine'
});

export const CRIMSON = Crimson_Pro({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    variable: '--heading-font-crimson',
});

export const ROBOTO = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '700', '900'],
    style: ['normal'],
    variable: '--font-roboto',
});

export const HIND = Hind({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    variable: '--engrave-font-hind',
});

export const LORA = Lora({
    subsets:['latin'],
    display:'swap',
    weight: ['400', '500', '600', '700'],
    style:['normal'],
    variable:'--engrave-font-lora',
});

export const KALAM = Kalam({
    subsets:['latin'],
    display:'swap',
    weight:['300', '400', '700'],
    style:['normal'],
    variable:'--engrave-font-kalam',
});

export const JOST = Jost({
    subsets:['latin'],
    display:'swap',
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style:['normal'],
    variable:'--font-jost',
});


