import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {SuccessComponent} from './success/success.component';

const routes: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full'},
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


