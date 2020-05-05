import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
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

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataService: ProfileDataService,
    public router: RouterExtensions
    ) {

    this.routeSubscription = route.params.subscribe(params => this.currentPoleId = params['id']);
  }

  public currentPoleId: number;
  public currentProfileId: number = 0;
  public questionTitle: string = "";
  public questions: any[] = [];
  public pollId: number = 0;
  counter: number = 0;
  pageTitle: string = "";

  ngOnInit(): void {
    this.getCurrentProfileId();
  }

  getCurrentProfileId() {
    /*  console.log("-------------",  this.currentPoleId) */
    this.dataService.post(this.currentPoleId).subscribe((poll: Profile) => {
      this.currentProfileId = poll.id;
      this.getCurrentProfileQuestion(poll.id);
    })


  }

  getCurrentProfileQuestion(id) {
    this.pollId = id;
    this.dataService.getProfileQuestion(id).subscribe((poll: Poll) => {
      console.log("-------------sssssssssssss", poll)
      if (poll !== null) {
        this.questions = poll.pollQuestionItems;
        this.questionTitle = poll.title;
        this.counter++;
        
        this.pageTitle = `Вопрос ${this.counter}`
      }
      else {
        this.router.navigate(["char",this.pollId],{ clearHistory: true } );
      }
    })


  }

  onItemTap(event){
    console.log(event)
  }

  postResult(questionId: number, questionItemId: number) {

    this.dataService.postProfileQuestion(this.pollId, questionId, questionItemId).subscribe(_ => {
      console.log("-------------sssssssssssss____id", this.pollId)
      this.getCurrentProfileQuestion(this.pollId);
    })
  }
}
