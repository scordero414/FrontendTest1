import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor } from 'src/app/shared/interfaces/doctor';
import { DoctorsService } from '../doctors.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    showAdd: boolean = false;

    doctors!: Doctor[];


    constructor(private doctorService: DoctorsService) { }

    ngOnInit(): void {
        this.getDoctors();
    }

    getDoctors(): void {
        this.doctorService.getDoctors().subscribe(doctors => this.doctors = doctors);
        console.log(this.doctors)

    }

    addDoctor(doctor: Doctor): void {
        this.doctorService.createDoctor(doctor).subscribe(response => {
            this.doctors.push(response);
            this.setShow();
            console.log(this.doctors);
        });
    }
    setShow() {
        this.showAdd = !this.showAdd;
    }
    deleteDoctor(id: number): void {
        this.doctorService.deleteDoctor(id).subscribe(response => {
            this.getDoctors();
        })
    }
}


