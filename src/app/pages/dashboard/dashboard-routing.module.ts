import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { } 