import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Poll } from '~/app/core/models/poll';
import { DayBookDataService } from './day-book.data.service';

@Injectable()
export class DayBookResolver implements Resolve<Poll> {
  constructor(
    private articlesService: DayBookDataService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.articlesService.get()
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
