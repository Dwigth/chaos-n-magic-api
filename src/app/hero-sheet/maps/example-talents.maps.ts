import { Talent } from "app/hero-sheet/types/talent.type";

export const exampleTalents = new Map<string, Talent>([
    [
        'SwaggerExample',
        {
            name: 'Armorer',
            effect: 'You can choose a melee weapon, you know how to use this weapon, and you add +1dcm (dice roll modifier) to your melee attacks with the weapon you choose.'
        }
    ]
])