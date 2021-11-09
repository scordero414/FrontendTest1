import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from 'src/app/shared/interfaces/doctor';

@Component({
    selector: 'app-show-list',
    templateUrl: './show-list.component.html',
    styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {


    displayedColumns: string[] = ['name', 'phone', 'schedule'];
    @Input() dataInput!: Doctor[];
    @Output() idDelete = new EventEmitter<number>();
    // dataSource!: MatTableDataSource<Doctor>;
    @ViewChild(MatAccordion) accordion!: MatAccordion;
    // @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor() { }

    ngOnInit(): void {
        // this.dataSource = new MatTableDataSource<Doctor>(this.dataInput);
        console.log(this.dataInput)
    }
    deleteDoctor(id: number){
        this.idDelete.emit(id);
    }

}
