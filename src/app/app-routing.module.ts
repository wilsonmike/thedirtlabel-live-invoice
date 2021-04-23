import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprilComponent } from './april/april.component';
import { FebruaryComponent } from './february/february.component';
import { InventoryDataComponent } from './inventory-data/inventory-data.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MarchComponent } from './march/march.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'feb', component: FebruaryComponent },
  { path: 'march', component: MarchComponent },
  { path: 'inventory-data', component: InventoryDataComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'april', component: AprilComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
