import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.css']
})
export class MarchComponent implements OnInit {
  march: any = [];
  marchline: any = [];
  term = '';
  searchline = '';

  constructor(private service: DatafetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.fetchMarchLine().subscribe((res) => {
      // console.log(res);
      // console.log(this.marchline);
    });
    this.getMarch();
    this.getMarchLine();
  }
  getMarch = () => {
    this.service.fetchMarch().subscribe((res) => {
      this.march = res;
      this.march.splice(0, 1);
      console.log(this.march);
    });
  }
  getMarchLine = () => {
    this.service.fetchMarchLine().subscribe((res) => {
      this.marchline = res;
      this.marchline.splice(0, 1);
      console.log(this.marchline);
    });
  }

  onEdit(): any{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
