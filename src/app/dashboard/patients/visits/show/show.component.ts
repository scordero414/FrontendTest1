import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { Patient } from 'src/app/shared/interfaces/patient';
import { Visit } from 'src/app/shared/interfaces/visit';
import { ExcelService } from '../../services/excel.service';

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

    @Input() patient!: Patient;

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
    }
    openDialog(patient: Patient): void {
        const dialogRef = this.dialog.open(DialogVisit, {
            width: '600px',
            data: { patient },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }

}


@Component({
    selector: 'app-dialog-visit',
    templateUrl: 'dialog-visit.html',
    styleUrls: ['./show.component.css']
})
export class DialogVisit implements OnInit {

    visits!: Visit[];
    @ViewChild(MatAccordion) accordion!: MatAccordion;

    constructor(public dialogRef: MatDialogRef<DialogVisit>, @Inject(MAT_DIALOG_DATA) public data: any, private excelService:ExcelService) { }

    ngOnInit(): void {
        this.visits = this.data.patient.visits;
        console.log(this.visits);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    exportAsXLSX(visit:Visit): void {
        let arr: Visit[] = [];
        arr.push(visit)
        this.excelService.exportAsExcelFile(arr, 'sample');
    }
}

