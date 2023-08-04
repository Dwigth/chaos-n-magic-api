import { ExamplesEnum } from "app/hero-sheet/enums/examples.enum";
import { Equipment } from "app/hero-sheet/types/equipment.type";

export const exampleEquipments = new Map<string, Equipment>([
    [ExamplesEnum.SwaggerExample, {
        name: 'Test equipment',
        effect: 'Test effect',
    }]
]);