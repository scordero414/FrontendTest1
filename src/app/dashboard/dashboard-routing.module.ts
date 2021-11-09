import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: 'patients', loadChildren: () => import('./patients/patients.module').then(x => x.PatientsModule) },
            { path: 'doctors', loadChildren: () => import('./doctors/doctors.module').then(x => x.DoctorsModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
