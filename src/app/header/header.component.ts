import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Gallifrey 2024";
  rocketName: string = "TARDIS X";
  editingMission: boolean = false;
  editingRocketName: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }
  updateRocketName(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocketName = false;
  }

}
