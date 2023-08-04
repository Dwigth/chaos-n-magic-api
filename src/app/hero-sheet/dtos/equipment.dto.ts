import { ApiProperty } from "@nestjs/swagger";
import { ExamplesEnum } from "app/hero-sheet/enums/examples.enum";
import { exampleEquipments } from "app/hero-sheet/maps/example-equipments.map";
import { Bag } from "app/hero-sheet/types/bag.type";
import { Equipment } from "app/hero-sheet/types/equipment.type";
import { Weapon } from "app/hero-sheet/types/weapon.type";
import { IsArray } from "class-validator";

const equipmentExample = exampleEquipments.get(ExamplesEnum.SwaggerExample);

export class EquipmentDto {
    @ApiProperty({
        description: 'Hat',
        example: 'This is a hat'
    })
    hat: string;

    @ApiProperty({
        example: [{
            weaponName: 'Gun',
            hasAttack: {
                name: '',
                damage: '1dcm',
                damageType: 'P',
                energy: 3
            }
        }]
    })
    @IsArray()
    weapons: Weapon[];

    @ApiProperty({
        example: equipmentExample
    })
    armor: Equipment;

    @ApiProperty({
        example: equipmentExample
    })
    mask: Equipment;

    @ApiProperty({
        example: equipmentExample
    })
    cape: Equipment;

    @ApiProperty({
        example: equipmentExample
    })
    necklace: Equipment;

    @ApiProperty({
        example: equipmentExample
    })
    bracelet: Equipment;

    @ApiProperty({
        example: [equipmentExample]
    })
    @IsArray()
    ring: Equipment[];

    @ApiProperty({
        example: equipmentExample
    })
    boots: Equipment;

    @ApiProperty({
        example: equipmentExample
    })
    special: Equipment;

    @ApiProperty({
        example: [{
            bagName: 'Magic Bag',
            equipped: false
        }],
        description: 'Collection of bags'
    })
    @IsArray()
    bags: Bag[]
}