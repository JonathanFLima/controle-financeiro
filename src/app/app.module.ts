import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { OverallStatusComponent } from './components/overall-status/overall-status.component';
import { MonthlySpendingsComponent } from './components/monthly-spendings/monthly-spendings.component';
import { SpendingsListComponent } from './components/monthly-spendings/spendings-list/spendings-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewPageComponent,
    OverallStatusComponent,
    MonthlySpendingsComponent,
    SpendingsListComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
