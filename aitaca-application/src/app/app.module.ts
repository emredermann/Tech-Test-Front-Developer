import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationPageFormComponent } from './application-page-form/application-page-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { MatDialogModule } from '@angular/material/dialog';
import { ApplicationSuccessPageComponent } from './application-success-page/application-success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationPageFormComponent,
    ApplicationSuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,  
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
