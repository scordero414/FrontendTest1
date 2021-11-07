import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: 'patients', loadChildren: () => import('./patients/patients.module').then(x => x.PatientsModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
