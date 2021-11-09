import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor } from 'src/app/shared/interfaces/doctor';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() createdDoctorHome = new EventEmitter<Doctor>();

  constructor() { }

  ngOnInit(): void {
  }

  addDoctor(doctor: Doctor): void {
    // console.log(doctor)
    this.createdDoctorHome.emit(doctor);
  }

}
