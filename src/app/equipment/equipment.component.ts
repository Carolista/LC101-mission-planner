import { Component, OnInit } from '@angular/core';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

    pieceBeingEdited: string = null;

    equipment: string[] = ["sonic screwdriver", "hair spray", "coat"]; 

    constructor() { }

    ngOnInit() {
    }

    addEquip(equipName: string) {
        for (let c = 0; c < this.equipment.length; c++) {
            if (this.equipment[c] === equipName) {
                alert("Equipment already included.");
                return;
            } 
        }
        this.equipment.push(equipName);
    }

    removeEquip(piece: string) {
        let index = this.equipment.indexOf(piece);
        this.equipment.splice(index, 1);
    }

    editEquip(piece: string) {
        this.pieceBeingEdited = piece;
    }

    saveEquip(name: string, piece: string) {
        this.equipment[this.equipment.indexOf(piece)] = name;
        this.pieceBeingEdited = null;
    }
}
