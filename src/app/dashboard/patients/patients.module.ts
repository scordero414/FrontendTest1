import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ShowListComponent } from './show-list/show-list.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    HomeComponent,
    ShowListComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule, 
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class PatientsModule { }
