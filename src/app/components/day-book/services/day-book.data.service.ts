import { Injectable } from '@angular/core';
import { ApiService } from '~/app/core/services/api.service';
import { Poll } from '~/app/core/models/poll';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()

export class DayBookDataService {

    constructor(private apiService: ApiService,
    ) { }


    get(): Observable<Poll[]> {
        return this.apiService.get('/Polls')
            .pipe(map(( data: Poll[] ) => data));
    }
}
