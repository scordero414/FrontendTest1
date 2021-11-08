import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/shared/interfaces/patient';
import { PatientService } from '../patient.service';




@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'breed', 'picture', 'contactPhone', 'contactPerson', 'createdAt'];
  @Input() dataSource!: Patient[];
  @Output() idDelete = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  deletePatient(id: number): void {
    this.idDelete.emit(id);
  }

}
