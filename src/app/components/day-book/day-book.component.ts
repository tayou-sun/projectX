import { Component, OnInit } from '@angular/core';
import { ProblemsDataService } from '~/app/core/services/problem.data.service';
import { DayBookDataService } from './services/day-book.data.service';
import { Poll } from '~/app/core/models/poll';
import { ProfileDataService } from './services/profile.data.service';
import { Profile } from '~/app/core/models/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from '~/app/environments/environment';

@Component({
  selector: 'ns-day-book',
  templateUrl: './day-book.component.html',
  styleUrls: ['./day-book.component.css']
})
export class DayBookComponent implements OnInit {

  constructor(
    private dayBookDataService: DayBookDataService,
    private profileDataService: ProfileDataService,
    private http: HttpClient) { }

  polls: Poll[] = [];
  profile: Profile;
  ngOnInit(): void {
    this.dayBookDataService.get()
      .subscribe((polls: Poll[]) => {
        this.polls = polls;
      });
  }

  createProfile(id) {
    this.http.post(environment.apiUrl+"/PollResults", 2).subscribe((profile: Profile)=>{
      this.profile = profile;
    })
  }
}
