import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IntroComponent } from './intro/intro.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FrontendTechnologiesComponent } from './frontend-technologies/frontend-technologies.component';
import { BackendTechnologiesComponent } from './backend-technologies/backend-technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FrontendTechnologiesComponent,
    BackendTechnologiesComponent,
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
