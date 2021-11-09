import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ShowListComponent } from './show-list/show-list.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    ShowListComponent,
    FormComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    MaterialModule, 
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class DoctorsModule { }
