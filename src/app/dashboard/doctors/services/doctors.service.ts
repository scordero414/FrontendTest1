import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Doctor } from 'src/app/shared/interfaces/doctor';

@Injectable({
    providedIn: 'root'
})
export class DoctorsService {

    private doctorsUrl = 'api/doctors/';

    constructor(private http: HttpClient) { }

    getDoctors(): Observable<Doctor[]> {
        return this.http.get<Doctor[]>(this.doctorsUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        );
    }

    getDoctorByScheduleDay(day: string): Observable<Doctor[]> {
        return this.http
          .get<Doctor[]>(`${this.doctorsUrl}/?schedule.includes(${day})`)
          .pipe(
            map(data => {
              return data.filter(filt => filt.schedule.includes(day));
            }),
            catchError((error: HttpErrorResponse) => {
              console.error(error);
              return throwError(error);
            })
          );
      }

    createDoctor(doctor: Doctor): Observable<Doctor> {

        return this.http.post<Doctor>(this.doctorsUrl, doctor).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        )
    }

    editDoctor(doctor: Doctor): Observable<any> {
        return this.http.put(this.doctorsUrl + doctor.id, doctor);
    }

    deleteDoctor(id: number): Observable<any> {
        return this.http.delete(this.doctorsUrl + id);
    }
}
