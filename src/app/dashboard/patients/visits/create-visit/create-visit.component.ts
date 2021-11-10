import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorsService } from 'src/app/dashboard/doctors/services/doctors.service';
import { Doctor } from 'src/app/shared/interfaces/doctor';
import { Patient } from 'src/app/shared/interfaces/patient';
import { Visit } from 'src/app/shared/interfaces/visit';
import { PatientService } from '../../services/patient.service';

@Component({
    selector: 'app-create-visit',
    templateUrl: './create-visit.component.html',
    styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit {

    @Input() patient!: Patient;

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
        console.log(this.patient.name)
    }
    openDialog(patient: Patient): void {
        const dialogRef = this.dialog.open(Dialog, {
            // width: '400px',
            data: { patient },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }

}


@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.html',
    styleUrls: ['./create-visit.component.css']
})
export class Dialog implements OnInit {

    form!: FormGroup;
    doctors!: Doctor[];
    patient!: Patient;

    // @ViewChild('picker') date!: ElementRef;

    constructor(public dialogRef: MatDialogRef<Dialog>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private doctorsService: DoctorsService, private patientService: PatientService, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            date: null,
            reason: ['', [Validators.required]],
            medicationProvided: ['', [Validators.required]],
            doctor: ['', [Validators.required]]
        });
        console.log(this.data.patient)
    }

    createVisit() {
        const visit: Visit = {
            date:this.form.value.date,
            reason: this.form.value.reason,
            medicationProvided: this.form.value.medicationProvided,
            doctor: this.form.value.doctor
        }

        let arrVisits: Visit[] = this.data.patient.visits;
        arrVisits.push(visit);

        this.patient = {...this.data.patient, visits: arrVisits}
        this.patientService.editPatient(this.patient).subscribe(res => {
            this.openSnackBar("Visit successfully created");
            this.onNoClick();
        });
    }

    loadDoctors(){
        this.doctorsService.getDoctorByScheduleDay(this.getDayOfDate(this.form.value.date)).subscribe(doctors => {
            this.doctors = doctors;
        });
    }
    openSnackBar(str: string ) {
        this._snackBar.open(str, "Ok", {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            
        });
    }


    getDayOfDate(date: Date): string{
        let day: string = "";
        switch (date.getDay()) {
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            case 7:
                day = "Sunday";
                break;
        }
        return day;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
