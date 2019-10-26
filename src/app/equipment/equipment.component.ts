import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
    equipmentItems: object[] = [
        {name: 'Duct Tape', mass: 0.5},
        {name: 'Space Camera', mass: 20},
        {name: 'Food', mass: 150},
        {name: 'Oxygen Tanks', mass: 400},
        {name: 'AE-35 Unit', mass: 5},
        {name: 'ISS Supplies', mass: 800},
        {name: 'Water', mass: 250},
        {name: 'Satellite', mass: 1200},
        {name: 'R2 Unit', mass: 32}
    ];
    cargoHold: object[] = [];
    cargoMass: number = 0;
    maximumAllowedMass: number = 2000;
    maxItems: number = 10;

    constructor() { }

    ngOnInit() { }

    addItem(equipment: object): boolean {
        this.cargoHold.push(equipment);
        this.cargoMass += this.equipmentItems[this.equipmentItems.indexOf(equipment)]['mass'];
        if (this.nearMaxMass()) {
            return true;
        } else {
            return false;
        }
    }

    massRemaining(): number {
        return this.maximumAllowedMass - this.cargoMass;
    }

    nearMaxMass(): boolean {
        if (this.cargoMass >= this.maximumAllowedMass - 200) {
            return true;
        } else {
            return false;
        }
    }

    exceedsMaxMass(equipment): boolean {
        if (this.cargoMass + equipment.mass > this.maximumAllowedMass) {
            return true;
        } else {
            return false;
        }
    }

    holdFull(): boolean {
        if (this.cargoHold.length === this.maxItems) {
            return true;
        } else {
            return false;
        }
    }

    emptyHold(): any {
        this.cargoHold = [];
        this.cargoMass = 0;
    }

    ineligible(equipment): boolean {
        if (this.holdFull() || this.exceedsMaxMass(equipment)) {
            return true;
        } else {
            return false;
        }
    }
}
