import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayBookComponent } from './day-book.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{
    path: '',
    component: DayBookComponent,
    children: [
      {
        path: 'profile/:id',
        component: ProfileComponent
      }
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayBookRoutingModule {}
