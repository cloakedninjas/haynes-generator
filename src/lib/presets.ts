import type { CoverFields } from '../App.tsx';

export const swatches: string[] = [
    '#8f083c',
    '#cc0449',
    '#cc6b19',
    '#047a30',
    '#6cbb92',
    '#9112c5',
    '#10394c',
    '#4457b5',
    '#61685e',
    '#241f21',
];

export const presets: CoverFields[] = [
    {
        make: "Ford",
        model: "Capri",
        variant: `All V6 models (including Series III)
1974 to 1998 ▢ 2792 cc ▢ 2994 cc`,
        bookType: "Owners Workshop Manual",
        image: "/ford-capri.png",
        background: swatches[0]
    }, {
        make: "Morris",
        model: "Minor 1000",
        variant: "All models (1956 to 1971)\n▢ 948 cc ▢ 1098 cc",
        bookType: "Owners Workshop Manual",
        image: "/morris-minor-1000.png",
        background: swatches[7]
    }, {
        make: "U.S.S.",
        model: "Enterprise",
        variant: "2151 onwards\n▢ NCC-1701-A to NCC-1701-D",
        bookType: "Owners Workshop Manual",
        image: "/uss-enterprise.png",
        background: swatches[6]
    }, {
        make: "Lockheed Martin",
        model: "F22 Raptor",
        variant: "F/A-22▢ Lightning II",
        bookType: "Owners Workshop Manual",
        image: "/f22.png",
        background: swatches[6]
    }, {
        make: "Bernese",
        model: "Mountain Dog",
        variant: "Tri-color boofer",
        bookType: "Owners Kennel Manual",
        image: "/bernese.png",
        background: swatches[2]
    }
];
