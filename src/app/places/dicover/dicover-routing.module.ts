import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicoverPage } from './dicover.page';

const routes: Routes = [
  {
    path: '',
    component: DicoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicoverPageRoutingModule {}
