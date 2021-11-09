import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from 'src/app/shared/interfaces/patient';
import { Visit } from 'src/app/shared/interfaces/visit';

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

    // @ViewChild('picker') date!: ElementRef;

    constructor(public dialogRef: MatDialogRef<Dialog>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            date:null,
            reason: ['', [Validators.required]],
            medicationProvided: ['', [Validators.required]],
            // doctor: ['', [Validators.required]]
        });
    }

    createVisit() {
        console.log(this.form)
    }


    onNoClick(): void {
        this.dialogRef.close();
    }
}
