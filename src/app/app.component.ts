import { Component } from '@angular/core';
import { DataService } from './data.service'

import * as wjcCore from '@grapecity/wijmo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSet: any; 

  constructor(private dataService: DataService) {
    dataService.getDataSet().subscribe((data) => {
      this.dataSet = new wjcCore.CollectionView(data, {});
    });
  }
}
