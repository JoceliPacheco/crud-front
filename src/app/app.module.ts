import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppMaskDirective } from './pipes/mask.directives';
import { FilterPipe } from './pipes/filter.pipe';
import { ApiRequest } from './services/api.requests';
import { ApiGrid } from './services/api.grids'; 
import { MaskService } from './services/mask.service';

import { AppComponent } from './app.component';
import { ControlesComponent } from './controles/controles.component'; 
import { ListaComponent } from './pages/lista/lista.component';

@NgModule({
  declarations: [
    AppMaskDirective,
    AppComponent,
    FilterPipe,
    ListaComponent,
    ControlesComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [ApiRequest, ApiGrid,   MaskService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
