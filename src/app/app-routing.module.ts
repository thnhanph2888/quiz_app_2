import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionComponent} from './component/question/question.component';
import {HomeComponent} from './component/home/home.component';
import {ReviewComponent} from './component/review/review.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'question/list',
    component: QuestionComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
