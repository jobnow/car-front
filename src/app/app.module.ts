import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ErrorResponse } from './http-error-handler-service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent, VeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService, ErrorResponse],
  bootstrap: [AppComponent]
})
export class AppModule { }
