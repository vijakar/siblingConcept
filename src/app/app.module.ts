import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiblingCreateComponent } from './sibling-create/sibling-create.component';
import { SiblingEditComponent } from './sibling-edit/sibling-edit.component';
import { SiblingViewComponent } from './sibling-view/sibling-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SiblingCreateComponent,
    SiblingEditComponent,
    SiblingViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
