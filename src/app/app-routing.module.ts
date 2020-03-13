import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrewComponent } from './crew/crew.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExperimentsComponent } from './experiments/experiments.component';

const routes: Routes = [
    {path: 'crew' , component: CrewComponent},
    {path: 'equipment' , component: EquipmentComponent},
    {path: 'experiments' , component: ExperimentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }