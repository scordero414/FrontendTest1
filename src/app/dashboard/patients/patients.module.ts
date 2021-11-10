import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ShowListComponent } from './show-list/show-list.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from 'src/app/data.service';
import { ShowComponent, DialogVisit} from './visits/show/show.component';
import { CreateVisitComponent, Dialog } from './visits/create-visit/create-visit.component';


@NgModule({
  declarations: [
    CreateComponent,
    HomeComponent,
    ShowListComponent,
    ShowComponent,
    CreateVisitComponent,
    Dialog,
    ShowComponent,
    DialogVisit
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule, 
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class PatientsModule { }
