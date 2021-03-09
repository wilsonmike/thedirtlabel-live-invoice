import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-february',
  templateUrl: './february.component.html',
  styleUrls: ['./february.component.css']
})
export class FebruaryComponent implements OnInit {
  getOrders: any = [];
  term = '';
  searchline = '';
  lineitems: any = [];

  constructor(private service: DatafetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.fetchFebOrders().subscribe((res) => {
      console.log(res);
    });
  }

  onEdit(): any{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
