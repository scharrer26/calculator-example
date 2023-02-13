import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationsService } from './calculations.service';
import { IosCalculatorComponent } from './ios-calculator/ios-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    IosCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CalculationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
