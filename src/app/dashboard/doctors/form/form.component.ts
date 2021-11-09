import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';
import { Doctor } from 'src/app/shared/interfaces/doctor';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    

    form!: FormGroup;
    daysOfWeek: string[] = ['Monday', 'Thuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];

    @Output() createdDoctor  = new EventEmitter<Doctor>();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required]],
            selectedDays: ''
        });
    }
    addDoctor(): void {
        const doctor: Doctor = {
            id: Date.now(),
            name: this.form.value.name,
            phone: this.form.value.phoneNumber,
            schedule: this.form.value.selectedDays,
            createdAt: new Date()
        }
        this.createdDoctor.emit(doctor);
    }

    onListSelectionChange(ob: MatSelectionListChange) {
        console.log("Selected Item: " + ob.source.selectedOptions.selected.length);
    }

}
