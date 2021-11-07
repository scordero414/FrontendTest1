import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CreateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
