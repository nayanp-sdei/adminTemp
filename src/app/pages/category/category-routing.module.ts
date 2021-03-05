import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
    /* children: [
      {
        path: '404',
        component: ListingComponent,
      },
    ],*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {
}
