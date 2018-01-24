import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DenimComponent } from './denim/denim.component';
import { FootwearComponent } from './footwear/footwear.component';
import { JeansComponent } from './jeans/jeans.component';
import { OutwearComponent } from './outwear/outwear.component';
import { PantsComponent } from './pants/pants.component';
import { HomepageComponent } from "./homepage/homepage.component";
import { ShirtsComponent } from './shirts/shirts.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { ShortsComponent } from './shorts/shorts.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessoriesComponent,
    DenimComponent,
    HomepageComponent,
    FootwearComponent,
    JeansComponent,
    OutwearComponent,
    PantsComponent,
    ShirtsComponent,
    TShirtsComponent,
    ShortsComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'accessories', component: AccessoriesComponent },
      { path: 'denim', component: DenimComponent },
      { path: 'footwear', component: FootwearComponent },
      { path: 'jeans', component: JeansComponent },
      { path: 'outwear', component: OutwearComponent },
      { path: 'pants', component: PantsComponent },
      { path: 'shirts', component: ShirtsComponent },
      { path: 'shorts', component: ShortsComponent },
      { path: 't-shirts', component: TShirtsComponent },
      { path: 'productdetail', component: ProductdetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
