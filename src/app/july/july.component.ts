import { Component, OnInit } from '@angular/core';
import julyShipping from '../julyshipping.json';
import julyLineJson from '../june.json';

@Component({
  selector: 'app-july',
  templateUrl: './july.component.html',
  styleUrls: ['./july.component.css'],
})
export class JulyComponent implements OnInit {
  julyShipping: any = julyShipping;
  julyline: any = julyLineJson;
  term = '';
  searchline = '';

  constructor() {}

  ngOnInit(): void {
    this.getJuly();
    this.getJulyLine();
  }

  onEdit(): any {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  getJulyLine = () => {
    //tslint:disable
    this.julyline.sort((a, b) =>
      b['Order - Number'] > a['Order - Number']
        ? 1
        : a['Order - Number'] > b['Order - Number']
        ? -1
        : 0
    );
  };

  getJuly = () => {
    //tslint:disable
    this.julyShipping.sort((a, b) =>
      b['__1'] > a['__1'] ? 1 : a['__1'] > b['__1'] ? -1 : 0
    );
  };
}
