import { Component, OnInit } from '@angular/core';
import augustShipping from '../octobershipping.json';
import augustLineJson from '../octoberlineitem.json';
@Component({
  selector: 'app-october',
  templateUrl: './october.component.html',
  styleUrls: ['./october.component.css'],
})
export class OctoberComponent implements OnInit {
  augustShipping: any = augustShipping;
  augustline: any = augustLineJson;
  term = '';
  searchline = '';
  constructor() {}

  ngOnInit(): void {
    this.getJuly();
    console.log(this.augustShipping);

    this.getJulyLine();
  }
  onEdit(): any {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  getJulyLine = () => {
    //tslint:disable
    this.augustline.sort((a, b) =>
      b['Order - Number'] > a['Order - Number']
        ? 1
        : a['Order - Number'] > b['Order - Number']
        ? -1
        : 0
    );
  };

  getJuly = () => {
    //tslint:disable
    this.augustShipping.sort((a, b) =>
      b['__1'] > a['__1'] ? 1 : a['__1'] > b['__1'] ? -1 : 0
    );
  };
}
