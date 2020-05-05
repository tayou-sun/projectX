import { Injectable } from '@angular/core';
import { ApiService } from '~/app/core/services/api.service';
import { Poll } from '~/app/core/models/poll';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '~/app/core/models/profile';
@Injectable()

export class ProfileDataService {

    constructor(private apiService: ApiService
    ) { }


    post(id: number): Observable<Profile> {
        return this.apiService.post('/PollResults', { pollId: id });
    }

    getProfileQuestion(id: number): Observable<Poll> {
        return this.apiService.get(`/PollResults/${id}/NextQuestion`);
    }

    postProfileQuestion(id: number, questionId: number, questionItemId: number): Observable<Profile> {
        return this.apiService.post(`/PollResults/${id}/NextQuestion`, {
            questionId: questionItemId,
            questionItemId: questionId
        });
    }

}
