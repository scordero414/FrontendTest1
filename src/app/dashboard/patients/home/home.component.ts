import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/interfaces/patient';
import { PatientService } from '../services/patient.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    showAdd: boolean = false;
    patients!: Patient[];

    constructor(private patientService: PatientService) { }

    ngOnInit(): void {
        this.getPatients();
    }

    getPatients(): void {
        this.patientService.getPatients().subscribe(patients => this.patients = patients);
    }

    setShow() {
        this.showAdd = !this.showAdd;
    }

    addPatient(patient: Patient): void {
        this.patientService.createPatient(patient).subscribe(response => {
            this.getPatients();
            this.setShow();
        });
    }
    deletePatient(id: number): void {
        this.patientService.deletePatient(id).subscribe(response => {
            this.getPatients();
        })
    }

}
