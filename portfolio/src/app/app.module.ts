import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IntroComponent } from './intro/intro.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
