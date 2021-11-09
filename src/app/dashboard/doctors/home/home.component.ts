import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor } from 'src/app/shared/interfaces/doctor';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    constructor() { }

    ngOnInit(): void {
    }

    addDoctor(doctor: Doctor): void {
        // this.doctorService.createPatient(doctor).subscribe(response => {
        //     this.getDoctors();
        //     this.setShow();
        // });
        console.log(doctor);
    }
}


