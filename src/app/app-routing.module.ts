import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillerComponent } from './biller/biller.component';
import { BillComponent } from './bill/bill.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'billers',
    component: BillerComponent
  },
  {
    path: 'bill',
    component: BillComponent
  },
  {
    path: '',
    redirectTo: '/bill',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
