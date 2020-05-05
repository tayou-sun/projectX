import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '~/app/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()

export class ProblemsDataService {

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get(`${environment.apiUrl}/Problems`)
            .pipe(catchError(this.formatErrors));
    }
}
