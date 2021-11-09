import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { CreateVisitComponent } from './visits/create-visit/create-visit.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: CreateComponent },
    // { path: 'createVisit', component: CreateVisitComponent },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientsRoutingModule { }
