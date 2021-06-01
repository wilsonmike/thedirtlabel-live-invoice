import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-maytodate',
  templateUrl: './maytodate.component.html',
  styleUrls: ['./maytodate.component.css']
})
export class MaytodateComponent implements OnInit {
  may: any = [];
  mayline: any = [];
  term = '';
  searchline = '';

  constructor(private service: DatafetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMayLine();
    this.getMay();
  }

  onEdit(): any{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }


  getMayLine = () => {
    //tslint:disable
     this.mayline.sort((a, b) => (b['Order - Number'] > a['Order - Number']) ? 1 : ((a['Order - Number']> b['Order - Number']) ? -1 : 0));
  }

  getMay = () => {
    //tslint:disable
     this.may.sort((a, b) => (b['Order - Number'] > a['Order - Number']) ? 1 : ((a['Order - Number']> b['Order - Number']) ? -1 : 0));
  }

  // raw data download AW Brain
   // tslint:disable-next-line:typedef
   downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Shipments-05-13.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  public removeSlashes(side: string): string {
    if (side) {
      side.replace(/\//g, '');
      return side.replace('<br/>', '');
    }
  }
}
