import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileDataService } from '../../services/profile.data.service';
import { Profile } from '~/app/core/models/profile';
import { Poll } from '~/app/core/models/poll';
import { registerElement, RouterExtensions } from 'nativescript-angular';

var rp = require("nativescript-ripple");
registerElement("Ripple", () => rp.Ripple);

@Component({ 
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private routeSubscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private dataService: ProfileDataService,
    private router: RouterExtensions) {

    this.routeSubscription = route.params.subscribe(params => this.currentPoleId = params['id']);
  }

  public currentPoleId: number;
  public currentProfileId: number = 0;
  public questionTitle: string = "";
  public questions: any[] = [];
  public id: number = 0;
  counter: number = 0;
  pageTitle: string = "";

  ngOnInit(): void {
    this.getCurrentProfileId();
  }

  getCurrentProfileId() {
    this.dataService.post(this.currentPoleId).subscribe((poll: Profile) => {
      this.getCurrentProfileQuestion(poll.id);
    })


  }

  getCurrentProfileQuestion(id) {
    this.id = id;
    this.dataService.getProfileQuestion(id).subscribe((poll: Poll) => {
      if (poll != null) {
        this.questions = poll.pollQuestionItems;
        this.questionTitle = poll.title;
        this.counter++;

        this.pageTitle = `Вопрос ${this.counter}`
      }
      else {
        this.router.navigate(["charts"], {clearHistory: true})

      }
    })

  }


  postResult(questionId: number, questionItemId: number) {

    this.dataService.postProfileQuestion(this.id, questionId, questionItemId).subscribe(_ => {
      this.getCurrentProfileQuestion(this.id);
    })
  }
}
