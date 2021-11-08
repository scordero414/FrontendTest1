import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/interfaces/patient';
import { PatientService } from '../patient.service';




@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'breed', 'picture', 'contactPhone', 'contactPerson', 'createdAt'];
  dataSource!: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(patients => this.dataSource = patients);
  }

}
