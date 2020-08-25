import { LedgerComponent } from './ledger/ledger.component';
import { ProjectoneComponent } from './projectone/projectone.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'project1', component: ProjectoneComponent },
  { path: 'ledger', component: LedgerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
