import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experiments',
    templateUrl: './experiments.component.html',
    styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

    expBeingEdited: string = null;

    experiments: string[] = ["randomized time travel", "empathetic Daleks", "Ood song recordings"]; 
    constructor() { }

    ngOnInit() {
    }

    addExp(expName: string) {
        for (let c = 0; c < this.experiments.length; c++) {
            if (this.experiments[c] === expName) {
                alert("Experiment already included.");
                return;
            } 
        }
        this.experiments.push(expName);
    }

    removeExp(exp: string) {
        let index = this.experiments.indexOf(exp);
        this.experiments.splice(index, 1);
    }

    editExp(exp: string) {
        this.expBeingEdited = exp;
    }

    saveExp(name: string, exp: string) {
        this.experiments[this.experiments.indexOf(exp)] = name;
        this.expBeingEdited = null;
    }

}
