import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Patient } from 'src/app/shared/interfaces/patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  private patientsUrl = 'api/patients/';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createPatient(patient: Patient): Observable<Patient> {
    
    return this.http.post<Patient>(this.patientsUrl, patient).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editPatient(patient: Patient): Observable<any> {
    return this.http.put(this.patientsUrl + patient.id, patient);
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete(this.patientsUrl + id);
  }
}