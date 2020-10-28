import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { CountryInfoComponent } from './views/home/country-info/country-info.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import {NgBusyModule} from 'ng-busy';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ToastrModule.forRoot(),
    NgBusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
