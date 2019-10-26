import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-crew',
    templateUrl: './crew.component.html',
    styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

    inCrew: boolean = false; // use this instead?
    crew: object[] = [];
    showPhoto: boolean = false;
    currentPhoto: string = "";

    candidates: object[] = [
        {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
        {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
        {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
        {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
        {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
        {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
        {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
    ];

    constructor() { }

    ngOnInit() { }

    isCrewMember(member): boolean {
        if (this.crew.includes(member)) {
            return true;
        } else {
            return false;
        }
    }

    moveCrewMember(member): any {
        if (!this.isCrewMember(member) && this.crew.length < 3) {
            this.crew.push(member);
        } else if (this.isCrewMember(member)) {
            this.crew.splice(this.crew.indexOf(member),1);
        } else {
            alert("Crew complement at maximum");
        }
    }

    nameMouseover(astronaut): any {
        this.showPhoto = true;
        this.currentPhoto = this.crew[astronaut]['photo'];
    }

    nameMouseout(): any {
        this.showPhoto = false;
        this.currentPhoto = "";
    }

}
