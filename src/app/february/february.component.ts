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
    this.getShippedOrders();
    this.getFebLine();
  }

  getShippedOrders = () => {
    this.service.fetchFebOrders().subscribe((res) => {
      this.getOrders = res;
      this.getOrders.splice(0, 1);
      this.getOrders.sort((a, b) => (b.ordernumber > a.ordernumber) ? 1 : ((a.ordernumber > b.ordernumber) ? -1 : 0));
    });
  }

  getFebLine = () => {
    this.service.fetchFeb().subscribe((res) => {
      this.lineitems = res;
      this.lineitems.splice(0, 1);
      this.lineitems.sort((a, b) => (b.ordernumber > a.ordernumber) ? 1 : ((a.ordernumber > b.ordernumber) ? -1 : 0));
    });
  }

  onEdit(): any{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
