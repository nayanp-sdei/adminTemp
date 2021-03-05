import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { NbTabsetModule, NbCardModule } from '@nebular/theme';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  imports: [
    TableModule,
    NbCardModule,
    NbTabsetModule,
    CategoryRoutingModule,
  ],
  declarations: [
    CategoryComponent,
    ListingComponent,
  ],
})
export class CategoryModule { }
