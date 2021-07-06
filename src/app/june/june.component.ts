import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';
import juneLineJson from '../juneline.json';
import juneJsonJson from '../june.json';

@Component({
  selector: 'app-june',
  templateUrl: './june.component.html',
  styleUrls: ['./june.component.css'],
})
export class JuneComponent implements OnInit {
  june: any = juneJsonJson;
  juneline: any = juneLineJson;
  term = '';
  searchline = '';

  constructor(
    private service: DatafetchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onEdit(): any {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  getJuneLine = () => {
    //tslint:disable
    this.juneline.sort((a, b) =>
      b['Order - Number'] > a['Order - Number']
        ? 1
        : a['Order - Number'] > b['Order - Number']
        ? -1
        : 0
    );
  };

  getJune = () => {
    //tslint:disable
    this.june.sort((a, b) =>
      b['Order - Number'] > a['Order - Number']
        ? 1
        : a['Order - Number'] > b['Order - Number']
        ? -1
        : 0
    );
  };
}
