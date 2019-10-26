import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-crew',
    templateUrl: './crew.component.html',
    styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

    memberBeingEdited: object = null;

    crew: object[] = [
        {name: "Rose Tyler", firstMission: false},
        {name: "Martha Jones", firstMission: false},
        {name: "Amy Pond", firstMission: true}
    ];

    constructor() { }

    ngOnInit() {
    }

    addCrew(memberName: string, isFirst: boolean) {
        for (let c = 0; c < this.crew.length; c++) {
            if (this.crew[c]['name'] === memberName) {
                alert("Member already added to crew.");
                return;
            } 
        }
        this.crew.push({name: memberName, firstMission: isFirst});
    }

    removeCrew(member: object) {
        let index = this.crew.indexOf(member);
        this.crew.splice(index, 1);
    }

    editCrew(member: object) {
        this.memberBeingEdited = member;
    }

    saveCrew(name: string, member: object) {
        member['name'] = name;
        this.memberBeingEdited = null;
    }

}
