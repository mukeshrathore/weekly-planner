import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BillComponent } from './bill/bill.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
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
