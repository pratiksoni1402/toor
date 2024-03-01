import { Italiana, Lora, Andika } from "next/font/google";

export const ITALIANNO = Italiana({
    subsets: ['latin'],
    display: 'swap',
    weight: [ '400' ],
    style: ['normal'],
    variable: '--logo-font-italiana',
})

export const LORA = Lora({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--heading-font-lora',
})

export const ANDIKA = Andika({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--text-font-andika',
})


