import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Patient } from 'src/app/shared/interfaces/patient';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    form!: FormGroup;
    isImageSaved: boolean = false;
    cardImageBase64: string = "Base64...";

    patient!: Patient;

    constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            age: ['', [Validators.required]],
            breed: ['', [Validators.required]],
            // picture: ['', [Validators.required]],
            contactPhone: ['', [Validators.required]],
            contactPerson: ['', [Validators.required]],
        });
    }

    addPatient(): void {
        this.patient = {... this.patient,
            id: Date.now(),
            name: this.form.value.name,
            age: this.form.value.age,
            breed: this.form.value.breed,
            // picture: this.form.value.picture,
            contactPhone: this.form.value.conctactPhone,
            contactPerson: this.form.value.contactPerson,
            createdAt: new Date()
        }
        console.log(this.patient);
    }

    handleUpload(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file as Blob);
        reader.onloadend = () => {
            this.isImageSaved = true;
            this.cardImageBase64 = reader.result as string;
            this.patient = { ...this.patient, picture: reader.result as string };
        };
    }

}
