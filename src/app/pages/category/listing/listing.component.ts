import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { DataService } from './../../../shared/services/data.service'

@Component({
  selector: 'ngx-listing',
  styleUrls: ['./listing.component.scss'],
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  category: any;
  subcategory: any;

  constructor(
    private menuService: NbMenuService,
    private _dataService: DataService,
  ) {
    
  }

  ngOnInit() {
    this.getAllCategory();
    // this.getAllSubCategory();
  }

  getAllCategory() {
    this._dataService.getData(`${environment.BASE_API_PATH}getAllCategories`).subscribe(res => {
      if (!res.error) {
        this.category = res.data;
      }
    });
  }

  getAllSubCategory() {
    // this.spinner.show();
    this._dataService.getData(`${environment.BASE_API_PATH}getAllSubCategories`).subscribe(res => {
      if (!res.error) {
        this.subcategory = res.data;
      }
    });
  }

}
