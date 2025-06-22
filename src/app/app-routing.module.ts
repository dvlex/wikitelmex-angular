import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DieseltankListComponent } from './dieseltank/dieseltank-list/dieseltank-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/dieseltank', pathMatch: 'full'},
  {path: 'dieseltank', component: DieseltankListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
