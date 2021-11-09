import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    

    form!: FormGroup;
    daysOfWeek: string[] = ['Monday', 'Thuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];

    onListSelectionChange(ob: MatSelectionListChange) {
        console.log("Selected Item: " + ob.source.selectedOptions.selected.length);
    }

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required]],
            selectedDays: ''
        });
    }
    addDoctor(): void {
        // console.log(this.select.selectedOptions);
        console.log(this.form.value);
    }


}
