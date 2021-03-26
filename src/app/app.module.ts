import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { InventoryDataComponent } from './inventory-data/inventory-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FebruaryComponent } from './february/february.component';
import { PricingComponent } from './pricing/pricing.component';
import { MarchComponent } from './march/march.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LineChartComponent,
    MainPageComponent,
    FooterComponent,
    InventoryDataComponent,
    PageNotFoundComponent,
    FebruaryComponent,
    PricingComponent,
    MarchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
