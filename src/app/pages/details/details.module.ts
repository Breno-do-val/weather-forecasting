import { DetailsGuard } from './services/details.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from './containers/details/details.page';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '', component: DetailsPage, canActivate: [ DetailsGuard]
  }
]

@NgModule({
  declarations: [DetailsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DetailsGuard
  ]
})
export class DetailsModule { }
