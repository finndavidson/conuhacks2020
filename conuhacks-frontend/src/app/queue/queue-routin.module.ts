import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue.component';

const routes: Routes = [
  { path: 'queue', component: QueueComponent }
];



@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class QueueRoutinModule { }
